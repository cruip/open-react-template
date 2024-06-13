"use client"
import { usePathname } from 'next/navigation';

export default function HeaderTitle() {
  const pathname = usePathname();
  return pathname !== "/" ? (
    <div className="text-left px-6"><h1 className="h4">Keith Nickas</h1> Seasoned Software Engineer</div>
  ) : null;
}