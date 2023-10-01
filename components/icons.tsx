import { SVGAttributes } from "react";

export interface FeatureIcons {
  backgroundColor?: SVGAttributes<SVGAElement>["fill"];
  fill?: SVGAttributes<SVGAElement>["fill"];
  fillRule?: SVGAttributes<SVGAElement>["fillRule"];
  invert?: boolean;
  stroke?: SVGAttributes<SVGAElement>["stroke"];
  strokeWidth?: SVGAttributes<SVGAElement>["strokeWidth"];
  viewBox?: SVGAttributes<SVGAElement>["viewBox"];
}

export const Star2Lines = ({
  backgroundColor,
  fill,
  fillRule,
  invert = false,
  stroke,
  strokeWidth,
  viewBox,
}: FeatureIcons) => (
  <svg
    className="w-16 h-16 mb-4"
    viewBox={viewBox || "0 0 64 64"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      className={`fill-current${!backgroundColor && " text-purple-600"}`}
      fill={backgroundColor}
      width="64"
      height="64"
      rx="32"
    />
    <path
      className=" text-purple-100"
      d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"
      strokeLinecap="square"
      strokeWidth={strokeWidth || "2"}
      stroke={stroke || (invert ? "white" : "black")}
      fill={fill || "none"}
      fillRule={fillRule || "evenodd"}
    />
    <path
      className="text-purple-300"
      d="M43 42h-9M43 37h-9"
      strokeLinecap="square"
      strokeWidth="2"
      stroke={stroke || (invert ? "white" : "black")}
    />
  </svg>
);

export const Notes = ({
  backgroundColor,
  fill,
  fillRule,
  strokeWidth,
  viewBox,
}: FeatureIcons) => (
  <svg
    className="w-16 h-16 mb-4"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      className={`fill-current${!backgroundColor && " text-purple-600"}`}
      fill={backgroundColor}
      cx="32"
      cy="32"
      r="32"
    />
    <path
      className="stroke-current text-purple-100"
      strokeWidth="2"
      strokeLinecap="square"
      d="M21 23h22v18H21z"
      fill="none"
      fillRule="evenodd"
    />
    <path
      className="stroke-current text-purple-300"
      d="M26 28h12M26 32h12M26 36h5"
      strokeWidth="2"
      strokeLinecap="square"
    />
  </svg>
);

export const GlobeWithLines = ({
  backgroundColor,
  fill,
  fillRule,
  strokeWidth,
  viewBox,
}: FeatureIcons) => (
  <svg
    className="w-16 h-16 mb-4"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      className={`fill-current${!backgroundColor && " text-purple-600"}`}
      fill={backgroundColor}
      width="64"
      height="64"
      rx="32"
    />
    <g
      transform="translate(21 21)"
      strokeLinecap="square"
      strokeWidth="2"
      fill="none"
      fillRule="evenodd"
    >
      <ellipse
        className="stroke-current text-purple-300"
        cx="11"
        cy="11"
        rx="5.5"
        ry="11"
      />
      <path className="stroke-current text-purple-100" d="M11 0v22M0 11h22" />
      <circle
        className="stroke-current text-purple-100"
        cx="11"
        cy="11"
        r="11"
      />
    </g>
  </svg>
);

export const HeadIcon = ({
  backgroundColor,
  fill,
  fillRule,
  strokeWidth,
  viewBox,
}: FeatureIcons) => (
  <svg
    className="w-16 h-16 mb-4"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      className={`fill-current${!backgroundColor && " text-purple-600"}`}
      fill={backgroundColor}
      width="64"
      height="64"
      rx="32"
    />
    <g
      transform="translate(22 21)"
      strokeLinecap="square"
      strokeWidth="2"
      fill="none"
      fillRule="evenodd"
    >
      <path
        className="stroke-current text-purple-100"
        d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5"
      />
      <circle className="stroke-current text-purple-300" cx="13" cy="9" r="3" />
    </g>
  </svg>
);

export const ThumbsUp = ({
  backgroundColor,
  fill,
  fillRule,
  strokeWidth,
  viewBox,
}: FeatureIcons) => (
  <svg
    className="w-16 h-16 mb-4"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      className={`fill-current${!backgroundColor && " text-purple-600"}`}
      fill={backgroundColor}
      width="64"
      height="64"
      rx="32"
    />
    <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
      <path
        className="stroke-current text-purple-100"
        d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6"
      />
      <path className="stroke-current text-purple-300" d="M22 30h4v12h-4z" />
    </g>
  </svg>
);

export const SpeechBubbleWithCog = ({
  backgroundColor,
  fill,
  fillRule,
  strokeWidth,
  viewBox,
}: FeatureIcons) => (
  <svg
    className="w-16 h-16 mb-4"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      className={`fill-current${!backgroundColor && " text-purple-600"}`}
      fill={backgroundColor}
      width="64"
      height="64"
      rx="32"
    />
    <g
      transform="translate(21 22)"
      strokeLinecap="square"
      strokeWidth="2"
      fill="none"
      fillRule="evenodd"
    >
      <path
        className="stroke-current text-purple-300"
        d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415"
      />
      <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
      <path
        className="stroke-current text-purple-100"
        d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948"
      />
    </g>
  </svg>
);

export const ContinuousIntegration = ({
  backgroundColor,
  fill,
  fillRule,
  stroke,
  strokeWidth,
  viewBox,
}: FeatureIcons) => (
  <svg
    className="w-16 h-16 mb-4"
    width="64"
    height="64"
    viewBox="0 0 64 64"
    version="1.1"
    id="svg486"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs id="defs483" />
    <rect
      className={`fill-current${!backgroundColor && " text-purple-600"}`}
      fill={backgroundColor}
      width="64"
      height="64"
      rx="32"
    />
    <g
      id="layer1"
      transform="translate(-73, -116)"
      >
      <g
        id="g67"
        transform="matrix(0.26458333,0,0,0.26458333,-2.4140661,112.50187)"
      >
        <g id="g65">
          <g id="g49">
            <g id="g47">
              <path
                fill="none"
                stroke={stroke ?? "#222"}
                strokeWidth={3}
                strokeMiterlimit={10}
                d="m 367.999,161.219 c -3.962,0 -7.939,-0.941 -11.606,-2.846 -8.361,-4.344 -13.556,-12.896 -13.556,-22.319 0,-9.422 5.194,-17.974 13.555,-22.318 8.362,-4.343 18.345,-3.677 26.055,1.739 l 21.462,15.079 21.462,-15.079 c 7.709,-5.417 17.692,-6.083 26.054,-1.739 8.361,4.344 13.555,12.896 13.555,22.318 0,9.423 -5.194,17.975 -13.556,22.319 -8.361,4.344 -18.345,3.677 -26.054,-1.74 l -21.462,-15.08 -21.462,15.08 c -4.328,3.041 -9.374,4.586 -14.447,4.586 z m 0.027,-41.36 c -2.535,0 -5.087,0.617 -7.485,1.862 -5.451,2.832 -8.705,8.189 -8.705,14.332 0,6.143 3.254,11.5 8.705,14.332 5.451,2.833 11.706,2.414 16.731,-1.117 l 18.809,-13.215 -18.809,-13.215 c -2.814,-1.977 -6.016,-2.979 -9.246,-2.979 z m 43.711,16.195 18.809,13.215 c 5.026,3.532 11.28,3.949 16.73,1.118 5.451,-2.832 8.705,-8.19 8.705,-14.333 0,-6.143 -3.254,-11.5 -8.705,-14.332 -5.451,-2.832 -11.704,-2.415 -16.731,1.117 z"
                id="path45"
              />
            </g>
          </g>
          <line
            fill="none"
            stroke={stroke ?? "#222"}
            strokeWidth={3}
            strokeMiterlimit={10}
            x1="396.082"
            y1="136.054"
            x2="403.909"
            y2="141.55299"
            id="line51"
          />
          <line
            fill="none"
            stroke={stroke ?? "#222"}
            strokeWidth={3}
            strokeMiterlimit={10}
            x1="403.909"
            y1="130.554"
            x2="411.737"
            y2="136.054"
            id="line53"
          />
          <polygon
            fill={fill ?? "#222"}
            points="412.462,135.544 404.366,130.234 411.099,125.502 419.564,130.554 "
            id="polygon55"
          />
          <polygon
            fill={fill ?? "#222"}
            points="396.275,146.574 388.178,141.264 394.912,136.532 403.377,141.584 "
            id="polygon57"
          />
        </g>
      </g>
    </g>
  </svg>
);
