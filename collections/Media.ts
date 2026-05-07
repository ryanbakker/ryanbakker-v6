import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  upload: true, // This is the magic line that enables file handling
  access: {
    read: () => true, // Allows your public website to see the images
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
};
