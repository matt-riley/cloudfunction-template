import {
  Request,
  Response,
} from "@google-cloud/functions-framework/build/src/functions";
import { eventLog, helloWorld } from ".";

describe("HelloWorld", () => {
  let req: Partial<Request>,
    res: Partial<Response<unknown, Record<string, unknown>>>;
  beforeEach(() => {
    jest.resetAllMocks();
    req = {
      query: {},
      body: {},
    };
    res = {
      send: jest.fn(),
    };
  });
  it('should return "Hello World"', () => {
    helloWorld(req as Request, res as Response);
    expect(res.send).toHaveBeenCalledWith("Hello World!");
  });
});

describe("eventLog", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    console.log = jest.fn();
  });
  it("should log the event", () => {
    const event = { data: Buffer.from("hello world").toString("base64") };
    eventLog(event, {});
    expect(console.log).toHaveBeenCalledWith(event);
  });
});
