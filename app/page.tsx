'use client'

import Image from 'next/image'
import Navbar from './ui/Navbar'
import ImageSlider from './ui/ImageSlider'
import { Nosotros } from './ui/Nosotros'
import Ofrecemos from './ui/Ofrecemos'

export default function Home() {
  return (
    <main>
      <Navbar />
      <ImageSlider />
      <Nosotros />
      <Ofrecemos />
    </main>
  )
}
