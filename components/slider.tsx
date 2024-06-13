type AlignContent =
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch"
  | "baseline";

export interface SliderConfigProps {
  animation?: string;
  background?: string;
  count: number;
  duration?: string;
  height?: string;
  width?: string;
  useBoxShadow?: boolean;
  alignContent?: AlignContent;
  disableAnimation?: boolean;
}

export type SliderProps = {
  children: React.ReactNode;
  config?: SliderConfigProps;
  name: string;
};

/**
 * @description A slider component that is configurable with a set of options
 * @features animation pause on hover, multi-instance using prefix, and custom styles
 * @param children React.ReactNode - required
 * @param config SliderConfigProps - optional
 * @param name string, should be a single word or camelCase - required
 * @type React.FunctionComponent<SliderProps>
 * @returns JSX.Element
 */
export default function Slider({
  children: slides,
  config,
  name: id,
}: SliderProps) {
  const {
    animation,
    background,
    count = 10,
    disableAnimation,
    duration,
    height,
    width,
    useBoxShadow,
  } = config || {};
  const styles = `
    :root {
      --${id}-slider-bg: ${
    !!background
      ? background
      : "linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%)"
  };
      --${id}-slide-count: ${count};
      --${id}-slider-scroll-x: calc(-${
    !!width ? width : "250px"
  } * var(--${id}-slide-count) / 2);
      --${id}-slider-box-shadow: ${
    !!useBoxShadow ? "0 10px 20px -5px rgba(0, 0, 0, 0.125)" : "none"
  };
      --${id}-slider-duration: ${!!duration ? duration : "40s"};
      --${id}-slide-animation: ${
    !!animation
      ? animation
      : `scroll var(--${id}-slider-duration) linear infinite`
  };
      --${id}-slider-slide-height: ${!!height ? height : "100px"};
      --${id}-slider-height: ${!!height ? height : "100px"};
      --${id}-slider-track-width: calc(var(--${id}-slider-slide-width) * var(--${id}-slide-count));

      --${id}-slider-before-after-width: 200px;
      --${id}-slider-before-after-height: 100px;
      --${id}-slider-slide-width: 250px;
      --${id}-slider-width: 100%;
      --${id}-disable-animation: ${!!disableAnimation ? "paused" : "running"};
    }

    @layer slider {
      @-webkit-keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(var(--${id}-slider-scroll-x));
        }
      }
    
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(var(--${id}-slider-scroll-x));
        }
      }
    
      .slider-${id} {
        background: white;
        box-shadow: var(--${id}-slider-box-shadow);
        height: var(--${id}-slider-height);
        width: var(--${id}-slider-width);
        margin: auto;
        overflow: hidden;
        position: relative;
      }
      
      .slider-${id}::before, .slider-${id}::after {
        background: var(--${id}-slider-bg);
        content: "";
        height: 100px;
        position: absolute;
        width: 200px;
        z-index: 2;
      }
    
      .slider-${id}::after {
        right: 0;
        top: 0;
        transform: rotateZ(180deg);
      }
      .slider-${id}::before {
        left: 0;
        top: 0;
      }
      
      .slider-${id} .slide-track-${id} {
        -webkit-animation: var(--${id}-slide-animation);
        animation: var(--${id}-slide-animation);
        display: flex;
        width: var(--${id}-slider-track-width);
      }

      .slider-${id} .slide-track-${id}:hover {
        animation-play-state: paused;
      }
      ${
        !!disableAnimation
          ? `.slider-${id} .slide-track-${id} { 
            animation-play-state: --${id}-disable-animation; 
            duration: 0s; 
            margin: 0 auto; 
            }`
          : ""
      }
      
      .slider-${id} .slide {
        height: var(--${id}-slider-slide-height);
        width: var(--${id}-slider-slide-width);
      }
    }
  `;

  return (
    <>
      <div className={`slider-${id}`}>
        <div className={`slide-track-${id}`}>{slides}</div>
      </div>
      <style id={`${id}-slider-styles`}>{styles}</style>
    </>
  );
}
