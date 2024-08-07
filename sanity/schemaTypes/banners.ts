import { defineField, defineType } from "sanity";

export default defineType({
  name: "banners",
  title: "Banners",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "linkTo",
      title: "Link To",
      type: "url",
    }),
  ],
});
