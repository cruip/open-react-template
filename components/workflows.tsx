import Image from "next/image";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-forest-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-forest-200/50">
              <span className="inline-flex bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
                Our Featured Projects
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-menda text-3xl font-semibold text-transparent md:text-4xl">
              Delivering Excellence, One Project at a Time
            </h2>
          </div>
          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid items-start gap-6 lg:max-w-none lg:grid-cols-3 sm:grid-cols-2">
            {/* Card 1 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-[#000000] p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-forest-900/50 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-forest-800 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-[linear-gradient(88.12deg,rgba(43,43,43,0.35)_3.17%,rgba(127,136,126,0.16)_52.41%,rgba(43,43,43,0.35)_94.35%)]"> 
                {/* Image */}
                <Image
                  className="inline-flex p-4 pb-0 rounded-[inherit] object-cover w-full"
                  src={"/images/projects/Ayse.png"}
                  width={350}
                  height={288}
                  alt="Workflow 01"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="relative mb-3">
                    {/* Arrow */}
                    <div
                      className="absolute right-2 -top-1 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-black/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                      aria-hidden="true"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} fill="none">
                        <path fill="#F4F4F5" d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z" />
                      </svg>
                    </div>

                    <span className="btn-sm relative rounded-full bg-black/65 px-10 py-0.5 text-[18px] font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ">
                      <span className="bg-gradient-to-r from-forest-500 to-forest-200 bg-clip-text text-transparent">Ayse</span>
                    </span>
                  </div>
                  <p className="text-white/85">
                    A cross-platform app for concert-goers to discover events, manage tickets, and chat in-app. Built with React
                    Native and integrated with TicketMaster API, Firebase, and UCLA OAuth. Includes a React.js/Node.js web
                    counterpart.
                  </p>
                </div>
              </div>
            </a>
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-[#000000] p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-forest-900/50 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-forest-800 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-[linear-gradient(88.12deg,rgba(43,43,43,0.35)_3.17%,rgba(127,136,126,0.16)_52.41%,rgba(43,43,43,0.35)_94.35%)] ">
                {/* Image */}
                <Image
                  className="inline-flex p-4 pb-0 rounded-[inherit] object-cover w-full"
                  src={"/images/projects/Zeal.png"}
                  width={350}
                  height={288}
                  alt="Workflow 01"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="relative mb-3">
                    {/* Arrow */}
                    <div
                      className="absolute right-2 -top-1 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-black/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                      aria-hidden="true"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} fill="none">
                        <path fill="#F4F4F5" d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z" />
                      </svg>
                    </div>

                    <span className="btn-sm relative rounded-full bg-black/65 px-10 py-0.5 text-[18px] font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ">
                      <span className="bg-gradient-to-r from-forest-500 to-forest-200 bg-clip-text text-transparent">Zeal</span>
                    </span>
                  </div>
                  <p className="text-white/85">
                    Zeal is a full-stack platform revolutionizing healthcare with AI-driven solutions. Built with Next.js, React,
                    and Node.js, it features a responsive, user-friendly interface for seamless navigation.
                  </p>
                </div>
              </div>
            </a>
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-[#000000] p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-forest-900/50 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-forest-800 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-[linear-gradient(88.12deg,rgba(43,43,43,0.35)_3.17%,rgba(127,136,126,0.16)_52.41%,rgba(43,43,43,0.35)_94.35%)] ">
                {/* Image */}
                <Image
                  className="inline-flex p-4 pb-0 rounded-[inherit] object-cover w-full"
                  src={"/images/projects/Koinfolio.png"}
                  width={350}
                  height={288}
                  alt="Workflow 01"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="relative mb-3">
                    {/* Arrow */}
                    <div
                      className="absolute right-2 -top-1 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-black/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                      aria-hidden="true"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} fill="none">
                        <path fill="#F4F4F5" d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z" />
                      </svg>
                    </div>

                    <span className="btn-sm relative rounded-full bg-black/65 px-10 py-0.5 text-[18px] font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ">
                      <span className="bg-gradient-to-r from-forest-500 to-forest-200 bg-clip-text text-transparent">
                        Koinfolio
                      </span>
                    </span>
                  </div>
                  <p className="text-white/85">
                    A cryptocurrency portfolio platform for tracking, analyzing, and optimizing assets, with real-time tracking,
                    customizable dashboards, payment integrations (PayPal, Stripe, Coinbase), and CI/CD pipelines.
                  </p>
                </div>
              </div>
            </a>
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-[#000000] p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-forest-900/50 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-forest-800 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-[linear-gradient(88.12deg,rgba(43,43,43,0.35)_3.17%,rgba(127,136,126,0.16)_52.41%,rgba(43,43,43,0.35)_94.35%)] ">
                {/* Image */}
                <Image
                  className="inline-flex p-4 pb-0 rounded-[inherit] object-cover w-full"
                  src={"/images/projects/FastClean.png"}
                  width={350}
                  height={288}
                  alt="Workflow 01"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="relative mb-3">
                    {/* Arrow */}
                    <div
                      className="absolute right-2 -top-1 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-black/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                      aria-hidden="true"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} fill="none">
                        <path fill="#F4F4F5" d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z" />
                      </svg>
                    </div>

                    <span className="btn-sm relative rounded-full bg-black/65 px-10 py-0.5 text-[18px] font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ">
                      <span className="bg-gradient-to-r from-forest-500 to-forest-200 bg-clip-text text-transparent">
                        Fast Clean
                      </span>
                    </span>
                  </div>
                  <p className="text-white/85">
                    A car detailing platform with a booking system, multi-location pricing, payment gateways, Google Calendar
                    sync, and PWA capabilities. Includes admin panel for service and user management.
                  </p>
                </div>
              </div>
            </a>
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-[#000000] p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-forest-900/50 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-forest-800 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-[linear-gradient(88.12deg,rgba(43,43,43,0.35)_3.17%,rgba(127,136,126,0.16)_52.41%,rgba(43,43,43,0.35)_94.35%)] ">
                {/* Image */}
                <Image
                  className="inline-flex p-4 pb-0 rounded-[inherit] object-cover w-full"
                  src={"/images/projects/Maps.png"}
                  width={350}
                  height={288}
                  alt="Workflow 01"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="relative mb-3">
                    {/* Arrow */}
                    <div
                      className="absolute right-2 -top-1 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-black/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                      aria-hidden="true"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} fill="none">
                        <path fill="#F4F4F5" d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z" />
                      </svg>
                    </div>

                    <span className="btn-sm relative rounded-full bg-black/65 px-10 py-0.5 text-[18px] font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ">
                      <span className="bg-gradient-to-r from-forest-500 to-forest-200 bg-clip-text text-transparent">
                        Map Mavens
                      </span>
                    </span>
                  </div>
                  <p className="text-white/85">
                    A map creation tool with Google Maps API, AWS S3 storage, team collaboration, and PDF exports. Includes tiered
                    subscriptions via Stripe and Prisma ORM for efficient data handling
                  </p>
                </div>
              </div>
            </a>
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-[#000000] p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-forest-900/50 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-forest-800 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-[linear-gradient(88.12deg,rgba(43,43,43,0.35)_3.17%,rgba(127,136,126,0.16)_52.41%,rgba(43,43,43,0.35)_94.35%)] ">
                {/* Image */}
                <Image
                  className="inline-flex p-4 pb-0 rounded-[inherit] object-cover w-full"
                  src={"/images/projects/AceMyExam.png"}
                  width={350}
                  height={288}
                  alt="Workflow 01"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="relative mb-3">
                    {/* Arrow */}
                    <div
                      className="absolute right-2 -top-1 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-black/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                      aria-hidden="true"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} fill="none">
                        <path fill="#F4F4F5" d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z" />
                      </svg>
                    </div>

                    <span className="btn-sm relative rounded-full bg-black/65 px-10 py-0.5 text-[18px] font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ">
                      <span className="bg-gradient-to-r from-forest-500 to-forest-200 bg-clip-text text-transparent">
                        AceMyExams
                      </span>
                    </span>
                  </div>
                  <p className="text-white/85">
                    A Learning Management System (LMS) with past papers, revision notes, and tutor access. Features include
                    role-based access, payment options, and responsive, SEO-optimized design.
                  </p>
                </div>
              </div>
            </a>

          </Spotlight>
        </div>
      </div>
    </section>
  );
}
