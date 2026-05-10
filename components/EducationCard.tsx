import Image from "next/image";
import { getMediaUrl } from "@/lib/utils";

interface EducationCardProps {
  index?: number;
  title: string;
  years: string;
  focus: string;
  subjects: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  mission: string | React.ReactNode;
  logo:
    | string
    | {
        url?: string | null;
        alt?: string | null;
      }
    | null;
  provider: string;
  progress?: number;
}

function EducationCard({
  title,
  years,
  focus,
  subjects,
  mission,
  logo,
  provider,
  progress = 1,
}: EducationCardProps) {
  // Elements inside the card can animate based on its individual slide progress
  const contentStyle = {
    opacity: progress,
    transform: `translateY(${(1 - progress) * 15}px)`,
    willChange: "opacity, transform",
    };

    const logoUrl = getMediaUrl(logo);

    return (

    <div className="radial-lavendar w-full h-full! rounded-[40px] relative drop-shadow min-h-100 text-[#090B23]">
      {/* Education Card Content */}
      <div className="py-3 px-4 md:py-5 md:px-6" style={contentStyle}>
        <h4 className="text-xl md:text-2xl font-bold">{title}</h4>
        <p className="text-sm md:text-base font-semibold opacity-70">{years}</p>

        <h5 className="italic text-base md:text-lg my-3">Focus: {focus}</h5>

        <h6 className="font-bold text-xs md:text-sm">Subjects</h6>
        <ul className="opacity-70 font-medium">
          <li className="text-sm md:text-base">{subjects.primary}</li>
          <li className="text-sm md:text-base">{subjects.secondary}</li>
          <li className="text-sm md:text-base">{subjects.tertiary}</li>
        </ul>

        <hr className="invert opacity-15 my-4 md:my-5" />

        <h6 className="font-medium text-sm md:text-base">Mission</h6>
        <div className="font-crimson text-sm opacity-100 tracking-tight whitespace-pre-wrap md:max-w-[76%]">
          {/* Spacer and floated logo for mobile only */}
          <div className="float-right h-16 w-0 md:hidden" />
          <div className="float-right clear-right ml-4 mb-2 pointer-events-none md:hidden">
            {logoUrl && (
              <Image
                src={logoUrl}
                height={80}
                width={120}
                alt={provider}
                className="object-contain translate-y-2"
              />
            )}
          </div>
          {mission}
        </div>
      </div>

      {/* Education Provider Logo - Absolute on desktop only */}
      <div
        className="absolute right-4 bottom-4 md:right-6 md:bottom-6 pointer-events-none hidden md:block"
        style={{
          opacity: progress,
          transform: `scale(${0.8 + 0.2 * progress}) translateY(${(1 - progress) * 10}px)`,
        }}
      >
        {logoUrl && (
          <Image
            src={logoUrl}
            height={80}
            width={120}
            alt={provider}
            className="object-contain"
          />
        )}
      </div>
    </div>
  );
}

export default EducationCard;
