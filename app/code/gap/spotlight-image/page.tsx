export const metadata = {
  title: "Keith Nickas - Software Engineer - Code Examples - Spotlight Image",
  description:
    "A personal website showcasing professional, and, personal works developed by Keith Nickas.",
};
import Image from "next/image";

import Contact from "@/components/contact";
import spotlightImage from "@/public/images/gap/spotlight-image.webp";
import Code from "@/components/code";

const code = JSON.stringify(
  {
    _meta: {
      name: "2024_SPR1_F1_HP_ATG_Spotlight",
      schema: "https://cms.gap.com/schema/content/v1/spotlight.json",
      deliveryId: "8eac1720-074f-491d-b9a0-092270950f59",
    },
    general: {
      layout: "fullBleed",
      background: {
        type: "image",
        images: [
          {
            variations: [
              {
                variation: "desktop",
              },
              {
                variation: "mobile",
              },
            ],
            fliph: false,
            flipv: false,
            enableChroma: false,
            chromaQuality: 80,
          },
        ],
      },
      showHideBasedOnScreenSize: "alwaysShow",
    },
    content: {
      contentJustification: "left",
      verticalAlignment: "middle",
      icon: {
        iconSize: "24px",
      },
      mobileContentJustification: "center",
      mobileVerticalAlignment: "bottom",
      mobileIcon: {
        iconSize: "14px",
      },
      spotlightText: {
        useGradientBackfill: false,
        mobileOverride:
          '<p class="amp-cms--p" style="text-align:left;"><span class="amp-cms--headline-2" style="color:#FFFFFF;font-weight:400">CAMP COMPANIONS</span></p><hr style="display:block;border:0;height:8px;margin:0;background:transparent;" aria-hidden="true" /><hr style="display:block;border:0;height:8px;margin:0;background:transparent;" aria-hidden="true" /><p class="amp-cms--p" style="text-align:left;"><span class="amp-cms--body-2" style="color:#FFFFFF;font-weight:400">Secure pockets, stay-put details, and light</span></p><p class="amp-cms--p" style="text-align:left;"><span class="amp-cms--body-2" style="color:#FFFFFF;font-weight:400">layers for every adventure under the sun.</span></p><hr style="display:block;border:0;height:8px;margin:0;background:transparent;" aria-hidden="true" /><hr style="display:block;border:0;height:8px;margin:0;background:transparent;" aria-hidden="true" /><p class="amp-cms--p" style="text-align:left;"><a href="/browse/category.do?cid=1054844&mlink=1,1,HP_AG_Spotlight_CTA1" class="amp-cms--body-2" style="color:#FFFFFF;font-weight:400">Shop Girls&#39; New Arrivals</a></p>',
        defaultText:
          '<p class="amp-cms--p" style="text-align:left;"><span class="amp-cms--headline-1" style="color:#FFFFFF;font-weight:400">CAMP </span></p><p class="amp-cms--p" style="text-align:left;"><span class="amp-cms--headline-1" style="color:#FFFFFF;font-weight:400">COMPANIONS</span></p><hr style="display:block;border:0;height:8px;margin:0;background:transparent;" aria-hidden="true" /><hr style="display:block;border:0;height:8px;margin:0;background:transparent;" aria-hidden="true" /><p class="amp-cms--p" style="text-align:left;"><span class="amp-cms--body-1" style="color:#FFFFFF;font-weight:400">Secure pockets, stay-put details, and light </span></p><p class="amp-cms--p" style="text-align:left;"><span class="amp-cms--body-1" style="color:#FFFFFF;font-weight:400">layers for every adventure under the sun.</span></p><hr style="display:block;border:0;height:8px;margin:0;background:transparent;" aria-hidden="true" /><hr style="display:block;border:0;height:8px;margin:0;background:transparent;" aria-hidden="true" /><p class="amp-cms--p" style="text-align:left;"><a href="/browse/category.do?cid=1054844&mlink=1,1,HP_AG_Spotlight_CTA1" class="amp-cms--body-1" style="color:#FFFFFF;font-weight:400">Shop Girls&#39; New Arrivals</a></p>',
      },
    },
    image: {
      mainImage: [
        {
          image: {
            _meta: {
              schema:
                "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link",
            },
            id: "812405e0-cebc-4de8-a591-cb9c753d7b1b",
            name: "Summer_24_Drop2_F1_HP_Girl_Spotlight_XL",
            endpoint: "athletaprod",
            defaultHost: "cdn.media.amplience.net",
          },
          altText: "",
          variations: [
            {
              variation: "desktop",
            },
            {
              variation: "mobile",
            },
          ],
          fliph: false,
          flipv: false,
          enableChroma: false,
          chromaQuality: 80,
        },
      ],
      mobileImageOverride: [
        {
          image: {
            _meta: {
              schema:
                "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link",
            },
            id: "4ea026e2-a241-4c78-b668-9ca9924fbebd",
            name: "Summer_24_Drop2_F1_HP_Girl_Spotlight_S",
            endpoint: "athletaprod",
            defaultHost: "cdn.media.amplience.net",
          },
          altText: "",
          variations: [
            {
              variation: "desktop",
            },
            {
              variation: "mobile",
            },
          ],
          fliph: false,
          flipv: false,
          enableChroma: false,
          chromaQuality: 80,
        },
      ],
      link: {
        value: "/browse/category.do?cid=1054844&mlink=1,1,HP_AG_Spotlight_CTA1",
        label: "Shop Girls' New Arrivals",
      },
    },
    imageOverlays: {
      handle: {
        placement: "left",
      },
      useGradientBackfill: false,
    },
  },
  null,
  2
);

