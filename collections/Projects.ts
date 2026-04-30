import { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media", // You'll need a Media collection too!
      required: true,
    },
    {
      name: "githubUrl",
      type: "text",
      label: "GitHub Repository Link",
    },
    {
      name: "techStack",
      type: "select",
      hasMany: true,
      options: [
        { label: "Next.js", value: "nextjs" },
        { label: "Tailwind", value: "tailwind" },
        { label: "TypeScript", value: "typescript" },
      ],
    },
  ],
};
