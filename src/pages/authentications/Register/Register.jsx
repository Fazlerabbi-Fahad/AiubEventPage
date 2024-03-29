import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import logo from "../../../assets/logo/logo.svg";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contextApi/AuthProvider";
import { toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        toast.success("Account created successfully");
      })
      .catch((error) => toast.error(error.message.split("/")[1].split(")")));
  };

  const handleLogin = () => {
    navigate("/login");
  };
  const { register, handleSubmit } = useForm();

  return (
    <div className="bg-[#EFEFEF] w-[100vw] h-[100vh] overflow-hidden p-0">
      <div className="card shrink-0 shadow-xl bg-base-100 rounded-lg absolute left-0 md:left-[30%] mt-10 p-5">
        <div className="flex justify-center ml-5">
          <div className="mb-8">
            <img src={logo} width="120px" />
          </div>
          <div class="divider divider-horizontal w-4 h-[80px] divider-[#EEEEEE]"></div>
          <div>
            <h4 className="font-semibold text-sm">
              AMERICAN INTERNATIONAL UNIVERSITY-BANGLADESH
            </h4>
            <p className="font-medium text-xs">-where leaders are created</p>
          </div>
        </div>
        <p className="text-primary font-medium text-center mb-[-10px]">
          Sign up with your email and name
        </p>
        <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
          <div className="form-control">
            <div>
              <input
                {...register("name", { required: true })}
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered w-full input-md rounded-[3.27px] border-lg border-[#034EA1] shadow-lg"
              />
              <input
                {...register("email", { required: true })}
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered w-full input-md rounded-[3.27px] border-lg border-[#034EA1] shadow-lg mt-5"
              />
              <input
                {...register("password", { required: true })}
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered w-full input-md rounded-[3.27px] border-lg border-[#034EA1] shadow-lg mt-5"
              />
            </div>
          </div>
          <div className="form-control mt-5">
            <button className="btn bg-primary text-white hover:text-primary text-lg">
              Register
            </button>
          </div>
          <p onClick={handleLogin} className="text-sm text-primary">
            Have an account?
            <span className="cursor-pointer">Login</span>
          </p>
        </form>
      </div>
    </div>
  );
}
