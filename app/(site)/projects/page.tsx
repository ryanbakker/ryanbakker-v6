import ProjectsGrid from "@/components/ProjectsGrid";
import { Button } from "@/components/ui/button";
import { Funnel, Undo2 } from "lucide-react";
import Link from "next/link";

function ProjectsPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden radial-purple text-white">
      <section className="max-w-6xl flex flex-row justify-between items-end mx-auto mt-24">
        <div>
          <h1 className="font-extrabold text-[60px] -tracking-[4%] uppercase leading-18">
            Project Archive
          </h1>
          <p className="font-light tracking-[2%] text-sm max-w-100">
            Some of my past projects, ranging from Web Development to
            Photography. Filter through to find exactly what you&apos;re looking
            for, or get in touch to find out more.
          </p>
        </div>

        <div className="flex flex-row items-center gap-6 relative">
          <Button size="lg">
            <Funnel strokeWidth={3} />
            &nbsp; Filter Projects
          </Button>
          <Link href={"/"} passHref>
            <Button size="lg">
              Return to Base &nbsp;
              <Undo2 strokeWidth={3} />
            </Button>
          </Link>

          {/* Project List Filters */}
          <div className="absolute top-15 right-0 h-25 w-93 z-50 rounded-lg bg-neutral-900/95 border border-neutral-800">
            <ul className="m-2">
              <li>
                <label
                  htmlFor="#"
                  className="py-1 px-2 text-sm bg-neutral-800 rounded-sm"
                >
                  Nextjs
                </label>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <ProjectsGrid />
    </main>
  );
}

export default ProjectsPage;
