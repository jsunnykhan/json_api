type LinkKey = "self" | "related" | "first" | "prev" | "next" | "last";

export interface JsonBody {
  //Must
  data: {};
  errors: {};
  meta: {};
  //May
  jsonapi: {};
  links: {};
  included: {};
}
