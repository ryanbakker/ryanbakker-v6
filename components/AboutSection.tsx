"use client";

import AboutBento from "./AboutBento";

function AboutSection({
  data,
}: {
  data?: any;
}) {
  return (
    <section
      id="continue"
      className="section-parent z-0 bg-[#FFF4EB] relative py-24 md:py-32 overflow-visible"
    >
      <AboutBento data={data} />
    </section>
  );
}

export default AboutSection;
