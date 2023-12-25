import { boolean, object, string } from "yup";

import {
  onlyTextAndTabsRegex,
  emailRegex,
} from "@/shared/utils/regularExpressions";

const validationSchema = object({
  name: string()
    .required("Please, enter your name")
    .matches(onlyTextAndTabsRegex, "Incorrect name"),
  email: string()
    .required("Please, enter your email")
    .max(50)
    .matches(emailRegex, "Incorrect email"),
  message: string()
    .max(500, "Maximum allowed number of characters - 500")
    .default(""),
});

export default validationSchema;
