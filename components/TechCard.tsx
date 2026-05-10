import { ComponentType, SVGProps } from "react";

interface TechCardProps {
  cardIndex: number;
  cellClass: string;
  items: string[];
  icons: ComponentType<SVGProps<SVGSVGElement>>[];
}

// Normalized directional multipliers (between -1.0 and 1.0)
const NORMALIZED_OFFSETS = [
  { x: -0.5, y: 0.8 },
  { x: 1.0, y: -0.3 },
  { x: -0.8, y: 0.5 },
  { x: 0.7, y: 1.0 },
  { x: -0.3, y: 0.2 },
  { x: 0.3, y: -1.0 },
  { x: -1.0, y: 0.7 },
  { x: 0.8, y: -0.5 },
  { x: 0.2, y: 1.0 },
  { x: -0.7, y: -0.8 },
  { x: 1.0, y: -0.2 },
  { x: -0.2, y: 1.0 },
];

function CardShell({
  bgColorClass,
  items,
  icons,
  opacity,
}: {
  bgColorClass: string;
  items: string[];
  icons: ComponentType<SVGProps<SVGSVGElement>>[];
  opacity?: number;
}) {
  return (
    <div
      className={`relative w-full h-full min-h-40 p-6 text-white transition-colors duration-500 ${bgColorClass}`}
      style={{ opacity }}
    >
      <div className="flex gap-2 mb-4 text-3xl font-bold">
        {icons.map((Icon, idx) => (
          <Icon key={idx} width={34} height={34} />
        ))}
      </div>
      <ul className="space-y-0.5 font-medium tracking-tight">
        {items.map((item, idx) => (
          <li key={idx}>
            • <span className="font-semibold text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechCard({ cardIndex, cellClass, items, icons }: TechCardProps) {
  const numberOfDuplicates = cardIndex;

  // Define the progressive max shift per column
  const columnShifts = [2, 3, 4.5, 6];
  const columnIndex = cardIndex % 4;
  const maxShift = columnShifts[columnIndex];

  // 1. Unique opacity for the MAIN card shell
  // First card gets 100% opacity (1.0), all others get 70% (0.7)
  const mainOpacity = cardIndex === 0 ? 1.0 : 0.7;

  return (
    <div className="relative w-full h-full">
      {/* THE MAIN CARD */}
      <div className="relative z-10 w-full h-full">
        <CardShell
          bgColorClass={cellClass}
          items={items}
          icons={icons}
          // Apply the dynamic opacity here
          opacity={mainOpacity}
        />
      </div>

      {/* THE GHOST LAYERS */}
      {Array.from({ length: numberOfDuplicates }).map((_, i) => {
        const offset = NORMALIZED_OFFSETS[i % NORMALIZED_OFFSETS.length];

        return (
          <div
            key={i}
            className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none select-none"
            style={{
              transform: `translate(${offset.x * maxShift}px, ${offset.y * maxShift}px)`,
            }}
          >
            <CardShell
              bgColorClass={cellClass}
              items={items}
              icons={icons}
              opacity={0.6}
            />
          </div>
        );
      })}
    </div>
  );
}

export default TechCard;
