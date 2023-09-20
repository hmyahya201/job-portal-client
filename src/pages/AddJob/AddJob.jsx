/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import "./AddJob.css";
import CreatableSelect from "react-select/creatable";
import { AuthContext } from "../../provider/AuthProvider";
const AddJob = () => {
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOption;

    fetch("http://localhost:5000/post-job", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    console.log(data);
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
  //   console.log(user);
  return (
    <div className="add-job-container">
      <div className="add-job row">

        <div className="col-lg-8 col-sm-12">
          <form onSubmit={handleSubmit(onSubmit)} className="job-post_form">
            {errors.exampleRequired && <span>This field is required</span>}
            <h2 className="fs-2 fw-bolder p-4">Job Information</h2>
            <div className="job-post_form_card">
              <div>
                <label htmlFor="title">
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
                <label htmlFor="selery">Selery</label>
                <input
                  className="text-input"
                  {...register("salary", { required: true })}
                  placeholder="salary"
                  defaultValue="30k"
                />
              </div>
              <div>
                <label htmlFor="vacancy">Vacancy</label>
                <input
                  className="text-input"
                  {...register("vacancy", { required: true })}
                  placeholder="vacancy"
                  type="number"
                />
              </div>

              <div>
                <label htmlFor="">Category</label>
                <select className="text-input" {...register("category")}>
                  <option value="Engineering">engineering</option>
                  <option value="Editor">Editor</option>
                  <option value="writer">Writer</option>
                  <option value="Developer">Developer</option>
                </select>
              </div>

              <div>
                <label htmlFor="">Job Type</label>
                <select className="text-input" {...register("status")}>
                  <option value="remote">Remote</option>
                  <option value="offline">Offline</option>
                </select>
              </div>
              <div>
                <label htmlFor="">Location</label>
                <select className="text-input" {...register("status")}>
                  <option value="remote">Remot</option>
                  <option value="offline">Offline</option>
                </select>
              </div>

             <div>
              <label htmlFor="">Image Url</label>
              <input
                className="text-input"
                {...register("image")}
                placeholder="image link"
                type="url"
                defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
             </div>

              <div>
                <label htmlFor="">Deadline</label>
                <input
                  className="text-input"
                  {...register("deadline")}
                  placeholder="deadline"
                  type="date"
                />
              </div>

              <div>
                <label htmlFor="">Email</label>
                <input
                  className="text-input"
                  value={user?.email}
                  {...register("postedBy")}
                  placeholder="your email"
                  type="email"
                />
              </div>

              <div>
                <label htmlFor="">Skills</label>
                <CreatableSelect
                  className="skills-input"
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  isMulti
                />
              </div>

              <div>
                <label htmlFor="">Description</label>
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
