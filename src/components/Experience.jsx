import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: " 7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
        <a
        href={experience.company_link}
        target="_blank"
        rel="noopener noreferrer"
        >
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      </a>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">
        <a
           href={experience.company_link}
           target="_blank"
           rel="noopener noreferrer"
           className="hover:underline"
         >
         {experience.title}
        </a>
        </h3>
      <p
        className="text-secondary text-[16px] font-semibold "
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I Have Done So Far</p>
        <h2 className={styles.sectionHeadText}>My Projects </h2>
      </motion.div>
     
      <div className='w-full flex'>
        <motion.p
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The world of front-end development is a place of constant renewal, and I am always committed to staying up to date. By discovering new design trends and continuously learning, I ensure that I'm equipped to incorporate the latest technologies and best practices into my work. This commitment to learning is the key to delivering cutting-edge projects that not only meet but exceed expectations.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
