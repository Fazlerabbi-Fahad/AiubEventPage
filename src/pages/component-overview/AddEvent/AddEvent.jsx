import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function AddEvent() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="max-w-screen-lg m-auto">
      <div className="text-[11px] hidden md:flex my-10 ">
        <p className="text-primary mr-1">
          <Link to="/">Home</Link>
        </p>
        <p className="mr-1 text-[#8392A1]">&gt;</p>
        <p className="text-[#8392A1] mt-0">News & Events</p>
      </div>
      <div className="bg-[#EEEEEE] w-full rounded-[7.49px] mt-0 md:mt-5 p-10">
        <div>
          <h4 className="font-bold text-[#004EA8] text-xl text-center">
            Add Events
          </h4>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} action="" className="mt-2">
          <div className="grid gap-2 md:gap-8 grid-cols-1 md:grid-cols-2 px-10">
            <div>
              <div className="label">
                <span className="label-text text-primary">Event Title</span>
              </div>
              <input
                {...register("title", { required: true })}
                name="title"
                type="text"
                className="input input-bordered w-full input-sm rounded-[3.27px] border-[#034EA1] shadow-lg"
              />
            </div>
            <div>
              <div className="label">
                <span className="label-text text-primary">Event Date</span>
              </div>
              <input
                {...register("date", { required: true })}
                name="date"
                type="text"
                className="input input-bordered w-full input-sm rounded-[3.27px] border-[#034EA1] shadow-lg"
              />
            </div>
          </div>
          <div className="grid gap-2 md:gap-8 grid-cols-1 md:grid-cols-2 px-10">
            <div>
              <div className="label">
                <span className="label-text text-primary">
                  Event Registration Link
                </span>
              </div>
              <input
                {...register("eventRegistration", { required: true })}
                name="eventRegistration"
                type="text"
                className="input input-bordered w-full input-sm rounded-[3.27px] border-[#034EA1] shadow-lg"
              />
            </div>
            <div>
              <div className="label">
                <span className="label-text text-primary">
                  Last Date For Registration
                </span>
              </div>
              <input
                {...register("lastDate", { required: true })}
                name="lastDate"
                type="text"
                className="input input-bordered w-full input-sm rounded-[3.27px] border-[#034EA1] shadow-lg"
              />
            </div>
          </div>
          <div className="grid gap-2 md:gap-8 grid-cols-1 md:grid-cols-2 px-10">
            <div>
              <div className="label">
                <span className="label-text text-primary">Event Guest</span>
              </div>
              <input
                {...register("guest", { required: true })}
                name="guest"
                type="text"
                className="input input-bordered w-full input-sm rounded-[3.27px] border-[#034EA1] shadow-lg"
              />
            </div>
            <div>
              <div className="label">
                <span className="label-text text-primary">Event Images</span>
              </div>
              <input
                {...register("images", { required: true })}
                name="images"
                type="text"
                className="input input-bordered w-full input-sm rounded-[3.27px] border-[#034EA1] shadow-lg"
              />
            </div>
          </div>
          <div className="grid gap-8 grid-cols-1 px-10 mt-3">
            <div>
              <div className="label">
                <span className="label-text text-primary">
                  Event Description
                </span>
              </div>
              <textarea
                {...register("description", { required: true })}
                name="description"
                className="textarea textarea-bordered textarea-lg w-full rounded-[3.27px] border-[#034EA1] shadow-lg"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <button className="btn btn-primary bg-primary btn-sm rounded-[3.27px] text-white  hover:bg-primary text-[8.91px] flex mr-4">
              <Link to="/event">Cancel</Link>
            </button>
            <button
              type="submit"
              className="btn btn-outline btn-sm rounded-[3.27px] text-[#034EA1] border-[#034EA1] hover:bg-primary text-[8.91px] flex "
            >
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
