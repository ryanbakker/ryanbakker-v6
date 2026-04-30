import Image from "next/image";

function AboutBento() {
  return (
    <div className="section-child w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-12 grid-flow-row-dense text-black gap-2 z-50">
      {/* 3. About Me Header */}
      <div className="bento-cell md:col-span-1 md:col-start-1 md:row-span-1 lg:col-span-1 lg:row-span-2 lg:col-start-4 lg:row-start-1 flex items-end pb-2">
        <h3 className="text-5xl italic font-semibold border-b-2 border-black font-crimson tracking-tighter">
          About Me
        </h3>
      </div>

      {/* 1. Hero Block (Top on mobile, spans both md columns) */}
      <div className="bento-cell bento-cell-img-hero md:col-span-2 md:col-start-1 md:row-span-4 lg:col-span-2 lg:row-span-6 lg:col-start-1 lg:row-start-1 flex items-end">
        <Image
          src="/about/hero_bg.jpg"
          alt="Sunset over water"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top z-0"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10" />
        <h5 className="text-white relative z-20 text-xl md:text-2xl tracking-tight border-l-2 border-white pl-3 font-crimson font-semibold">
          Designing intentional structures to bridge the gap from technical
          execution to human interaction.
        </h5>
      </div>

      {/* =========================================
          LEFT COLUMN ITEMS (Middle stack on mobile)
          ========================================= */}

      {/* 7. Cloud Image */}
      <div className="bento-cell bento-cell-img md:col-span-1 md:col-start-1 md:row-span-4 lg:col-span-1 lg:row-span-6 lg:col-start-2 lg:row-start-7">
        <Image
          src="/about/child_one.jpg"
          alt="Clouds at sunset"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center z-0"
        />
      </div>

      {/* 6. Developer Text */}
      <div className="bento-cell bento-cell-text md:col-span-1 md:col-start-1 md:row-span-2 lg:col-span-1 lg:row-span-4 lg:col-start-1 lg:row-start-7">
        <h4 className="font-semibold text-lg">Developer</h4>
        <p className="text-sm">
          Architecting robust solutions with a modern tech stack: Java,
          Typescript, Next.js.
        </p>
      </div>

      {/* 4. Circle Image (Auckland Skyline) */}
      <div className="bento-cell bento-cell-img md:col-span-1 md:col-start-1 md:row-span-4 lg:col-span-1 lg:row-span-6 lg:col-start-3 lg:row-start-4">
        <Image
          src="/about/child_three.jpg"
          alt="Auckland skyline through lens"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center z-0"
        />
      </div>

      {/* 8. Self-Development Text */}
      <div className="bento-cell bento-cell-text md:col-span-1 md:col-start-1 md:row-span-2 lg:col-span-1 lg:row-span-3 lg:col-start-3 lg:row-start-10">
        <h4 className="font-semibold text-lg">Self-Development</h4>
        <p className="text-sm">
          Leveraging structure and routine to achieve consistent personal
          growth.
        </p>
      </div>

      {/* =========================================
          RIGHT COLUMN ITEMS (Bottom stack on mobile)
          ========================================= */}

      {/* 9. Desert Image */}
      <div className="bento-cell bento-cell-img md:col-span-1 md:col-start-2 md:row-span-4 lg:col-span-1 lg:row-span-6 lg:col-start-4 lg:row-start-7">
        <Image
          src="/about/child_two.jpg"
          alt="Person in the desert"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center z-0"
        />
      </div>

      {/* 2. Student Text */}
      <div className="bento-cell bento-cell-text md:col-span-1 md:col-start-2 md:row-span-2 lg:col-span-1 lg:row-span-3 lg:col-start-3 lg:row-start-1">
        <h4>Student</h4>
        <p className="text-sm">
          Pursuing a Bachelor of Computer & Info Sciences at AUT, New Zealand.
        </p>
      </div>

      {/* 10. Small Sunset Image */}
      <div className="bento-cell bento-cell-img-sm md:col-span-1 md:col-start-2 md:row-span-2 lg:col-span-1 lg:row-span-2 lg:col-start-1 lg:row-start-11">
        <Image
          src="/about/grand_child.png"
          alt="Rocky coast sunset"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center z-0"
        />
      </div>

      {/* 5. Creative Text */}
      <div className="bento-cell bento-cell-text md:col-span-1 md:col-start-2 md:row-span-2 lg:col-span-1 lg:row-span-4 lg:col-start-4 lg:row-start-3">
        <h4 className="font-semibold text-lg">Creative</h4>
        <p className="text-sm">
          Merging visual intuition with technical precision for high-end digital
          design.
        </p>
      </div>
    </div>
  );
}

export default AboutBento;
