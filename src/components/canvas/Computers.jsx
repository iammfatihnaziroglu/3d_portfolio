import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader';

const Computers = ({ isMobile, zoomedIn }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.4} groundColor='black'/>
      <pointLight intensity={5}/>
      <spotLight 
        position={[-20, 50, 10 ]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2]: [ 0, -3.25, -1.5 ]}
        rotation={[ -0.01, -0.2, -0.1 ]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [zoomedIn, setZoomedIn] = useState(false);
  const [clickable, setClickable] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange); // removeEventListener kullanımı düzeltiliyor
    }
  }, []);

  const canvasRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        setZoomedIn(!zoomedIn);
        canvasRef.current.style.cursor = zoomedIn ? "auto" : "zoom-in"; // Mouse imlecinin stilini güncelle
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [zoomedIn]);

  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 1, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      ref={canvasRef}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={zoomedIn} />
        <Computers isMobile={isMobile} zoomedIn={zoomedIn} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;
