/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./AddJob.css";
import CreatableSelect from "react-select/creatable";
import { AuthContext } from "../../provider/AuthProvider";
const AddJob = () => {
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState(null);
  const [locations, setLocation] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(()=>{
    fetch("jobCategory.json").then(res=>res.json()).then(data=>setCategories(data))},[])

  useEffect(()=>{
    fetch("countries.json").then(res=>res.json()).then(data=>setLocation(data))},[])

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOption;
    console.log("from", data)
  };
  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Redux", label: "Redux" },
  ];
  return (
    <div className="add-job-container">
      <div className="add-job row">

        <div className="col-lg-8 col-sm-12">
          <form onSubmit={handleSubmit(onSubmit)} className="job-post_form">
            {errors.exampleRequired && <span>This field is required</span>}
            <h2 className="fs-2 fw-bolder p-4">Job Information</h2>
            <div className="job-post_form_card">
              <div>
                <label>
                  Job Title
                </label>
                <input
                  className="text-input"
                  {...register("title")}
                  placeholder="title"
                  defaultValue="Web developer"
                />
              </div>

              <div>
                <label>Selery</label>
                <input
                  className="text-input"
                  {...register("salary", { required: true })}
                  placeholder="salary"
                  defaultValue="30k"
                />
              </div>
              <div>
                <label>Vacancy</label>
                <input
                  className="text-input"
                  {...register("vacancy", { required: true })}
                  placeholder="vacancy"
                  type="number"
                />
              </div>

              <div>
                <label>Category</label>
                <select className="text-input" {...register("category")}>
                 {
                  categories.map((category, i)=><option key={i} value={category.name}>{category.name}</option>)
                 }
                </select>
              </div>

              <div>
                <label>Job Type</label>
                <select className="text-input" {...register("status")}>
                  <option value="remote">Remote</option>
                  <option value="offline">Offline</option>
                </select>
              </div>
              <div>
                <label>Location</label>
                <select className="text-input" {...register("location")}>
                    {
                      locations.map((location, i)=><option key={i} value={location}>{location}</option>)
                    }
                </select>
              </div>

             <div>
              <label>Image Url</label>
              <input
                className="text-input"
                {...register("image")}
                placeholder="image link"
                type="url"
                defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
             </div>

              <div>
                <label>Deadline</label>
                <input
                  className="text-input"
                  {...register("deadline")}
                  placeholder="deadline"
                  type="date"
                />
              </div>

              <div>
                <label>Email</label>
                <input
                  className="text-input"
                  value={user?.email}
                  {...register("postedBy")}
                  placeholder="your email"
                  type="email"
                />
              </div>

              <div>
                <label>Skills</label>
                <CreatableSelect
                  className="skills-input"
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  isMulti
                />
              </div>

              <div>
                <label>Description</label>
                <input
                  className="text-input"
                  {...register("description")}
                  placeholder="description"
                />
              </div>
            </div>
            <input className="submit-btn p-3 mt-3 rounded" value="Post Job" type="submit" />
          </form>
        </div>

        <div className="col-lg-4 col-sm-12">
          <img
            className="w-100"
            src="https://i.ibb.co/rthZ75K/pngtree-job-vacancy-with-join-our-team-recruitment-vector-design-png-image-6419066-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AddJob;
