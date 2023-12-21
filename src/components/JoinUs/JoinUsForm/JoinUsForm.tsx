"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Checkbox from "@/shared/components/Checkbox";

import fields from "./fields";

import validationSchema from "./validationSchema";

type FormData = {
  name: string;
  email: string;
  position: string;
  phone: string;
  message: string;
  confirm: boolean;
};

const JoinUsForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <label className="font-extralight text-xs/6 tracking-0.2em">
        {fields.name.label}
        <input
          className="bg-input-bg-color w-full h-6 pl-2 mt-1"
          {...register("name")}
          {...fields.name}
        />
      </label>
      <label className="font-extralight text-xs/6 tracking-0.2em">
        {fields.email.label}
        <input
          className="bg-input-bg-color w-full h-6 pl-2 mt-1"
          {...register("email")}
          {...fields.email}
        />
      </label>
      <label className="font-extralight text-xs/6 tracking-0.2em">
        {fields.position.label}
        <input
          className="bg-input-bg-color w-full h-6 pl-2 mt-1"
          {...register("position")}
          {...fields.position}
        />
      </label>
      <label className="font-extralight text-xs/6 tracking-0.2em">
        {fields.phone.label}
        <input
          className="bg-input-bg-color w-full h-6 pl-2 mt-1"
          {...register("phone")}
          {...fields.phone}
        />
      </label>
      <label className="font-extralight text-xs/6 tracking-0.2em">
        {fields.message.label}
        <textarea
          className="block bg-input-bg-color resize-none pl-2 w-full h-48 mt-1"
          {...register("message")}
          {...fields.message}
        />
      </label>

      <Checkbox
        {...register("confirm")}
        isChecked={watch("confirm")}
        {...fields.confirm}
      />

      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span>This field is required</span>} */}

      <button className="uppercase self-end text-3xl/normal" type="submit">
        Send
      </button>
    </form>
  );
};

export default JoinUsForm;
