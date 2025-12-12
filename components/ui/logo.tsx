import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="АЛМ">
      <Image src={logo} alt="АЛМ" width={80} height={40} />
    </Link>
  );
}
