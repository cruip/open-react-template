import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logoSYSTEMS.png";

export default function LogoSystems() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
      <Image src={logo} alt="Metalbit Systems" width={256} height={"auto"} />
    </Link>
  );
}
