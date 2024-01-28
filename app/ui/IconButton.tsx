import React, { useState, useRef } from 'react'

export default function IconButton({
  children,
  text,
  color,
  textcolor,
  ...props
}: {
  children: React.ReactNode
  text: string
  color?: string
  textcolor?: string
}) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex py-4 px-6 items-center rounded-lg text-xl ${
        textcolor || 'text-white'
      } ${color || 'bg-gray-600'}`}
      {...props}
    >
      {children}
      <div
        style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
        className="overflow-x-hidden transition-all duration-300 ease-out"
      >
        <span
          ref={ref}
          className="pl-2 font-bold"
        >
          {text}
        </span>
      </div>
    </button>
  )
}
