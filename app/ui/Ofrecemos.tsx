import React, { useState } from 'react'

export default function Ofrecemos() {
  const list = [
    {
      id: 1,
      col: 'Inicio',
      content:
        'Ofrecemos expertise y know how en la especialidad más compleja, cambiante y costosa de la arquitectura. Consideramos que los condicionantes de la atención médica, de las relaciones organizacionales, y del equipamiento médico y las instalaciones, no pueden ser abordados desde la improvisación. Sabemos que las características edilicias condicionan fuertemente la calidad, eficiencia e imagen de un establecimiento de salud, así como sus costos operativos y de mantenimiento',
    },
    {
      id: 2,
      col: 'Diagnostico Institucional',
      content:
        'Consiste en la evaluación de la situación y del estado del recurso físico existente de una institución en funcionamiento, por medio de la realización de planos y fichas técnicas, el análisis de accesos, esquemas circulatorios, ubicación y diseño de servicios, y de los datos de producción en relación con la capacidad instalada. El diagnóstico institucional permite saber cuál es el estado del recurso físico y si es acorde a la demanda y a la producción del establecimiento.',
    },
    {
      id: 3,
      col: 'Planificacion y Programacion',
      content:
        'Consiste en la caracterización, cualificación y cuantificación del recurso físico necesario para una institución en función de las definiciones de objetivos y políticas, del diagnóstico institucional y de la demanda esperada. Como resultado de esta etapa se arriba al programa de necesidades donde están cuantificados y dimensionados en cantidad y superficie la totalidad de los locales y servicios, acompañados por una estimación de costos de inversión.',
    },
    {
      id: 4,
      col: 'Plan Maestro',
      content:
        'Consiste en establecer, generalmente para un establecimiento existente, cómo debería ser a futuro en función de las definiciones emanadas de la planificación y programación. A partir de las políticas y prioridades de la institución, la capacidad de inversión y los requerimientos mínimos de capacidad instalada para mantener en funcionamiento el establecimiento, se define la secuencia temporal de obras y tareas, con los costos de cada etapa para llegar al modelo espacial planteado.',
    },
  ]

  // State to keep track of the selected item
  const [selectedItem, setSelectedItem] = useState(list[0])

  return (
    <div className="p-12 lg:px-32 lg:text-2xl">
      <h2 className="text-red-500 font-bold pb-10">QUE OFRECEMOS</h2>
      <div className="flex flex-col lg:flex-row lg:gap-10">
        <div className="lg:w-1/2">
          <ul className="flex gap-x-10 flex-wrap lg:flex-col justify-center">
            {list.map((item) => (
              <li
                key={item.id}
                className={`p-4 mb-4 bg-slate-400 hover:bg-blue-400 cursor-pointer ${
                  selectedItem.id === item.id ? 'text-white bg-blue-400' : ''
                } text-center`}
                onClick={() => setSelectedItem(item)}
              >
                {item.col}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-1/2">
          <ul>
            <li className="mb-4 text-justify">{selectedItem.content}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