export default function SpotlightImage() {
  return (
    <div className="max-w-7xl min-h-screen py-24 px-4 flex-nowrap max-lg:flex-wrap mx-auto">
      <h1 className="h1 text-4xl font-extrabold text-white sm:text-4xl pb-6">
        Spotlight (Image/Video)
      </h1>
      <Image
        src={spotlightImage}
        alt="Athleta, Spotlight Image CMS component"
      />
      <div className="flex gap-4 lg:my-20 lg:w-full justify-center flex-nowrap max-lg:flex-wrap">
        <div className="flex column flex-wrap content-start">
          <p className="text-white pt-4">
            This is just one of many CMS components that are used to display
            content on the Athleta website. It has a heading, subheading,
            description sections, with a CTA link or button. Each of these
            fields can be optionally configured to display content, or, an image
            or can be displayed on its own that can link back to specific
            content.
          </p>
        </div>
        <div className="flex column content-start max-w-3xl overflow-hidden">
          <Code snippet={code} type="json" title="JSON payload:" />
        </div>
      </div>
      <div className="flex lg:my-20 max-lg:my-6 flex-wrap">
        <h2 className="h2 text-3xl font-extrabold text-white sm:text-4xl pb-6">
          Wireframes
        </h2>
        <p className="text-white py-4">
          The wireframes have been recreated from memory using Figma to
          illustrate how the component could be configured and displayed on the
          page.
        </p>
        <iframe
          style={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
            width: "100vw",
            height: "80vh",
          }}
          width="100%"
          height="100%"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FpI3hmMyRy36GTRTHXu9g9P%2FDesigns%3Fnode-id%3D331-3%26t%3DT1jYHDAVltAAtZRp-1"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex lg:my-20 max-lg:my-6 flex-col">
        <h2 className="h2 text-3xl font-extrabold text-white lg:text-4xl pb-6">
          Component
        </h2>
        <p className="text-white p-4">
          The component is built using React, receiving a JSON payload from a
          CMS provider. The JSON is processed then rendered on the page. The
          wireframes show optionally displaying image, headline, subheading, and
          CTA link or button. The component can optionally display a video instead
          of an image.
        </p>
        <h3 className="h4 text-xl font-extrabold text-white lg:text-2xl py-6">
          Image
        </h3>
        <p className="text-white p-4">
          The image is responsive and will scale to the size of the container it
          is in. The headline and subheading are optional. The layout can be
          configured to display on the left, center, or right side of the image.
          It can also be vertically aligned at the top, center, or bottom of the
          container.
        </p>
        <h3 className="h4 font-extrabold text-white lg:text-2xl py-6">Video</h3>
        <p className="text-white p-4">
          The component can optionally display a video instead of an image. The
          video will automatically play when the component is displayed on the
          page. The video can be configured to loop, or, play once then stop.
        </p>
        <h3 className="h4 font-extrabold text-white lg:text-2xl py-6">
          Sub-components
        </h3>
        <p className="text-white p-4">
          There are several sub-components that make up the entire component,
          including an image or video, Heading, Subheading, description, and CTA
          link. It can be configured to also display a "details" link, that is
          displayed in the lower right corner of the component.
        </p>
      </div>
      <Contact />
    </div>
  );
}
