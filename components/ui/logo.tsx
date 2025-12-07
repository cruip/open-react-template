import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center gap-2" aria-label="SRAB">
      {/* SRAB Logo */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Drone body */}
        <ellipse cx="50" cy="50" rx="12" ry="8" fill="#cca989" />
        {/* Arms */}
        <line x1="38" y1="50" x2="20" y2="35" stroke="#9bacbc" strokeWidth="3" strokeLinecap="round" />
        <line x1="62" y1="50" x2="80" y2="35" stroke="#9bacbc" strokeWidth="3" strokeLinecap="round" />
        <line x1="38" y1="50" x2="20" y2="65" stroke="#9bacbc" strokeWidth="3" strokeLinecap="round" />
        <line x1="62" y1="50" x2="80" y2="65" stroke="#9bacbc" strokeWidth="3" strokeLinecap="round" />
        {/* Rotors */}
        <ellipse cx="20" cy="35" rx="10" ry="4" fill="#9bacbc" opacity="0.7" />
        <ellipse cx="80" cy="35" rx="10" ry="4" fill="#9bacbc" opacity="0.7" />
        <ellipse cx="20" cy="65" rx="10" ry="4" fill="#9bacbc" opacity="0.7" />
        <ellipse cx="80" cy="65" rx="10" ry="4" fill="#9bacbc" opacity="0.7" />
        {/* Camera */}
        <circle cx="50" cy="56" r="4" fill="#2b3943" />
      </svg>
      {/* SRAB Text Logo */}
      <span className="font-tektur text-xl font-bold tracking-wider text-cadet-blue">
        SRAB
      </span>
    </Link>
  );
}
