import React from 'react'

export default function Ofrecemos() {
  const list = [
    {
      col: 'Inicio',
      content:
        'Ofrecemos expertise y know how en la especialidad más compleja, cambiante y costosa de la arquitectura. Consideramos que los condicionantes de la atención médica, de las relaciones organizacionales, y del equipamiento médico y las instalaciones, no pueden ser abordados desde la improvisación. Sabemos que las características edilicias condicionan fuertemente la calidad, eficiencia e imagen de un establecimiento de salud, así como sus costos operativos y de mantenimiento.',
    },
    {
      col: 'Diagnostico Institucional',
      content: 'Lorem2222',
    },
    {
      col: 'Planificacion y Programacion',
      content: 'Lorem3333',
    },
    {
      col: 'Plan Maestro',
      content: 'Lorem4444',
    },
  ]

  return (
    <div className="p-12 lg:px-32 lg:text-2xl">
      <h2 className="text-red-500 font-bold">QUE OFRECEMOS</h2>
      <div className="flex gap-10">
        <div>listado izquierda</div>
        <div>contenido derecha</div>
      </div>
    </div>
  )
}
