import {
  DeSerializerResposne,
  JsonApiRelationship,
  JsonApiResource,
  JsonApiResourceLinkage,
  JsonApiResponse,
} from "../types";
import { isArray, isString, isUndefined } from "lodash";

export default class DeSerializer {
  protected body: JsonApiResponse | string | undefined;

  constructor() {}

  setBody(body: any) {
    this.body = body;
  }

  private getData(data: JsonApiResource | Array<JsonApiResource>) {
    isArray(data)
      ? data.map((resource: JsonApiResource) => this.destructureData(resource))
      : this.destructureData(data);
  }

  private destructureData(resource: JsonApiResource) {
    const { id, type, attributes, links, relationships } = resource;
    const tempData: any = { id, type, ...attributes };
    if (relationships) {
      const relationShipArray = Object.entries(relationships!);
      const relation = relationShipArray.map(
        ([key, obj]: [key: string, obj: JsonApiRelationship]) =>
          this.findRelationshipsFromInclude(key, obj.data)
      );
      Object.assign(tempData, { relationships: relation });
    }
  }

  private findRelationshipsFromInclude(
    key: string,
    value: JsonApiResourceLinkage | Array<JsonApiResourceLinkage>
  ) {
    if (!isUndefined(this.body) && !isString(this.body)) {
      const { included } = this.body;

      if (isArray(included)) {
        const response = included.map((includedData: JsonApiResource) =>
          isArray(value)
            ? value.find((linkage: JsonApiResourceLinkage) =>
                this.matchByTypeAndId(includedData, linkage)
              )
            : this.matchByTypeAndId(includedData, value)
        );
        console.log(response);
        return { [`${key}`]: response };
      } else if (!isUndefined(included) && !isArray(value)) {
        const response = this.matchByTypeAndId(included, value);
        return { [`${key}`]: response };
      }
    }
  }

  private matchByTypeAndId(
    includedData: JsonApiResource,
    linkage: JsonApiResourceLinkage
  ) {
    if (includedData.id === linkage.id && includedData.type === linkage.type) {
      return this.destructureData(includedData);
    } else {
    }
  }

  // altemate result return
  build(): DeSerializerResposne | Array<DeSerializerResposne> {
    if (!isUndefined(this.body)) {
      if (isString(this.body)) {
        return { data: this.body };
      } else {
        const data = this.body.data;
        this.getData(data!);
      }
    }

    return {
      relationshipNames: [],
    };
  }
}
