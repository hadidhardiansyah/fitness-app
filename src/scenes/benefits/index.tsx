import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Modern, high-tech facilities equipped with the latest technology, offering top-notch infrastructure and innovation to meet the highest standards.",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "A wide range of classes tailored to various interests, skill levels, and goals, providing enriching and inclusive learning experiences for everyone.",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Highly skilled and certified trainers with extensive experience, dedicated to guiding and inspiring you to achieve your goals with professional expertise.",
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return <section
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20"
  >
    <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
    >
        {/* HEADER */}
        <motion.div 
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
            }}
        >
            <HText>MORE THAN JUST GYM.</HText>
            <p className="my-5 text-sm">
                We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
            </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div 
            className="md:flex items-center justify-between gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
        >
            {benefits.map((benefit: BenefitType) => (
                <Benefit 
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                />
            ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            {/* GRAPHIC */}
            <img 
                src={BenefitsPageGraphic}
                className="mx-auto"
                alt="benefits-page-graphic"
            />            

            {/* DESCRIPTION */}
            <div>
                {/* TITLE */}
                <div className="relative">
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >
                            <HText>
                                MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                <span className="text-primary-500">FIT</span>.
                            </HText>
                        </motion.div>
                    </div>
                </div>

                {/* DESCRIPT */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className="my-5">
                        Join a thriving community of fitness enthusiasts who are transforming their lives every day. With access to world-class facilities, diverse workout programs, and expert trainers, millions of members worldwide are achieving their health and fitness goals while enjoying every step of the journey. Our supportive environment ensures that everyone, from beginners to seasoned athletes, feels welcome and motivated to succeed.
                    </p>
                    <p className="mb-5">
                    Experience the joy of fitness and the power of community as you embark on your personal wellness journey. Whether it's through group classes, personal training, or solo workouts, our members find inspiration, build confidence, and celebrate their progress together. Become part of a global movement committed to healthy living and happiness today!
                    </p>
                </motion.div>

                {/* BUTTON */}
                <div className="relative mt-16">
                    <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  </section>
}

export default Benefits