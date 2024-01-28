'use client'

import Image from 'next/image'
import Navbar from './ui/Navbar'
import ImageSlider from './ui/ImageSlider'
import { Nosotros } from './ui/Nosotros'

export default function Home() {
  return (
    <main>
      <Navbar />
      <ImageSlider />
      <Nosotros />
    </main>
  )
}
