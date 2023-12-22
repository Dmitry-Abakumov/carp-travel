"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Checkbox from "@/shared/components/Checkbox";
import ValidationError from "@/shared/components/VlidationError";

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
  const [isPhoneInputOnFocus, setIsPhoneInputOnFocus] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => reset();

  const isPhonePlaceholderShow =
    !isPhoneInputOnFocus && watch("phone") === "+ 380";

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="font-extralight text-xs/6 tracking-0.2em">
          {fields.name.label}
          <input
            className="bg-input-bg-color w-full h-6 pl-2 mt-1 placeholder:text-secondary-text-color"
            {...register("name")}
            {...fields.name}
          />
        </label>
        {errors.name && (
          <ValidationError errorMessage={errors.name.message as string} />
        )}
      </div>

      <div>
        <label className="font-extralight text-xs/6 tracking-0.2em">
          {fields.email.label}
          <input
            className="bg-input-bg-color w-full h-6 pl-2 mt-1 placeholder:text-secondary-text-color"
            {...register("email")}
            {...fields.email}
          />
        </label>
        {errors.email && (
          <ValidationError errorMessage={errors.email.message as string} />
        )}
      </div>

      <div>
        <label className="font-extralight text-xs/6 tracking-0.2em">
          {fields.position.label}
          <input
            className="bg-input-bg-color w-full h-6 pl-2 mt-1 placeholder:text-secondary-text-color"
            {...register("position")}
            {...fields.position}
          />
        </label>
        {errors.position && (
          <ValidationError errorMessage={errors.position.message as string} />
        )}
      </div>

      <div>
        <label className="font-extralight text-xs/6 tracking-0.2em">
          {fields.phone.label}
          <span className="relative block mt-1 font-extralight text-xs/6 tracking-normal">
            <input
              className="bg-input-bg-color w-full h-6 pl-2 placeholder:text-secondary-text-color"
              {...register("phone")}
              {...fields.phone}
              onFocus={() => setIsPhoneInputOnFocus(true)}
              onBlur={() => setIsPhoneInputOnFocus(false)}
            />
            {isPhonePlaceholderShow && (
              <span
                className={`absolute block top-0 left-11 text-secondary-text-color`}
              >
                (097) 12 34 567
              </span>
            )}
          </span>
        </label>
        {errors.phone && (
          <ValidationError errorMessage={errors.phone.message as string} />
        )}
      </div>

      <div>
        <label className="font-extralight text-xs/6 tracking-0.2em">
          {fields.message.label}
          <textarea
            className="block bg-input-bg-color resize-none pl-2 w-full h-48 mt-1"
            {...register("message")}
            {...fields.message}
          />
        </label>
        {errors.message && (
          <ValidationError errorMessage={errors.message.message as string} />
        )}
      </div>

      <div>
        <Checkbox
          {...register("confirm")}
          isChecked={watch("confirm")}
          {...fields.confirm}
        />
        {errors.confirm && (
          <ValidationError errorMessage={errors.confirm.message as string} />
        )}
      </div>

      <button className="uppercase self-end text-3xl/normal" type="submit">
        Send
      </button>
    </form>
  );
};

export default JoinUsForm;
