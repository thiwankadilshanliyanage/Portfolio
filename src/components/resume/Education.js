import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2004 - 2018</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Ordinary Level Exam in 2014 (index- 40958590)"
            subTitle="Royal Collage Horana"
            result="A2/B4/C3"
            des=""
          />
          <ResumeCard
            title="Get Advanced Level Mathematics in 2018(index- 1654942)"
            subTitle="Royal Collage Horana"
            result="S3"
            des="Combined Mathematics - s
            Physics - s
            Chemistry - s
            General English - s"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2023</p>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Professional Diploma in Software Engineering"
            subTitle="Java Institute, Colombo"
            result="2019 - 2020"
            des=""
          />
          <ResumeCard
            title="Bachelor of Science with Honours Software Engineering"
            subTitle="Birmingham City University"
            result="2020 - 2023"
            des=""
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education