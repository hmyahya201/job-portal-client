/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaSearch,
  FaArrowAltCircleDown,
  FaMapMarkerAlt,
  FaPhoenixFramework,
} from "react-icons/fa";
import { HiStatusOffline, HiStatusOnline } from "react-icons/hi";
import "./category.css";

import { BsPersonWorkspace } from "react-icons/bs";

const Category = () => {
  return (
    <div className="main-category-container pt-5 pb-5">
      <h1 className="text-center pb-2 fw-semibold display-3 category-title">Category</h1>
      <p className="category_sub-title mx-auto text-center fs-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, doloremque? Sapiente nam qui repudiandae accusamus</p>
      <div className="category-container row mt-5">
        <div className="card">
          <img src="" alt="" />
          <HiStatusOffline className="category-icon" fontSize="4em" />
          <h1 className="fs-2 category-heading">Offline</h1>
        </div>
        <div className="card">
          <HiStatusOnline className="category-icon" fontSize="4em" />
          <h1 className="fs-2 category-heading">Remote</h1>
        </div>
        <div className="card">
          <FaPhoenixFramework className="category-icon" fontSize="4em" />
          <h1 className="fs-2 category-heading">Part Time</h1>
        </div>
        <div className="card">
          <BsPersonWorkspace className="category-icon" fontSize="4em" />
          <h1 className="fs-2 category-heading">Full time</h1>
        </div>
      </div>
    </div>
  );
};

export default Category;
