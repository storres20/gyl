import React from 'react'
import { TfiWorld } from 'react-icons/tfi'
import { FiGithub } from 'react-icons/fi'
import { ImLinkedin } from 'react-icons/im'
import IconButton from './IconButton'

export default function Button2() {
  const project = {
    linkedin: 'https://www.linkedin.com/in/alonsogutierrezleon/',
  }

  return (
    <>
      <div className="flex justify-center mt-2">
        <a
          href={project.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex text-white border-0 focus:outline-none rounded text-lg"
        >
          <IconButton
            text="LinkedIn"
            color="bg-blue-500"
            textcolor="text-black"
          >
            <ImLinkedin />
          </IconButton>
        </a>
      </div>
    </>
  )
}
