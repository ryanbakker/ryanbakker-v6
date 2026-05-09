import React from "react";
import {
  defaultJSXConverters,
  JSXConverters,
  SerializedBlockNode,
} from "@payloadcms/richtext-lexical/react";
import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import {
  Media,
  TwoColumnBlock as TwoColumnBlockType,
  ThreeColumnBlock as ThreeColumnBlockType,
} from "@/payload-types";

const SubBlockRenderer = ({ block }: { block: any }) => {
  switch (block.blockType) {
    case "text-block":
      return block.content ? (
        <RichText data={block.content} converters={jsxConverters} />
      ) : null;
    case "image-block": {
      const media = block.image as Media;
      if (!media?.url) return null;
      return (
        <div className="my-1 group">
          <div className="relative w-full aspect-video">
            <Image
              src={media.url}
              alt={media.alt || ""}
              fill
              className="object-cover"
            />
            <p className="text-xs font-light italic text-neutral-400 -bottom-9 absolute pt-10 z-50 left-2 transition-colors duration-300 group-hover:text-white">
              {media.alt || "Project image"}
            </p>
          </div>
        </div>
      );
    }
    case "quote-block":
      return (
        <blockquote className="border-l-4 border-purple-500 pl-4 py-2 my-6 italic text-neutral-300">
          <p className="text-xl">"{block.quote}"</p>
          {block.author && (
            <cite className="block mt-2 text-sm not-italic opacity-60">
              — {block.author}
            </cite>
          )}
        </blockquote>
      );
    case "list-block": {
      const Tag = block.type === "ordered" ? "ol" : "ul";
      return (
        <Tag
          className={`list-outside ml-6 my-4 space-y-2 ${block.type === "ordered" ? "list-decimal" : "list-disc"}`}
        >
          {block.items?.map((item: any, i: number) => (
            <li key={i}>{item.item}</li>
          ))}
        </Tag>
      );
    }
    case "code-block":
      return (
        <div className="my-6 rounded-lg overflow-hidden bg-neutral-800 border border-white/10">
          <div className="px-4 py-2 bg-neutral-900 border-b border-white/5 flex justify-between items-center">
            <span className="text-xs font-mono text-neutral-400 uppercase">
              {block.language}
            </span>
          </div>
          <pre className="p-4 overflow-x-auto">
            <code className="text-sm font-mono text-neutral-200">
              {block.code}
            </code>
          </pre>
        </div>
      );
    default:
      return null;
  }
};

export const jsxConverters: JSXConverters = {
  ...defaultJSXConverters,
  blocks: {
    ...defaultJSXConverters.blocks,
    "two-column": ({
      node,
    }: {
      node: SerializedBlockNode<TwoColumnBlockType>;
    }) => {
      const { leftColumn, rightColumn } = node.fields;
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div className="flex flex-col gap-4">
            {leftColumn?.map((block, i) => (
              <SubBlockRenderer key={i} block={block} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {rightColumn?.map((block, i) => (
              <SubBlockRenderer key={i} block={block} />
            ))}
          </div>
        </div>
      );
    },
    "three-column": ({
      node,
    }: {
      node: SerializedBlockNode<ThreeColumnBlockType>;
    }) => {
      const { leftColumn, centerColumn, rightColumn } = node.fields;
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
          <div className="flex flex-col gap-4">
            {leftColumn?.map((block, i) => (
              <SubBlockRenderer key={i} block={block} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {centerColumn?.map((block, i) => (
              <SubBlockRenderer key={i} block={block} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {rightColumn?.map((block, i) => (
              <SubBlockRenderer key={i} block={block} />
            ))}
          </div>
        </div>
      );
    },
    "Call To Action": ({ node }: { node: SerializedBlockNode<any> }) => {
      const { heading, link } = node.fields;
      return (
        <div className="my-12 p-8 rounded-3xl bg-linear-to-br from-purple-600/20 to-blue-600/20 border border-white/10 flex flex-col items-center text-center gap-6">
          <h3 className="text-3xl font-bold uppercase">{heading}</h3>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform"
            >
              Get Started
            </a>
          )}
        </div>
      );
    },
    code: ({ node }: { node: SerializedBlockNode<any> }) => {
      // This is for the built-in CodeBlock feature
      return (
        <pre className="my-6 p-4 rounded-lg bg-neutral-800 border border-white/10 overflow-x-auto">
          <code className="text-sm font-mono text-neutral-200">
            {node.fields.code}
          </code>
        </pre>
      );
    },
    upload: ({ node }: { node: any }) => {
      const media = node.value as Media;
      if (!media?.url) return null;

      if (media.mimeType?.startsWith("image/")) {
        return (
          <div className="my-1s group">
            <div className="relative w-full aspect-video">
              <Image
                src={media.url}
                alt={media.alt || ""}
                fill
                className="object-cover"
              />
              <p className="text-xs italic text-neutral-500 mb-2 transition-colors duration-300 group-hover:text-white">
                {media.alt || "Project image"}
              </p>
            </div>
          </div>
        );
      }
      return null;
    },
  },
};
