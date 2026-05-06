import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";
import InspoSection from "@/components/InspoSection";
import ProjectSection from "@/components/ProjectSection";
import SocialSection from "@/components/SocialSection";
import HomeClient from "./HomeClient";
import { getPayload } from "payload";
import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { SocialCard } from "@/components/SocialGallery";

export default async function Home() {
  const payload = await getPayload({ config });
  const homeContent = await payload.find({
    collection: "home-content",
    limit: 1,
  });

  const data = homeContent.docs[0];
  console.log("Found Home Content ID:", data?.id);
  console.log("Total Home Content Docs:", homeContent.totalDocs);

  return (
    <main className="w-full">
      <HomeClient />

      <ProjectSection projects={data?.projects} />

      <EducationSection
        quote={data?.educationQuote}
        bodyText={
          data?.educationBodyText && (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            <RichText data={data.educationBodyText as any} />
          )
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        items={data?.educationItems?.map((item: any) => ({
          ...item,
          mission: item.mission ? (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            <RichText data={item.mission as any} />
          ) : null,
        }))}
      />

      <InspoSection inspirations={data?.inspirations} />

      <SocialSection
        socialCards={data?.socialCards as SocialCard[]}
        contactDescription={data?.contactDescription}
        location={data?.location}
        email={data?.email}
      />

      <div className="h-20 bg-neutral-950" />
      <Footer />
    </main>
  );
}
