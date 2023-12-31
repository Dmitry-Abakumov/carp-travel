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
    <form
      className="flex flex-col gap-5 md:mt-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="md:flex md:gap-5">
        <div className="flex flex-col gap-4 md:h-256px">
          <div className="relative">
            <label className="font-extralight text-xs/6 tracking-0.2em">
              {fields.name.label}
              <input
                className="bg-input-bg-color w-full h-6 pl-2 mt-1 placeholder:text-secondary-text-color"
                {...register("name")}
                {...fields.name}
              />
            </label>
            {errors.name && (
              <ValidationError
                className="absolute right-0 -bottom-5"
                errorMessage={errors.name.message as string}
              />
            )}
          </div>

          <div className="relative">
            <label className="font-extralight text-xs/6 tracking-0.2em">
              {fields.email.label}
              <input
                className="bg-input-bg-color w-full h-6 pl-2 mt-1 placeholder:text-secondary-text-color"
                {...register("email")}
                {...fields.email}
              />
            </label>
            {errors.email && (
              <ValidationError
                className="absolute right-0 -bottom-5"
                errorMessage={errors.email.message as string}
              />
            )}
          </div>

          <div className="relative">
            <label className="font-extralight text-xs/6 tracking-0.2em">
              {fields.position.label}
              <input
                className="bg-input-bg-color w-full h-6 pl-2 mt-1 placeholder:text-secondary-text-color"
                {...register("position")}
                {...fields.position}
              />
            </label>
            {errors.position && (
              <ValidationError
                className="absolute right-0 -bottom-5"
                errorMessage={errors.position.message as string}
              />
            )}
          </div>

          <div className="relative">
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
              <ValidationError
                className="absolute right-0 -bottom-5"
                errorMessage={errors.phone.message as string}
              />
            )}
          </div>
        </div>

        <div className="relative">
          <label className="block font-extralight text-xs/6 tracking-0.2em">
            {fields.message.label}
            <textarea
              className="block bg-input-bg-color resize-none pl-2 w-full h-48 mt-1 md:h-235px md:w-220px"
              {...register("message")}
              {...fields.message}
            />
          </label>
          {errors.message && (
            <ValidationError
              className="absolute right-0 -bottom-5"
              errorMessage={errors.message.message as string}
            />
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="relative">
          <Checkbox
            labelClassName="max-w-192px"
            {...register("confirm")}
            isChecked={watch("confirm")}
            {...fields.confirm}
          />
          {errors.confirm && (
            <ValidationError
              className="absolute left-3 -bottom-5"
              errorMessage={errors.confirm.message as string}
            />
          )}
        </div>

        <button className="uppercase self-end text-3xl/normal" type="submit">
          Send
        </button>
      </div>
    </form>
  );
};

export default JoinUsForm;
