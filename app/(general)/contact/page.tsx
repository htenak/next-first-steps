import type { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'Page of contact of the company',
    keywords: ['Contact Page', 'Kaneth', 'Información', '...'],
};

export default function ContactPage() {
    return (
        <>
            <span className='text-7xl'>Contact Page</span>
        </>
    )
}