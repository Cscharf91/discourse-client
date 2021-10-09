import { message } from "antd";

export const messageError = (error: string) =>
  message.error(`There was an issue ${error}. Please try again later.`);
