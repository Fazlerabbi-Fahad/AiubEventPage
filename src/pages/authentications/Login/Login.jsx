import React from "react";
import { useForm } from "react-hook-form";
import logo from "../../../assets/logo/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
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
          Sign in with your email
        </p>
        <form className="card-body">
          <div className="form-control">
            <div>
              <input
                {...register("email", { required: true })}
                name="email"
                type="text"
                placeholder="Email"
                className="input input-bordered w-full input-md rounded-[3.27px] border-lg border-[#034EA1] shadow-lg"
              />
              <input
                {...register("title", { required: true })}
                name="title"
                type="text"
                placeholder="Password"
                className="input input-bordered w-full input-md rounded-[3.27px] border-lg border-[#034EA1] shadow-lg mt-5"
              />
            </div>
          </div>
          <div className="form-control mt-5">
            <button className="btn bg-primary text-white hover:text-primary text-lg">
              Login
            </button>
          </div>
          <p onClick={handleRegister} className="text-sm text-primary">
            Don’t have any account?{" "}
            <span className="cursor-pointer">Register</span>
          </p>
        </form>
      </div>
    </div>
  );
}
