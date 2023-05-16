import React, { useEffect, useState } from "react";
import Job from "../pages/Job";

const Jobs = () => {
  const [activeTab, setActiveTab] = useState("Remote");
  const [jobs, setJobs] = useState([]);
  const handleBg = (tabname) => {
    setActiveTab(tabname);
  };

  useEffect(() => {
    fetch(`http://localhost:1000/alljob/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [activeTab]);

  return (
    <div>
      <div className="flex items-center justify-center my-10">
        <div
          className={`bg-gray-200 rounded-l-full cursor-pointer py-3 px-7 ${
            activeTab === "Remote" ? "bg-red-600 text-white" : ""
          }`}
          onClick={() => handleBg("Remote")}
        >
          <h1 className="text-lg font-semibold text-center">Remote</h1>
        </div>
        <div
          className={`bg-gray-200 rounded-r-full cursor-pointer py-3 px-7 ${
            activeTab === "Offline" ? "bg-red-600 text-white" : ""
          }`}
          onClick={() => handleBg("Offline")}
        >
          <h1 className="text-lg font-semibold text-center">Offline</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <Job key={job._id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
