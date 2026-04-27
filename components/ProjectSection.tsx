import { PROJECT_CATALOGUE_DATA } from "@/constants";
import Image from "next/image";
import Link from "next/link";

function ProjectSection() {
  return (
    <section className="section-parent py-16 pb-64 md:pb-16 min-h-screen radial-grey">
      <div className="section-child w-full h-full max-w-7xl lg:max-w-none lg:px-0 mx-auto text-neutral-950">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 w-full">
          <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">
            Project Catalogue
          </h3>
        </div>

        {/* Main Container - Sets a fixed height for the entire block */}
        <div className="flex flex-row h-[70vh] w-full mt-4">
          {/* Projects List - Expands to fill available space */}
          <ul className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_140px] gap-4 h-full w-full">
            {PROJECT_CATALOGUE_DATA.map((project, index) => (
              <li
                key={index}
                // 'group' enables hover states for all child elements simultaneously
                className="group relative flex-1 h-full overflow-hidden cursor-pointer flex flex-col justify-center items-center transition-all duration-500 bg-transparent w-full min-h-[200px] md:min-h-50vh"
              >
                <Link href={project.link}>
                  {/* 1. Background Image (Hidden by default, fades in on hover) */}
                  <div className="absolute inset-0 z-0 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    {/* Optional: Add a subtle dark gradient overlay so white text always pops */}
                    <div className="absolute inset-0 bg-black/30" />
                  </div>

                  {/* 2. Top Right Icon (Hidden by default, fades in on hover) */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white rounded-full p-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-black"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>

                  {/* 3. Center Number (Changes from dark purple to white on hover) */}
                  <span className="relative z-10 text-8xl md:text-9xl font-light text-purple-50 md:text-[#220B3B] group-hover:text-white transition-colors duration-500">
                    {index + 1}
                  </span>

                  {/* 4. Bottom Text Container */}
                  <div className="absolute md:left-4 bottom-2 left-3 md:bottom-4 lg:bottom-8 lg:left-8 z-10 text-left">
                    {/* Title */}
                    <h5 className="text-xl md:text-2xl font-bold text-white md:text-neutral-950 group-hover:text-white transition-colors duration-500">
                      {project.title}
                    </h5>
                    {/* Description */}
                    <p className="text-xs md:text-sm text-neutral-200 md:text-neutral-600 group-hover:text-neutral-300 transition-colors duration-500">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </li>
            ))}

            <li className="lg:h-full md:mt-auto lg:mt-0">
              {/* View All Button - Fixed width side panel */}
              <Link href="/projects" className="shrink-0 lg:h-full block">
                {/* Added relative and overflow-hidden to act as the clipping mask */}
                <div className="group relative overflow-hidden bg-[#220B3B] h-full w-full lg:w-[140px] flex flex-col items-center lg:justify-between lg:py-12 hover:bg-[#341159] transition-colors duration-300">
                  {/* Rotated Text */}
                  <div className="flex-1 flex lg:items-center lg:justify-center">
                    <h5 className="lg:rotate-90 text-white text-4xl font-semibold whitespace-nowrap tracking-wide translate-y-6 lg:translate-y-0">
                      View All
                    </h5>
                  </div>

                  {/* Chevrons */}
                  <svg
                    width="111"
                    height="94"
                    viewBox="0 0 111 94"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:mt-auto self-start -translate-x-6 group-hover:translate-x-6 transition-transform duration-300 ease-in-out -translate-y-2 lg:translate-y-0"
                  >
                    <path
                      d="M2.40089 2.4214C3.61022 1.20097 5.58044 1.19169 6.80095 2.40089L49.5787 44.7897C50.1683 45.374 50.5 46.17 50.5 47C50.5 47.83 50.1683 48.626 49.5787 49.2103L6.80095 91.5991C5.58044 92.8083 3.61022 92.799 2.40089 91.5786C1.19169 90.3581 1.20097 88.3879 2.4214 87.1785L42.9683 47L2.4214 6.82146C1.20097 5.61212 1.1917 3.64191 2.40089 2.4214Z"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M61.4009 2.4214C62.6102 1.20097 64.5804 1.19169 65.8009 2.40089L108.579 44.7897C109.168 45.374 109.5 46.17 109.5 47C109.5 47.83 109.168 48.626 108.579 49.2103L65.8009 91.5991C64.5804 92.8083 62.6102 92.799 61.4009 91.5786C60.1917 90.3581 60.201 88.3879 61.4214 87.1785L101.968 47L61.4214 6.82146C60.201 5.61212 60.1917 3.64191 61.4009 2.4214Z"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
