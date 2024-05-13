import type { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'Page of prices of my services',
    keywords: ['Pricing Page', 'Kaneth', 'Información', '...'],
};

export default function PricingPage() {
    return (
        <>
            <span className='text-7xl'>Pricing Page</span>
        </>
    )
}