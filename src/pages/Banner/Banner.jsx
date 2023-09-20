
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { useForm } from "react-hook-form"
import "./Banner.css";
import { useEffect, useState} from "react";

function Banner() {
  const [categories, setCategories] = useState([])
  const [locations, setLocations] = useState([])

 //for job location
useEffect(()=>{
  fetch("http://localhost:5000/location")
  .then(res=>res.json())
  .then(data=>{
    setLocations(data)
  })
},[locations])

//for job title
useEffect(()=>{
  fetch("http://localhost:5000/category")
  .then(res=>res.json())
  .then(data=>{
    setCategories(data)
  })
},[categories])
  const {
    register,
    handleSubmit,
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (

    <section className="banner-container">
        <div className="text-center">
          <div className="col-sm-12 ">
            <h4 className="sub-title">Helping you to find any type of job</h4>
            <h1 className="title fw-bolder mt-4">
              Find Your Dream <br /> Job Today
            </h1>

            <div className="mt-5 text-center">
              <form className="form-design" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-field me-3">
                <select className="select-field"  {...register("category")}>
                  {
                    categories.map(option=><option
                    key={option._id}
                    value={option.name}
                    >
                      {option.name}
                    </option>)
                  }
                </select>
                <p className="mt-2"><FaSearch color="gray" fontSize="1em" /></p>
                </div>

                <div className="input-field location-field">
                <select className="select-field"  {...register("location")}>
                    {
                      locations.map(location=><option
                      key={location._id}
                      value={location.name}
                      >{location.name}</option>)
                    }
                </select>
                <p className="mt-2"><FaMapMarkerAlt color="gray" fontSize="1.5em" /></p>
                </div>
               
                <button className="msubmit-btn" type="submit"> <FaSearch className="search-btn" fontSize="4em" /></button>
              </form>
            </div>

          </div>
        </div>
    </section>



  );
}

export default Banner;
