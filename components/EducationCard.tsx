import Image from "next/image";

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
  mission: string;
  logo: string;
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

  return (
    <div className="radial-lavendar w-full h-full! rounded-[40px] relative drop-shadow min-h-[400px] text-[#090B23]">
      {/* Education Card Content */}
      <div className="py-5 px-6" style={contentStyle}>
        <h4 className="text-2xl font-bold">{title}</h4>
        <p className="font-xs font-semibold opacity-70">{years}</p>

        <h5 className="italic text-lg my-3">Focus: {focus}</h5>

        <h6 className="font-bold text-sm">Subjects</h6>
        <ul className="opacity-70 font-medium">
          <li>{subjects.primary}</li>
          <li>{subjects.secondary}</li>
          <li>{subjects.tertiary}</li>
        </ul>

        <hr className="bg-black/10 my-5" />

        <h6 className="font-medium">Mission</h6>
        <div className="font-crimson text-sm opacity-80 tracking-tight max-w-[76%] whitespace-pre-wrap">
          {mission}
        </div>
      </div>

      {/* Education Provider Logo */}
      <div
        className="absolute right-2 bottom-2 pointer-events-none"
        style={{
          opacity: progress,
          transform: `scale(${0.8 + 0.2 * progress}) translateY(${(1 - progress) * 10}px)`,
        }}
      >
        <Image
          src={logo}
          height={80}
          width={120}
          alt={provider}
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default EducationCard;
