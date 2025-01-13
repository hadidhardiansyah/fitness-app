import { ClassType, SelectedPage } from "@/shared/types";
import Image1 from "@/assets/image1.png";
import Image2 from "@/assets/image2.png";
import Image3 from "@/assets/image3.png";
import Image4 from "@/assets/image4.png";
import Image5 from "@/assets/image5.png";
import Image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Build strength and tone your muscles with expert-led weight training classes, designed for all fitness levels to help you achieve your goals efficiently.",
    image: Image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Find balance and flexibility with calming and rejuvenating yoga classes, suitable for all levels and led by experienced instructors.",
    image: Image2,
  },
  {
    name: "AB Core Classes",
    description:
      "Strengthen your core and sculpt your abs with focused, high-energy classes designed to enhance stability and endurance for all fitness levels.",
    image: Image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Experience thrilling and dynamic workouts that challenge your limits, combining fitness with fun and adventure for an exciting way to stay active.",
    image: Image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Engage in diverse and energizing workouts designed to improve strength, endurance, and overall well-being, tailored for all fitness levels.",
    image: Image5,
  },
  {
    name: "Training Classes",
    image: Image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Discover a variety of classes designed to inspire, challenge, and
              energize you. From high-intensity workouts like cardio and
              strength training to calming yoga and pilates sessions, our
              classes cater to all fitness levels and interests. Each session is
              led by expert instructors who provide personalized guidance and
              motivation to help you reach your goals.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index: number) => (
              <Class
                key={`${item.image}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
