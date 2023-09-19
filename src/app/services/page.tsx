import Banner from "@/components/services/banner";
import Item from "./item";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Serviceitems from "@/components/services/serviceItems";
import Prompts from "@/components/services/prompts";
import Footer from "@/components/footer/Footer";

const services = () => {
  return (
    <div className="bg-gradient-to-b from-[#0e0d27] to-[#0a0722]">
      {/* <Navbar/> */}
      <Banner />
      <Serviceitems/>
      <Prompts />
      <Footer/>
    </div>
  );
};

export default services;