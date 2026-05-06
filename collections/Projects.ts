import { CollectionConfig } from "payload";
import { HeadingFeature, lexicalEditor } from "@payloadcms/richtext-lexical";

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "updatedAt", "isFeatured", "isHighlighted"],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Project Name",
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: {
        position: "sidebar",
        description: "The URL-friendly identifier for this project.",
      },
    },
    {
      name: "subtitle",
      type: "text",
      label: "Subtitle",
      admin: {
        placeholder: "e.g., Modern Financial Management",
      },
    },
    {
      name: "description",
      type: "textarea",
      label: "Short Description",
      admin: {
        description: "A one or two sentence summary of the project.",
        placeholder:
          "e.g., The first step is knowing your numbers. Finova helps you track and visualise your financial habits.",
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "isFeatured",
          type: "checkbox",
          label: "Feature Project",
          defaultValue: false,
          admin: {
            width: "50%",
          },
        },
        {
          name: "isHighlighted",
          type: "checkbox",
          label: "Highlight Project",
          defaultValue: false,
          admin: {
            width: "50%",
          },
        },
      ],
    },
    {
      name: "tags",
      type: "array",
      label: "Project Tags",
      labels: {
        singular: "Tag",
        plural: "Tags",
      },
      admin: {
        description: "Used for filtering projects on the projects page.",
      },
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "projectContent",
      type: "richText",
      label: "Project Brief",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HeadingFeature({
            enabledHeadingSizes: ["h2", "h3", "h4"],
          }),
        ],
      }),
    },
    {
      name: "technologies",
      type: "array",
      label: "Tech Stack & Tools",
      labels: {
        singular: "Technology",
        plural: "Technologies",
      },
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "images",
      type: "array",
      label: "Project Gallery",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
    {
      name: "externalLinks",
      type: "group",
      label: "Resources & Links",
      fields: [
        {
          name: "githubRepo",
          type: "text",
          label: "GitHub Repository",
        },
        {
          name: "liveBuild",
          type: "text",
          label: "Live Demo / Document Link",
        },
      ],
    },
  ],
};
