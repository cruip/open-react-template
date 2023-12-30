'use client'
import dynamic from 'next/dynamic';
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import UserProfile from "../../../components/profile";

export default function Web() {

    const searchParams = useSearchParams()

    const search = searchParams.get('email')
    return (<UserProfile userEmail={search!} />)

}