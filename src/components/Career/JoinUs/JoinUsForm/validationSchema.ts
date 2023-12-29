import { boolean, object, string } from "yup";

import {
  onlyTextAndTabsRegex,
  emailRegex,
  phoneRegex,
} from "@/shared/utils/regularExpressions";

const validationSchema = object({
  name: string()
    .required("Please, enter a name")
    .matches(onlyTextAndTabsRegex, "Incorrect name"),
  email: string()
    .required("Please, enter a email")
    .max(50)
    .matches(emailRegex, "Incorrect email"),
  position: string()
    .required("Please, enter a position")
    .matches(onlyTextAndTabsRegex, "Incorrect position"),
  phone: string()
    .required("Please, enter a phone")
    .matches(phoneRegex, "Incorrect phone"),
  message: string()
    .max(500, "Maximum allowed number of characters - 500")
    .default(""),
  confirm: boolean().oneOf([true], "Please, give consent").default(false),
});

export default validationSchema;
