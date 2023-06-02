import { describe, it } from "vitest";
import DeSerializer from "../src/lib/Deserializer";
import { mockdata } from "./mockData";

describe("Deserializer unit test", () => {
  const jsonApi = new DeSerializer();
  jsonApi.setBody(mockdata);
  it("Should ", () => {

  });
});
