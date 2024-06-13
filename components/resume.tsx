"use client";
import { useState } from "react";
import { TECollapse } from "tw-elements-react";
import classNames from "classnames";
import Image from "next/image";

import { GapInc, ListIcon } from "@/components/icons";
import insortProductImage from "@/public/images/gap/cms-in-sort-product-card.png";

const ResumeComponent = () => {
  const [activeElement, setActiveElement] = useState("");
  const [getCollapsed, setCollapsed] = useState<{
    [key: string]: { "data-twe-collapse-collapsed": string } | {};
  }>({
    collapseOne: { "data-twe-collapse-collapsed": "" },
    collapseTwo: { "data-twe-collapse-collapsed": "" },
  });
  const handleClick = (value: string) => {
    if (value === activeElement) {
      setActiveElement("");
      setCollapsed((prevState) => ({
        ...prevState,
        [value]: { "data-twe-collapse-collapsed": "" },
      }));
    } else {
      setActiveElement(value);
      setCollapsed((prevState) => ({ ...prevState, [value]: {} }));
    }
  };

  const buttonCollapseClassNames = classNames("group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10", {
      "text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]":
        activeElement === ("collapseOne" || "collapseTwo"),
      "": activeElement !== ("collapseOne" || "collapseTwo"),
    });
  const svgCollapseClassNames = classNames("-me-1 ms-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6", {
    "rotate-[-180deg] -mr-1": activeElement === ("collapseOne" || "collapseTwo"),
    "rotate-0 fill-[#212529] dark:fill-white": activeElement !== ("collapseOne" || "collapseTwo"),
  })

  return (
    <div className=" bg-gray-100 min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Professional Summary */}
        <section className="mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Professional Experience
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A skilled UI developer with a track record of driving efficiency
              gains and optimizing workflows for major brands.
            </p>
          </div>
        </section>
        {/* Professional Experience */}
        <section className="mb-12">
          {/* Gap, Inc. */}
          <div className="mb-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mr-8">
              <GapInc />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-lg text-gray-500 font-semibold mb-2">
                Senior Software Engineer – Full Stack & Brand Technical Lead
              </h3>
              <p className="text-gray-600 mb-4">
                Motion Recruitment Partners at Gap, Inc. | San Francisco, CA
              </p>
              <p className="text-gray-600 mb-4">
                My journey is a story of efficiency, innovation, and
                collaboration. Through leading sprint planning sessions, I
                reduced project turnaround time by 20%. By translating business
                requirements into tasks, I cut development costs by 15%. My
                focus on code quality led to a 30% drop in post-deployment
                issues.
              </p>
              <p className="text-gray-600 mb-4">
                Collaborating closely with brand leaders, I boosted satisfaction
                scores by 25%. Project planning accuracy improved by 10%,
                ensuring seamless execution. As a liaison between teams, I
                increased collaboration effectiveness by 15% and developer
                proficiency by 20%.
              </p>
              <p className="text-gray-600 mb-4">
                Constantly innovating, I drove a 20% increase in brand
                technology adoption. My journey is defined by results, driven by
                passion, and aimed at shaping a better future in tech.
              </p>
              <div id="accordion">
                <div className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
                  <h2 className="mb-0" id="headingOne">
                    <button
                      className={buttonCollapseClassNames}
                      type="button"
                      {...getCollapsed.collapseOne}
                      aria-expanded="false"
                      aria-controls="collapseOne"
                      onClick={() => handleClick("collapseOne")}
                    >
                      Key Achievements
                      <span
                        className={svgCollapseClassNames}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </button>
                  </h2>
                  <TECollapse
                    id="collapseOne"
                    show={activeElement === "collapseOne"}
                    className="!mt-0 !rounded-b-none !shadow-none"
                    aria-labelledby="headingOne"
                  >
                    <div className="px-5 py-4">
                      <ul className="text-gray-900">
                        <li className="flex items-baseline mb-2">
                          <ListIcon />
                          Leading sprint planning sessions, facilitating
                          discussions to prioritize tasks and allocate resources
                          effectively, resulting in a 20% reduction in project
                          turnaround time.
                        </li>
                        <li className="flex items-baseline mb-2">
                          <ListIcon />
                          Spearheading story writing efforts, translating
                          business requirements into actionable development
                          tasks for the team, leading to a 15% decrease in
                          development costs.
                        </li>
                        <li className="flex items-baseline mb-2">
                          <ListIcon />
                          Conducting technical reviews to ensure adherence to
                          best practices, maintain code quality, and mitigate
                          risks, resulting in a 30% reduction in post-deployment
                          issues.
                        </li>
                        <li className="flex items-baseline mb-2">
                          <ListIcon />
                          Collaborating closely with brand leaders to understand
                          their vision and translate it into technical
                          solutions, resulting in a 25% increase in brand
                          satisfaction scores.
                        </li>
                        <li className="flex items-baseline mb-2">
                          <ListIcon />
                          Playing a pivotal role in project planning, defining
                          project scopes, timelines, and deliverables, leading
                          to a 10% improvement in project delivery accuracy.
                        </li>
                        <li className="flex items-baseline mb-2">
                          <ListIcon />
                          Implementing process planning strategies to streamline
                          workflows and optimize development processes,
                          resulting in a 20% increase in team productivity.
                        </li>
                        <li className="flex items-baseline mb-2">
                          <ListIcon />
                          Acting as a key liaison between the development team
                          and brand stakeholders, fostering clear communication
                          and alignment of objectives, resulting in a 15%
                          increase in cross-functional collaboration
                          effectiveness.
                        </li>
                        <li className="flex items-baseline mb-2">
                          <ListIcon />
                          Leveraging expertise in Full Stack development to
                          provide hands-on technical leadership and mentorship
                          to junior developers, contributing to a 20% increase
                          in developer proficiency.
                        </li>
                        <li className="flex items-baseline mb-2">
                          <ListIcon />
                          Continuously evaluating emerging technologies and
                          trends to drive innovation and enhance brand
                          experiences, resulting in a 20% improvement in brand
                          technology adoption rate
                        </li>
                      </ul>
                    </div>
                  </TECollapse>
                </div>

                {/* <div className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
                  <h2 className="mb-0" id="headingTwo">
                    <button
                      className={buttonCollapseClassNames}
                      type="button"
                      {...getCollapsed.collapseTwo}
                      data-twe-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                      onClick={() => handleClick("collapseTwo")}
                    >
                      Samples
                      <span
                        className={svgCollapseClassNames}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </button>
                  </h2>
                  <TECollapse
                    show={activeElement === "collapseTwo"}
                    className="!mt-0 !rounded-b-none !shadow-none"
                    aria-labelledby="headingTwo"
                    id="collapseTwo"
                    data-twe-parent="#accordion"
                  >
                    <div className="relative mb-0 shrink-0 transition-transform duration-200 ease-in-out">
                      <h3 className="text-gray-900 mb-4">
                        In-Sort CMS marketing Product Card
                      </h3>
                      <div>
                        <div className="absolute border-2 border-red-600 w-[--sampleArea-w-210] h-[--sampleArea-h-330] size-40 opacity-1 [&:not(group-data-[twe-collapse-collapsed]):opacity-0]">
                          &nbsp;
                        </div>
                        <Image
                          src={insortProductImage}
                          alt="In-Sort Product Card"
                          width="830"
                          height="377"
                        />
                      </div>
                      <h3 className="text-gray-900 mb-4">Description</h3>
                    </div>
                  </TECollapse>
                </div> */}
              </div>
            </div>
          </div>
          {/* Other job experiences */}
          {/* ... */}
        </section>
      </div>
    </div>
  );
};

export default ResumeComponent;
