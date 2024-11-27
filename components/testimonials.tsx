"use client";

import useMasonry from "@/utils/useMasonry";
import Image from "next/image";

const testimonials = [
  {
    clientImg: '/images/logos/map-mavens.png',
    name: "Henry",
    company: "CEO Map Mavens",
    content:
      "Lumunate helped us turn our concept for a customizable maps platform into a reality. Their team designed an intuitive interface, made everything editable in the interface and ensured a flawless user experience.We’ve received rave reviews from our users and the app has seen tremendous growth since its launch.Will be back for future upgrades!",
  },
  {
    clientImg: '/images/logos/dify.png',
    name: "Luc Elsby",
    company: "Dify.AI",
    content:
      "Working with the team at Lumunate, in software development, was an excellent experience. As always they went above and beyond, to deliver quality outputs for us, providing post-deployment support. Very proactive communication and a deep understanding, making the whole process smooth and enjoyable!",
  },
  {
    clientImg: '/images/logos/ace-my-exam.png',
    name: "Asma",
    company: "CEO Acemyexam",
    content:
      "Lumunate helped us turn our concept for a customizable maps platform into a reality. Their team designed an intuitive interface, made everything editable in the interface and ensured a flawless user experience. We’ve received rave reviews from our users and the app has seen tremendous growth since it s launch. Will be back for future upgrades!"
  },
  {
    clientImg: '/images/logos/real-outlet.png',
    name: "Ivavisocka",
    company: "CEO The Real Outlet",
    content:
      "“The team at Lumunate is simply the best. They do the best jobs as always and have brought our idea for Koinfolio to life. Will continue the work with them for sure!"
  },
  {
    clientImg: '/images/logos/zeal.png',
    name: "Nir",
    company: "",
    content:
      "The team at Lumunate is simply the best. They do the best jobs as always and have brought our idea for Koinfolio to life. Will continue the work with them for sure!"
  },
  {
    clientImg: '/images/logos/active-campaign.png',
    name: "Ofirsilbiger",
    company: "",
    content:
      "“Quite proactive with communication, great attention to detail and very prompt with delivering the final project. 5 stars, would certainly recommend"
  },
  {
    clientImg: '/images/logos/audiodrome.png',
    name: "Dave Newell",
    company: "",
    content:
      "They were great! Took time to understand what I needed, quickly worked to deliver the project for me and then worked with me to make a few revisions to get it exactly how I wanted it. I will definitely work with them again and recommend them to anyone looking for reliable and excellent work"
  },
  {
    clientImg: '/images/logos/legacy-distrubuting.png',
    name: "Katelyn",
    company: "Legacy Distributing",
    content:
      "Fantastic job! Was very easy to get this project done and I will definitely use them for future needs, time and time again. Wonderful experience."
  },
  {
    clientImg: '/images/logos/koinfolio.png',
    name: "Ebrahim",
    company: "CEO Koinfolio",
    content:
      "The team at Lumunate is simply the best. They do the best jobs as always and have brought our idea for Koinfolio to life. Will continue the work with them for sure!"
  },
  {
    clientImg: '/images/logos/ace-my-exam.png',
    name: "Asma",
    company: "CEO Acemyexam",
    content:
      "Working with Lumunate was an absolute game-changer for us. We had been struggling with an incomplete app built on Django, and it felt like we’d hit a dead end. The team at Lumunate not only understood our challenges but also took the time to truly grasp our vision. They rebuilt our tutoring platform from the ground up using Next.js, and the difference has been night and day. We couldn’t recommend them more highly!"
  },
  {
    clientImg: '/images/logos/thomas.png',
    name: "Thomas",
    company: "The Marketing Captain",
    content:
      "This was a very big project of mine and needed some helpen from them. They’ve done exactly what was needed to get the end result for my marketing agency. Happy with the expertise and knowledge and looking forward to work more with them in the future. Thanks!"
  },
  {
    clientImg: '/images/logos/ayse.png',
    name: "Cathy Charles",
    company: "CEO Ayse",
    content:
      "I highly recommend working with Lumunate! The CEO and his team did a great job with helping me build my mobile application and they are clearly experts in their field. They were very easy to work with, polite, communicated efficiently, were transparent about their process, well-organized and had great time management skills. In fact, often times they completed tasks faster than we agreed upon. If you are looking for a high-quality development team, do not hesitate to use Lumunate’s services."
  },

];

export default function Testimonials() {
  const masonryContainer = useMasonry();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Section header */}
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-forest-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-forest-200/50">
            <span className="inline-flex bg-gradient-to-r from-forest-500 to-forest-200 bg-clip-text text-transparent">
              Testimonials
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-menda text-3xl font-medium text-transparent md:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        <div>
          {/* Cards */}
          <div
            className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
            ref={masonryContainer}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <Testimonial testimonial={testimonial}>
                  {testimonial.content}
                </Testimonial>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonial({
  testimonial,
  children,
}: {
    testimonial: {
    clientImg: string;
    name: string;
    company: string;
    content: string;
  };
  children: React.ReactNode;
}) {
  return (
    <article
      className={`relative rounded-2xl p-5 backdrop-blur-sm transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] bg-[linear-gradient(88.12deg,rgba(17,39,24,0.48)_3.17%,rgba(33,55,31,0.2304)_52.41%,rgba(17,39,24,0.48)_94.35%)]`}
    >
      <div className="flex flex-col gap-4">
        <div>
          <Image width={32} src={testimonial.clientImg} height={50} alt="Client logo" />
        </div>
        <p className="text-[#E5E7EB] before:content-['“'] after:content-['”']">
          {children}
        </p>
        <div className="flex items-center gap-3">
          <div className="text-sm font-medium text-gray-200">
            <span>{testimonial.name}</span>
            <span className="text-gray-700"> - </span>
            <a
              className="text-forest-200/65 transition-colors hover:text-forest-500"
            >
              {testimonial.company}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
