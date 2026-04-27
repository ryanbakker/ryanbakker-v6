function Footer() {
  return (
    <footer className="bg-neutral-950 pb-8 section-parent text-white overflow-hidden">
      <div className="section-child py-0! w-full">
        <svg
          viewBox="0 0 1004 200"
          className="w-[101%] h-[40vh] min-h-[200px] -ml-3"
          preserveAspectRatio="none"
          aria-label="Ryan Bakker"
        >
          <text
            x="0"
            y="180" // Adjusted for the new font size baseline
            fontSize="250" // <-- THIS CONTROLS THE TEXT HEIGHT
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fill="#FFC58E"
            className="font-medium uppercase tracking-tighter"
          >
            Ryan Bakker
          </text>
        </svg>

        <div className="flex justify-between w-full -mt-6">
          <span>In case you forgot ;)</span>
          <span>All Rights Reserved. 2026.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
