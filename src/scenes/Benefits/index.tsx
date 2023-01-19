import React from "react";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { BenefitType, SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, blanditiis officiis corporis perspiciatis nisi iure.   ",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, blanditiis officiis corporis perspiciatis nisi iure.   ",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Export and Pro Trainers ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, blanditiis officiis corporis perspiciatis nisi iure.   ",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
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
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm ">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. we provide true
            care into each and every member.
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex "
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
        <div>
          {/* GRAPHIC */}
          <img src="" alt="" />
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <div>
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>{" "}
                  </HText>
                </div>
              </div>
            </div>
            {/* DESCRIPTION */}
            <div>
              <p className="my-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus incidunt doloremque, deleniti, iure dolorem ut
                natus libero sunt deserunt ipsum nisi saepe? Fugit ipsum
                ducimus, repellat voluptatibus cumque mollitia vero facere quas
                fugiat voluptas consequatur excepturi reiciendis ipsam ea omnis
                voluptatem harum eum rerum sed doloremque facilis porro maiores
                et? Ut corrupti, dolorem error iste aut quaerat enim sit
                officiis.
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                distinctio sapiente, veritatis, veniam ipsum aspernatur sit,
                blanditiis hic esse mollitia recusandae eos sunt nulla molestias
                fugiat accusantium fugit praesentium et beatae perferendis fuga
                itaque sint. Sapiente ut doloribus dolorem aperiam!
              </p>
            </div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles ">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
