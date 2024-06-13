import FeatImage03 from "@/public/images/deem/digistrive_logo.png";
import Deem from "@/public/images/deem/deem.svg";
import { CVItem } from "./helpers/cv-item";

export default function ResumeHighlights() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
            <h1 className="h2 mb-4">Highlights</h1>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            <CVItem 
              imageContent={{
                url: Deem, 
                alt: "Deem website screenshot. Caption: Finally, it's easier to travel anywhere.", 
                width: 384, 
                height: 330,
                position: "right",
              }}
              content={{
                companyName: "Deem, Inc.", 
                iconPosition: "left",
                jobTitle: "Senior Software Engineer - July 2014 to May 2020", 
                location: "Oakland, CA", 
                summary: "Led cross-functional teams to analyze requirements and implement solutions. Developed flight seatmap using React and Redux. Trained and mentored junior developers. Diagnosed and resolved system performance issues.", 
                list: [{
                    description: "Led cross-functional teams to analyze requirements and implement solutions",
                    
                  }, 
                  {
                    description: "Developed flight seatmap using React and Redux",
                  },
                  {
                    description: "Trained and mentored junior developers",
                  },
                  {
                    description: "Diagnosed and resolved system performance issues",
                  },
                ],
                useListIcon: true,
                }}
              />
            {/* 3rd item */}
            <CVItem 
              imageContent={{
                url: FeatImage03, 
                alt: "Digistrive, Inc. Logo", 
                width: 384, 
                height: 330,
                position: "left",
              }}
              content={{
                companyName: "Digistrive, Inc.", 
                iconPosition: "left",
                jobTitle: "Software Engineer - June 2013 to July 2014", 
                location: "Atlanta, GA", 
                summary: "Led transfer of Digistrive business logic and data processes when acquired by Deem, Inc. Restructured JavaScript modules, saving time on bug resolution. Reduced data bandwidth consumption and response time. Improved user behavior research and content visibility.", 
                list: [{
                    description: "Led transfer of Digistrive business logic and data processes when acquired by Deem, Inc.",
                    
                  }, 
                  {
                    description: "Restructured JavaScript modules, saving time on bug resolution",
                  },
                  {
                    description: "Reduced data bandwidth consumption and response time",
                  },
                  {
                    description: "Improved user behavior research and content visibility",
                  },
                ],
                useListIcon: true,
                }}
              />
              
            {/* Download Button */}
            <div className="flex items-center md:grid md:grid-cols-12 md:gap-6">
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto col-start-6 col-end-12"
              data-aos="fade-right"
            >
              <a
                    href="https://1drv.ms/w/s!AlNLwqrOUfGHjQ7VJVqkT-lHyXSd?e=SivKyi"
                    className="p-4 bg-teal-400 text-white rounded-md border-transparent border hover:bg-transparent hover:border-teal-400 hover:border hover:btn-lift"
                    type="button"
                    id="download-resume"
                    target="_blank"
                  >
                    Download Resume
                  </a>
            </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
