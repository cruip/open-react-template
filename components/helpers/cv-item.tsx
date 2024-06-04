import Image, { StaticImageData } from "next/image";

interface CVListItem {
  description: string;
}

interface CVItemsProps {
  imageContent: {
    url: StaticImageData;
    position?: "left" | "right";
    alt?: string;
    width?: number;
    height?: number;
    inverse?: boolean;
  };
  content: {
    companyName: string;
    iconPosition?: "left" | "right";
    jobTitle: string;
    location: string;
    summary: string;
    list: CVListItem[];
    useListIcon?: boolean;
  };
}

export function CVItem({ imageContent, content }: CVItemsProps) {
  const {
    url,
    position: imagePosition = "left",
    width = 384,
    height = 384,
    alt = "Unknown Image",
  } = imageContent;
  const { companyName, iconPosition, jobTitle, location, summary, list, useListIcon = false } = content;
  return (
    <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
      {/* Image: Left */}
      {imagePosition === "left" ? (
        <div
          className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0"
          data-aos="fade-up"
        >
          <Image
            className="object-contain"
            src={url}
            width={width}
            height={height}
            alt={alt}
          />
        </div>
      ) : null}
      {/* Content */}
      <div
        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
        data-aos="fade-right"
      >
        <div className="md:pr-4 lg:pr-12 xl:pr-16">
          <div className="font-architects-daughter text-xl text-purple-600 mb-2"></div>
          <h2 className="h3 mb-3">
            {companyName} - {location}
          </h2>
          <p className="text-xl text-gray-400 mb-4">{jobTitle}</p>
          <p className="text-xl text-gray-400 mb-4">{summary}</p>
          <ul className="text-lg text-gray-400 -mb-2">
            {list.map((item, index) => (
              <li
                key={`${item.description.replace(" ", "-")}`}
                className="flex items-baseline mb-2"
              >
                {iconPosition === "left" && useListIcon ? (
                  <svg
                    className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                ) : null}
                <span>{item.description}</span>
                {iconPosition === "right" && useListIcon ? (
                  <svg
                    className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Image: right */}
      {imagePosition === "right" ? (
        <div
          className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
          data-aos="fade-up"
        >
          <Image
            className="object-contain"
            src={url}
            width={width}
            height={height}
            alt={alt}
          />
        </div>
      ) : null}
    </div>
  );
}
