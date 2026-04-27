import React from "react";

interface BackgroundProps {
  className?: string;
}

export const GlassyPurple = ({ className }: BackgroundProps) => (
  <svg
    viewBox="0 0 296 311"
    fill="none"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g filter="url(#filter0_purple)">
      <rect x="4" y="1" width="288" height="302" rx="30" fill="url(#gradient_purple)" />
      <rect x="4.5" y="1.5" width="287" height="301" rx="29.5" stroke="#3F1B8A" />
    </g>
    <defs>
      <filter id="filter0_purple" x="0" y="0" width="296" height="311" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dx="-0.5" dy="-0.8" />
        <feGaussianBlur stdDeviation="0.25" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
        <feBlend mode="screen" in2="shape" result="effect2_innerShadow" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dx="0.3" dy="0.8" />
        <feGaussianBlur stdDeviation="0.25" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0" />
        <feBlend mode="screen" in2="effect2_innerShadow" result="effect3_innerShadow" />
        <feGaussianBlur stdDeviation="0.5" result="effect4_foregroundBlur" />
      </filter>
      <radialGradient id="gradient_purple" cx="0" cy="0" r="1" gradientTransform="matrix(165.6 188.75 -130.83 114.48 92.56 103.105)" gradientUnits="userSpaceOnUse">
        <stop stopColor="#43179E" />
        <stop offset="0.875" stopColor="#232925" />
      </radialGradient>
    </defs>
  </svg>
);

export const GlassyBlue = ({ className }: BackgroundProps) => (
  <svg
    viewBox="0 0 296 311"
    fill="none"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g filter="url(#filter0_blue)">
      <rect x="4" y="1" width="288" height="302" rx="30" fill="url(#gradient_blue)" />
      <rect x="4.5" y="1.5" width="287" height="301" rx="29.5" stroke="#016EA6" />
    </g>
    <defs>
      <filter id="filter0_blue" x="0" y="0" width="296" height="311" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dx="-0.5" dy="-0.8" />
        <feGaussianBlur stdDeviation="0.25" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
        <feBlend mode="screen" in2="shape" result="effect2_innerShadow" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dx="0.3" dy="0.8" />
        <feGaussianBlur stdDeviation="0.25" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0" />
        <feBlend mode="screen" in2="effect2_innerShadow" result="effect3_innerShadow" />
        <feGaussianBlur stdDeviation="0.5" result="effect4_foregroundBlur" />
      </filter>
      <radialGradient id="gradient_blue" cx="0" cy="0" r="1" gradientTransform="matrix(165.6 188.75 -130.83 114.48 92.56 103.105)" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0077B5" />
        <stop offset="1" />
      </radialGradient>
    </defs>
  </svg>
);

export const GlassyPink = ({ className }: BackgroundProps) => (
  <svg
    viewBox="0 0 296 311"
    fill="none"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g filter="url(#filter0_pink)">
      <rect x="4" y="1" width="288" height="302" rx="30" fill="url(#gradient_pink_1)" />
      <rect x="4" y="1" width="288" height="302" rx="30" fill="url(#gradient_pink_2)" />
      <rect x="4.5" y="1.5" width="287" height="301" rx="29.5" stroke="#F001A5" />
    </g>
    <defs>
      <filter id="filter0_pink" x="0" y="0" width="296" height="311" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dx="-0.5" dy="-0.8" />
        <feGaussianBlur stdDeviation="0.25" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
        <feBlend mode="screen" in2="shape" result="effect2_innerShadow" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dx="0.3" dy="0.8" />
        <feGaussianBlur stdDeviation="0.25" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0" />
        <feBlend mode="screen" in2="effect2_innerShadow" result="effect3_innerShadow" />
        <feGaussianBlur stdDeviation="0.5" result="effect4_foregroundBlur" />
      </filter>
      <radialGradient id="gradient_pink_1" cx="0" cy="0" r="1" gradientTransform="matrix(-170.784 -370.856 526.035 -266.37 247.36 343.77)" gradientUnits="userSpaceOnUse">
        <stop offset="0.24392" stopColor="#FF1B90" />
        <stop offset="0.436673" stopColor="#F80261" />
        <stop offset="0.688476" stopColor="#ED00C0" />
        <stop offset="0.776787" stopColor="#C500E9" />
        <stop offset="0.893155" stopColor="#7017FF" />
      </radialGradient>
      <radialGradient id="gradient_pink_2" cx="0" cy="0" r="1" gradientTransform="matrix(91.584 -150.396 149.182 99.8912 108.4 292.581)" gradientUnits="userSpaceOnUse">
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
    fill="none"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g filter="url(#filter0_green)">
      <rect x="4" y="1" width="920" height="251" rx="30" fill="url(#gradient_green)" />
      <rect x="4.5" y="1.5" width="919" height="250" rx="29.5" stroke="#1BA04A" />
    </g>
    <defs>
      <filter id="filter0_green" x="0" y="0" width="928" height="260" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dx="-0.5" dy="-0.8" />
        <feGaussianBlur stdDeviation="0.25" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
        <feBlend mode="screen" in2="shape" result="effect2_innerShadow" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dx="0.3" dy="0.8" />
        <feGaussianBlur stdDeviation="0.25" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0" />
        <feBlend mode="screen" in2="effect2_innerShadow" result="effect3_innerShadow" />
        <feGaussianBlur stdDeviation="0.5" result="effect4_foregroundBlur" />
      </filter>
      <radialGradient id="gradient_green" cx="0" cy="0" r="1" gradientTransform="matrix(529 156.875 -417.929 95.1475 286.9 85.8619)" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1ED760" />
        <stop offset="0.875" stopColor="#121212" />
      </radialGradient>
    </defs>
  </svg>
);
