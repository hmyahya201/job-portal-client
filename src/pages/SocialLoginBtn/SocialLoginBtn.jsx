
import { useContext } from "react";
import "./SocialLoginBtn.css";
import { AuthContext } from "../../provider/AuthProvider";



const SocialLoginBtn = () => {
  const {gooleLogin} = useContext(AuthContext)
  const handleGoogleLogin = ()=>{
    gooleLogin()
    .then((result)=>{
      console.log(result.user)
    })
    .then(error=>console.log(error))
  }

  return (
    <div className=" social-button-container w-50 mt-3">
      <div className="">
        <img
          onClick={handleGoogleLogin}
          className=" social-button"
          src="https://i.ibb.co/gSTHXZJ/google-btn.png"
          alt=""
        />
      </div>
      <div className="">
        <img
          className=" social-button"
          src="https://i.ibb.co/g9f4P0S/github-btn.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SocialLoginBtn;
