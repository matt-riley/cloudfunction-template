import {
  EventFunction,
  HttpFunction,
} from "@google-cloud/functions-framework/build/src/functions";

export const helloWorld: HttpFunction = (_req, res) => {
  res.send("Hello World!");
};

export const eventLog: EventFunction = (event) => {
  console.log(event);
};
