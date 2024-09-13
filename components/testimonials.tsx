"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const leaders = [
  {
    img: "/images/leader-01.jpg",
    name: "Leader 1",
    position: "Community Leader",
  },
  {
    img: "/images/leader-02.jpg",
    name: "Leader 2",
    position: "Community Leader",
  },
  {
    img: "/images/leader-03.jpg",
    name: "Leader 3",
    position: "Community Leader",
  },
];

const members = Array(25).fill({
  img: "/images/member-01.jpg",
  name: "Member",
  position: "Community Member",
});

const personnel = [
  {
    img: "/images/personnel-01.jpg",
    name: "Personnel 1",
    position: "Technical Lead",
  },
  {
    img: "/images/personnel-02.jpg",
    name: "Personnel 2",
    position: "Support Staff",
  },
];

export default function Team() {
  const [activeTab, setActiveTab] = useState("leaders");

  return (
    <section id="team" className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-200">Our Team</h2>
          <p className="text-lg text-indigo-200/65">
            Explore our community leaders, members, and personnel driving the
            mission of Ethical HCK.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center pb-8">
          <button
            onClick={() => setActiveTab("leaders")}
            className={`px-4 py-2 ${activeTab === "leaders" ? "bg-indigo-600 text-white" : "text-indigo-300"}`}
          >
            Community Leaders
          </button>
          <button
            onClick={() => setActiveTab("members")}
            className={`px-4 py-2 mx-4 ${activeTab === "members" ? "bg-indigo-600 text-white" : "text-indigo-300"}`}
          >
            Community Members
          </button>
          <button
            onClick={() => setActiveTab("personnel")}
            className={`px-4 py-2 ${activeTab === "personnel" ? "bg-indigo-600 text-white" : "text-indigo-300"}`}
          >
            Personnel
          </button>
        </div>

        {/* Card Content */}
        {activeTab === "leaders" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leaders.map((leader, index) => (
              <TeamCard key={index} img={leader.img} name={leader.name} position={leader.position} />
            ))}
          </div>
        )}

        {activeTab === "members" && (
          <div className="relative">
            {/* Slider controls */}
            <SliderControl members={members} />
          </div>
        )}

        {activeTab === "personnel" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {personnel.map((person, index) => (
              <TeamCard key={index} img={person.img} name={person.name} position={person.position} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function TeamCard({ img, name, position }: { img: string; name: string; position: string }) {
  return (
    <div className="bg-gray-800 rounded-lg p-5 text-center">
      <Image src={img} alt={name} width={100} height={100} className="mx-auto rounded-full" />
      <h3 className="mt-4 text-xl font-bold text-gray-200">{name}</h3>
      <p className="text-indigo-200/65">{position}</p>
    </div>
  );
}

function SliderControl({ members }: { members: any}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === members.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? members.length - 1 : prev - 1));
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {members.map((member:any, index:any) => (
          <div key={index} className="flex-shrink-0 w-full">
            <TeamCard img={member.img} name={member.name} position={member.position} />
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white">
        <FaArrowLeft size={20} />
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white">
        <FaArrowRight size={20} />
      </button>
    </div>
  );
}
