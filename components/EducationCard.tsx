import Image from "next/image";
import { getMediaUrl } from "@/lib/utils";
import {
  motion,
  MotionValue,
  useTransform,
  useMotionValue,
} from "framer-motion";

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
  progress?: MotionValue<number> | number;
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
  const fallbackValue = useMotionValue(
    typeof progress === "number" ? progress : 1,
  );
  const motionProgress =
    typeof progress === "number" ? fallbackValue : progress;

  // Use a slightly faster ramp for internal transforms to ensure they feel "finished"
  // by the time the card is fully in place.
  const internalProgress = useTransform(motionProgress, [0, 0.9], [0, 1], {
    clamp: true,
  });

  const y = useTransform(internalProgress, (v) => `${(1 - v) * 15}px`);
  const logoScale = useTransform(internalProgress, (v) => 0.8 + 0.2 * v);
  const logoY = useTransform(internalProgress, (v) => `${(1 - v) * 10}px`);

  const logoUrl = getMediaUrl(logo);

  return (
    <div className="radial-lavendar w-full h-full! rounded-[40px] relative drop-shadow min-h-95 text-[#090B23]">
      {/* Education Card Content */}
      <motion.div className="py-3 px-4 md:py-5 md:px-6" style={{ y }}>
        <h4 className="text-xl md:text-2xl font-bold">{title}</h4>
        <p className="text-sm md:text-base font-semibold opacity-70">{years}</p>

        <h5 className="italic text-base md:text-lg my-2 md:my-3">
          Focus: {focus}
        </h5>

        <h6 className="font-bold text-xs md:text-sm">Subjects</h6>
        <ul className="opacity-70 font-medium">
          <li className="text-sm md:text-base">{subjects.primary}</li>
          <li className="text-sm md:text-base">{subjects.secondary}</li>
          <li className="text-sm md:text-base">{subjects.tertiary}</li>
        </ul>

        <hr className="invert opacity-15 my-3 md:my-5" />

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
      </motion.div>

      {/* Education Provider Logo - Absolute on desktop only */}
      <motion.div
        className="absolute right-4 bottom-4 md:right-6 md:bottom-6 pointer-events-none hidden md:block"
        style={{
          opacity: internalProgress,
          scale: logoScale,
          y: logoY,
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
      </motion.div>
    </div>
  );
}

export default EducationCard;
