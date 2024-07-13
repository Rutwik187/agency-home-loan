import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemaTypes/blockContent";
import post from "./schemaTypes/post";
import services from "./schemaTypes/services";
import banners from "./schemaTypes/banners";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, services, banners, blockContent],
};
