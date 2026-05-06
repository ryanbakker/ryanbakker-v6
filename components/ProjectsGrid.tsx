import { getPayload } from "payload";
import config from "@payload-config";
import { GridCard } from "./GridCard";
import Image from "next/image";
import Link from "next/link";

async function ProjectsGrid() {
  const payload = await getPayload({ config });
  const { docs: projects } = await payload.find({
    collection: "projects",
    depth: 2,
    limit: 100,
    sort: "-updatedAt",
  });

  const featuredProject = projects.find((p) => p.isFeatured);
  const highlightedProjects = projects
    .filter((p) => p.isHighlighted && p.id !== featuredProject?.id)
    .slice(0, 2);

  const otherProjects = projects.filter(
    (p) => !p.isFeatured && !p.isHighlighted,
  );

  return (
    <section className="max-w-6xl mx-auto my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Featured Project */}
        {featuredProject && (
          <Link
            href={`/projects/${featuredProject.slug}`}
            passHref
            className="col-span-1 md:col-span-2 row-span-2 h-full"
          >
            <GridCard className="overflow-hidden group h-full min-h-100">
              {featuredProject.images?.[0]?.image &&
                typeof featuredProject.images[0].image !== "string" && (
                  <Image
                    src={featuredProject.images[0].image.url || ""}
                    alt={featuredProject.title}
                    fill
                    objectPosition="top"
                    className="object-cover rounded-3xl max-h-[80%] shadow-xl"
                  />
                )}

              <div className="relative flex flex-row justify-between items-end h-full z-10 pb-1.5">
                <div className="w-full">
                  <h2 className="text-2xl font-bold leading-6 -tracking-[4%]">
                    {featuredProject.title}
                  </h2>
                  <p className="text-sm opacity-80 font-light">
                    {featuredProject.subtitle}
                  </p>
                </div>

                {featuredProject.tags && featuredProject.tags.length > 0 && (
                  <ul className="flex flex-wrap-reverse justify-end gap-1.5 mt-4">
                    {featuredProject.tags.map(
                      (tag: { label: string }, i: number) => (
                        <li
                          key={i}
                          className="px-2.5 py-0.5 bg-white/10 rounded-md text-xs"
                        >
                          {tag.label}
                        </li>
                      ),
                    )}
                  </ul>
                )}
              </div>
            </GridCard>
          </Link>
        )}

        {/* Highlighted Projects */}
        {highlightedProjects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="col-span-1 md:col-span-2 row-span-1"
            passHref
          >
            <GridCard className="overflow-hidden group h-full">
              {project.images?.[0]?.image &&
                typeof project.images[0].image !== "string" && (
                  <Image
                    src={project.images[0].image.url || ""}
                    alt={project.title}
                    fill
                    className="object-cover max-w-[50%] ml-auto rounded-2xl shadow-xl"
                  />
                )}

              <div className="relative flex flex-col justify-end h-full z-10 max-w-[50%] pl-1 pb-2">
                <h3 className="text-2xl font-bold leading-6 -tracking-[4%]">
                  {project.title}
                </h3>
                <p className="text-sm opacity-80 font-light">
                  {project.subtitle}
                </p>

                {project.tags && project.tags.length > 0 && (
                  <ul className="flex flex-wrap-reverse justify-start gap-1.5 mt-4">
                    {project.tags.map((tag: { label: string }, i: number) => (
                      <li
                        key={i}
                        className="px-2 py-0.5 bg-white/10 rounded-full text-xs"
                      >
                        {tag.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </GridCard>
          </Link>
        ))}

        {/* Other Projects */}
        {otherProjects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            passHref
            key={project.id}
            className="col-span-1 row-span-1"
          >
            <GridCard className="overflow-hidden group" variant="small">
              <Link href={`/projects/${project.slug}`} passHref>
                {project.images?.[0]?.image &&
                  typeof project.images[0].image !== "string" && (
                    <Image
                      src={project.images[0].image.url || ""}
                      alt={project.title}
                      fill
                      className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                <div className="relative flex flex-col justify-end h-full z-10">
                  <h5 className="text-lg font-bold leading-tight">
                    {project.title}
                  </h5>
                  <p className="text-sm opacity-80 leading-tight">
                    {project.subtitle}
                  </p>
                </div>
              </Link>
            </GridCard>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProjectsGrid;
