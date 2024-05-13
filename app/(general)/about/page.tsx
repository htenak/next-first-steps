import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'About Page',
  description: 'About Description',
  keywords: ['About Page', 'Kaneth', 'Información', '...'],
};

export default function AboutPage() {
  return (
    <main className='flex flex-col items-center'>
      <span className='text-7xl'>About Page</span>
    </main>
  )
}