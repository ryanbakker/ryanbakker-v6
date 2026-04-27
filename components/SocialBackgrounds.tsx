interface BackgroundProps {
  className?: string;
}

export const GlassyPurple = ({ className }: BackgroundProps) => (
  <svg
    viewBox="0 0 296 311"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="100%" height="100%" fill="url(#gradient_purple)" />
    <defs>
      <radialGradient
        id="gradient_purple"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="matrix(165.6 188.75 -130.83 114.48 92.56 103.105)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#43179E" />
        <stop offset="0.875" stopColor="#232925" />
      </radialGradient>
    </defs>
  </svg>
);

export const GlassyBlue = ({ className }: BackgroundProps) => (
  <svg
    viewBox="0 0 296 311"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="100%" height="100%" fill="url(#gradient_blue)" />
    <defs>
      <radialGradient
        id="gradient_blue"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="matrix(165.6 188.75 -130.83 114.48 92.56 103.105)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0077B5" />
        <stop offset="1" stopColor="#121212" />{" "}
        {/* Added a dark stop fallback just in case, based on your purple/green ones */}
      </radialGradient>
    </defs>
  </svg>
);

export const GlassyPink = ({ className }: BackgroundProps) => (
  <svg
    viewBox="0 0 296 311"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Pink has two gradient layers blended together */}
    <rect width="100%" height="100%" fill="url(#gradient_pink_1)" />
    <rect width="100%" height="100%" fill="url(#gradient_pink_2)" />
    <defs>
      <radialGradient
        id="gradient_pink_1"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="matrix(-170.784 -370.856 526.035 -266.37 247.36 343.77)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.24392" stopColor="#FF1B90" />
        <stop offset="0.436673" stopColor="#F80261" />
        <stop offset="0.688476" stopColor="#ED00C0" />
        <stop offset="0.776787" stopColor="#C500E9" />
        <stop offset="0.893155" stopColor="#7017FF" />
      </radialGradient>
      <radialGradient
        id="gradient_pink_2"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="matrix(91.584 -150.396 149.182 99.8912 108.4 292.581)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFD600" />
        <stop offset="0.484375" stopColor="#FF6930" />
        <stop offset="0.734375" stopColor="#FE3B36" />
        <stop offset="1" stopColor="#FE3B36" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

export const GlassyGreen = ({ className }: BackgroundProps) => (
  <svg
    viewBox="0 0 928 260"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="100%" height="100%" fill="url(#gradient_green)" />
    <defs>
      <radialGradient
        id="gradient_green"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="matrix(529 156.875 -417.929 95.1475 286.9 85.8619)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1ED760" />
        <stop offset="0.875" stopColor="#121212" />
      </radialGradient>
    </defs>
  </svg>
);
