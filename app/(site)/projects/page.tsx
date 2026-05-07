import ProjectsGrid from "@/components/ProjectsGrid";
import { Button } from "@/components/ui/button";
import { Undo2 } from "lucide-react";
import Link from "next/link";
import { getPayload } from "payload";
import config from "@payload-config";
import { ProjectFilters } from "@/components/ProjectFilters";

async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ tags?: string }>;
}) {
  const { tags } = await searchParams;
  const activeTags = tags ? tags.split(",").filter(Boolean) : [];

  const payload = await getPayload({ config });
  const { docs: projects } = await payload.find({
    collection: "projects",
    depth: 0, // We only need tags, no need for deep fetch
    limit: 1000,
  });

  // Extract all unique tags from all projects
  const availableTags = Array.from(
    new Set(
      projects.flatMap(
        (p) => p.tags?.map((t: { label: string }) => t.label) || [],
      ),
    ),
  ).sort() as string[];

  return (
    <main className="min-h-screen w-full overflow-x-hidden radial-purple text-white">
      <section className="max-w-6xl flex flex-col md:flex-row justify-between items-end mx-auto mt-24 gap-8">
        <div>
          <h1 className="font-extrabold text-[40px] md:text-[60px] tracking-[-4%] uppercase leading-tight md:leading-18">
            Project Archive
          </h1>
          <p className="font-light tracking-[2%] text-sm max-w-100">
            Some of my past projects, ranging from Web Development to
            Photography. Filter through to find exactly what you&apos;re looking
            for, or get in touch to find out more.
          </p>
        </div>

        <div className="flex flex-row items-center gap-4 md:gap-6 relative">
          <ProjectFilters
            availableTags={availableTags}
            activeTags={activeTags}
          />
          <Link href={"/"} passHref>
            <Button size="lg">
              Return to Base &nbsp;
              <Undo2 strokeWidth={3} />
            </Button>
          </Link>
        </div>
      </section>

      <ProjectsGrid activeTags={activeTags} />
    </main>
  );
}

export default ProjectsPage;
