import React, { useState } from "react";

const Job = ({ job }) => {
  console.log(job);
  const {
    category,
    title,
    status,
    vacancy,
    salary,
    photoURL,
    skils,
    email,
    desc,
    date,
  } = job;
  return (
    <div>
      <div className="h-[550px] flex flex-col justify-between bg-gray-100 border-gray-300 p-7 rounded-lg border-2">
        <div className="bg-black overflow-hidden h-2/3 rounded-lg">
          <img src={photoURL} alt="" />
        </div>
        <div className="my-5">
          <h1 className="font-bold mt-5 text-black text-2xl">{title}</h1>
          <p className="badge badge-primary">{category}</p>
          <h3 className="text-lg text-gray-600 mt-3">
            <span className="text-black font-bold">Salary :</span> {salary}
          </h3>
        </div>
        <div className="flex justify-between items-end">
          <button className="btn btn-primary">Job Details</button>
          <p className="text-sm text-gray-500">Date : {date}</p>
        </div>
      </div>
    </div>
  );
};

export default Job;
