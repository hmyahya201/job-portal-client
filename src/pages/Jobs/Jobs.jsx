/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Jobs.css";
import { FaArrowRight } from "react-icons/fa";
import Job from "../Job/Job";

const Jobs = () => {
  const [jobs, setJob] = useState([]);
  const [activeTab, setActiveTab] = useState("Remote");
  
  useEffect(()=>{
    fetch(`http://localhost:5000/all-jobs/${activeTab}`)
    .then(res=>res.json())
    .then(data=>setJob(data))
  },[activeTab])

  const handleTabClick = (tabStatus) => {
    setActiveTab(tabStatus);
  };

  return (
    <div className="job-container p-5">
      <h1 className="job_title text-center">Available Job's</h1>
      <div className="tab-container text-center">
        <div className="text-center w-100 m-auto">
          <div className="job_tab pt-3 d-flex justify-content-center align-items-center">


          <div 
          onClick={()=>handleTabClick("Remote")}
          className={`mtab ${activeTab == "Remote"? "active": ""}`}
          >
            Remote
          </div>
          <div 
          onClick={()=>handleTabClick("On Site")}
          className={`mtab ${activeTab == "On Site"? "active": ""}`}
          >
            On Site
          </div>
          </div>
        </div>
      </div>
      <div className="jobs-container mt-5 row">
        {jobs?.map((job) => (
          <Job key={job._id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
