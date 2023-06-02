type LinkKey = "self" | "related" | "first" | "prev" | "next" | "last";

export interface JsonApiResponse {
  data?: JsonApiResource | Array<JsonApiResource>;
  included?: Array<JsonApiResource> | JsonApiResource; //if data not present then include also not present there
  errors?: Array<JsonApiError>;
  meta?: Record<string, unknown>;
  jsonapi?: {
    [key: string]: string;
  };
  links?: {
    [key in LinkKey]: string | null;
  };
}

export interface JsonApiResource {
  id: string;
  type: string;
  attributes?: Record<string, unknown>;
  relationships?: {
    [key: string]: JsonApiRelationship;
  };
  links?: Record<string, string>;
}

export interface JsonApiRelationship {
  data: JsonApiResourceLinkage | JsonApiResourceLinkage[];
  links?: Record<string, string>;
}

export interface JsonApiResourceLinkage {
  type: string;
  id: string;
}

export interface JsonApiError {
  id?: string;
  links?: Record<string, string>;
  status?: string;
  code?: string;
  title?: string;
  detail?: string;
  source?: Record<string, unknown>;
  meta?: Record<string, unknown>;
}
