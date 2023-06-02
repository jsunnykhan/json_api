import { describe, expect, it } from "vitest";
import { JsonApi } from "../src";
import { mockdata } from "./mockData";



describe("Json api", () => {
  const jsonApi = new JsonApi();

  it("should deserialize a JSON:API resposne", () => {
    console.log(jsonApi.deserialize(mockdata));
  });
});
