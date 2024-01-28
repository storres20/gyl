import React from 'react'
import Image from 'next/image'
import Button2 from './Button2'

export const Nosotros = () => {
  return (
    <>
      <div className="p-12 lg:px-32 lg:py-20 text-justify lg:text-2xl flex flex-col gap-6 lg:gap-10 ">
        <h2 className="text-red-500 font-bold">NOSOTROS</h2>
        <p>
          <b>Gutierrez y Leon</b> es un estudio de arquitectura especializado en
          Planificación, Proyecto y Dirección de Obra de edificios para la
          salud.
        </p>
        <p>
          Está integrado por arquitectos con una importante formación y
          trayectoria en arquitectura para la salud, que en conjunto con otros
          especialistas han realizado durante muchos años trabajos en los
          ámbitos público y privado, abordando proyectos y obras de distinta
          envergadura y complejidad.
        </p>
        <p>
          El conocimiento, la experiencia y los servicios de{' '}
          <b>Gutierrez y Leon</b> le ayudarán a dar una correcta respuesta a las
          necesidades edilicias de su establecimiento.
        </p>
      </div>
      <div className="text-center">
        <Image
          src="/alonso.jpg"
          width={400}
          height={400}
          alt="Picture of the author"
          className="rounded-full m-auto pb-5"
        />
        <p className="lg:text-2xl font-semibold">ING. ALONSO GUTIERREZ</p>
        <Button2 />
      </div>
    </>
  )
}
