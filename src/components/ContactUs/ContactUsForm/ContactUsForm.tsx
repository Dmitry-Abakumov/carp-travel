"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import ValidationError from "@/shared/components/VlidationError";

import validationSchema from "./validationSchema";

import fields from "./fields";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => reset();

  return (
    <form
      className="flex flex-col gap-4 mt-3 md:flex-row md:mt-16 xl:flex-col xl:mt-0 xl:w-[607px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-4 xl:flex-row xl:gap-5">
        <div className="xl:w-full">
          <label className="font-extralight text-xs/6 tracking-[0.2em] xl:block">
            {fields.name.label}
            <input
              className={`bg-input-bg-color w-full h-6 pl-2 mt-1 placeholder:text-secondary-text-color xl:h-6 xl:text-[20px]/6 ${
                errors.name ? "placeholder:text-error-color" : ""
              }`}
              {...register("name")}
              {...fields.name}
            />
          </label>
          {errors.name && (
            <ValidationError errorMessage={errors.name.message as string} />
          )}
        </div>

        <div className="xl:w-full">
          <label className="font-extralight text-xs/6 tracking-[0.2em] xl:block">
            {fields.email.label}
            <input
              className={`bg-input-bg-color w-full h-6 pl-2 mt-1 placeholder:text-secondary-text-color xl:h-6 xl:text-[20px]/6 ${
                errors.email ? "placeholder:text-error-color" : ""
              }`}
              {...register("email")}
              {...fields.email}
            />
          </label>
          {errors.email && (
            <ValidationError errorMessage={errors.email.message as string} />
          )}
        </div>
      </div>

      <div className="flex flex-col">
        <label className="font-extralight text-xs/6 tracking-[0.2em]">
          {fields.message.label}
          <textarea
            className="block bg-input-bg-color resize-none pl-2 w-full h-48 mt-1 md:w-[463px] md:h-[221px] xl:w-full xl:h-[174px]"
            {...register("message")}
            {...fields.message}
          />
        </label>
        {errors.message && (
          <ValidationError errorMessage={errors.message.message as string} />
        )}

        <button
          className="self-end uppercase text-3xl/normal mt-4 xl:mt-6"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
