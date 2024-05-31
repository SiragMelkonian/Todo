"use client";
import React from "react";
import { apiCall } from "@/components/util/apiCall";
import { useForm } from "react-hook-form";

type FormData = {
  title: string;
};
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await apiCall("/createTodo", "POST", data, {
        "Content-Type": "application/json",
      });
      console.log(response);
      alert(response.message);
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  };
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-between px-5"
    >
      <div className="rounded-10">
        <input
          type="text"
          placeholder="Title"
          {...register("title", { required: true && "title is required" })}
          className="rounded-lg py-1 px-2 outline-none"
        />
        {errors && errors?.title && (
          <p className="text-red-500 mt-1 font-bold text-16 pl-1">
            {errors.title.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="rounded-lg py-1 px-2 bg-slate-300 hover:bg-slate-400 text-balance font-bold h-[34px]"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
