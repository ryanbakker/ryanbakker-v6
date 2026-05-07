import { Button } from "@/components/ui/button";
import Link from "next/link";

function ProjectSinglePage() {
  return (
    <main className="text-white w-full min-h-screen radial-purple">
      <div>{/* Background asset */}</div>

      <section>
        <h1>Project Title</h1>

        <Link href="/projects" passHref>
          <Button>Return to Projects</Button>
        </Link>
      </section>

      <section>
        {/* Objective */}
        {/* Technologies */}
        {/* External Links */}
        {/* Tags */}
        {/* Category */}
        {/* Description */}
      </section>

      <section>{/* Optional Project Article */}</section>
    </main>
  );
}

export default ProjectSinglePage;
