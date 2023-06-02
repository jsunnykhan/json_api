import DeSerializer from "./lib/Deserializer";
import { JsonApiResponse, DeSerializerResposne } from "./types";

export  class JsonApi {
  protected JsonDeserializer = DeSerializer;
  constructor() {}

  deserialize(
    body: JsonApiResponse | string
  ): DeSerializerResposne | Array<DeSerializerResposne> {
    const modelBuilder = new this.JsonDeserializer();

    if (typeof body === "string") {
     
    } else {
      modelBuilder.setBody(body);
    }

    return modelBuilder.build();
  }
}
