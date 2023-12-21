import { boolean, object, string } from "yup";

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const phoneRegex = /(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/gm;
const onlyTextAndTabsRegex = /^[a-zA-Zа-яА-ЯїЇіІєЄґҐ\s]+$/;

const validationSchema = object({
  name: string()
    .matches(onlyTextAndTabsRegex, "Invalid format")
    .required("Incorrect name"),
  email: string()
    .matches(emailRegex, "Invalid format")
    .max(50)
    .required("Please, enter your email"),
  position: string().matches(onlyTextAndTabsRegex, "Invalid format").required(),
  phone: string()
    .matches(
      phoneRegex,
      'Incorrect Phone. It must be in this format: "+380XXXXXXXXX"'
    )
    .required("Please, enter your phone number"),
  message: string()
    .max(500, "Maximum allowed number of characters - 500")
    .default(""),
  confirm: boolean().required("Please, allow the processing of information"),
});

export default validationSchema;
