import React from "react";
import { Block } from "./block";
import { GlobeWithLines, HeadIcon, Notes, SpeechBubbleWithCog, Star2Lines, ThumbsUp } from "./icons";

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 feature-title">Who am I?</h2>
            <p className="text-xl text-gray-400 pb-5">
              A Results-driven Software Engineer skilled in integrating
              services, converting components from JavaScript to TypeScript, and
              collaborating with the Microsoft Azure consulting team for cloud
              services migration.
            </p>
            <p className="text-xl text-gray-400 pb-5">
              My day-to-day can vary, but it typically can encompasses writing
              Technical Design Documents, delivering a unified codebase for UI
              components, development and implementation of new technologies and
              features, and leading mission critical projects. Below are just a few highlights of my skill set.
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <Block title="Libraries" icon={<Star2Lines invert backgroundColor="#164d37" />}>
              <p className="text-lg text-gray-400 text-center">
                Javascript, Typescript, React, Node, Webpack, Babel, Playwright, Jest
              </p>
            </Block>

            {/* 2nd item */}
            <Block title="Analytical" icon={<Notes backgroundColor="#164d37" />}>
              <p className="text-lg text-gray-400 text-center">
                Test & Deployment Automation, Visual Regression, Performance Tuning, Browser Testing, DevOps
              </p>
            </Block>
            {/* 3rd item */}
            <Block title="Tools" icon={<GlobeWithLines backgroundColor="#164d37"/>}>
              <p className="text-lg text-gray-400 text-center">
                Jenkins, Github, Azure Cloud VM & AKS, VMware Cloud Foundry (PCF), Lighthouse
              </p>
            </Block>
            {/* 4th item */}
            <Block title="Proficiency" icon={<HeadIcon backgroundColor="#164d37" />}>
              <p className="text-lg text-gray-400 text-center">
                Agile Scrum, Project Management, UI/UX Design and Development, Process Improvement, Business Requirements
              </p>
            </Block>
            {/* 5th item */}
            <Block title="Software" icon={<ThumbsUp backgroundColor="#164d37" />}>
              <p className="text-lg text-gray-400 text-center">
                VS Code, Intellij, Photoshop, Illustrator, Figma
              </p>
            </Block>
            {/* 6th item */}
            <Block title="Misc" icon={<SpeechBubbleWithCog backgroundColor="#164d37" />}>
              <p className="text-lg text-gray-400 text-center">
              Shell scripting, REST APIs, Prototyping/Proof-of-Concept, Documentation, Customer Identity and Access Management (CIAM), 
              </p>
            </Block>
          </div>
        </div>
      </div>
    </section>
  );
}
