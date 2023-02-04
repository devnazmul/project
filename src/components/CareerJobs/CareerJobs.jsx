import React from "react";
import jobImage1 from '../../assets/Job1.jpg';
import jobImage2 from '../../assets/job2.jpg';
import jobImage3 from '../../assets/job3.jpg';
import jobImage4 from '../../assets/job4.jpg';
import JobCircularCard from "./JobCircularCard";

export default function CareerJobs() {
  return (
    <div className="
    grid 
    grid-cols-1 
    gap-10 
    mt-10 
    w-full 
    px-5
    sm:grid-cols-2
    lg:grid-cols-3
    xl:py-8  
    xl:px-36
    ">
      <JobCircularCard
        title={`Account Manager`}
        image={jobImage1}
        details={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit `}
        location={`Mumbai`}
      />
      <JobCircularCard
        title={`Account Manager`}
        image={jobImage2}
        details={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit `}
        location={`Mumbai`}
      />
      <JobCircularCard
        title={`Account Manager`}
        image={jobImage3}
        details={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit `}
        location={`Mumbai`}
      />
      <JobCircularCard
        title={`Account Manager`}
        image={jobImage4}
        details={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit `}
        location={`Mumbai`}
      />

    </div>
  );
}
