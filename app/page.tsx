// pages/index.js

'use client'

import { useState } from 'react'
import { Link } from 'react-scroll'

export default function Home() {
  // Mobile navigation state
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const handleLinkClick = () => {
    // Close the mobile navbar when a link is clicked
    setIsMobileNavOpen(false)
  }

  // Example data for services
  const [services] = useState([
    {
      title: 'DISEÑO INTEGRAL DE PROYECTOS',
      description:
        'Abarcamos desde diseños conceptuales o de pre-factibilidad, hasta estudios definitivos de ingenieria.',
    },
    {
      title: 'AUTOMATIZACION DE EDIFICACIONES',
      description:
        'En G&L entendemos la Domotica e Inmotica como la integracion de tecnologias; sistemas de seguridad, comunicacion y control para crear residencias inteligentes.',
    },
    {
      title: 'CONSTRUCCION DE PROYECTOS INTEGRALES',
      description:
        'Abarcamos desde Obra Nueva, Remodelaciones y Ampliaciones, somos contratistas generales.',
    },
    {
      title: 'PROYECTOS TIPO EPC-EPCM',
      description:
        'G&L diseña la instalacion que necesita su cliente, adquiere los equipos y materiales, y se encarga de la ejecucion de toda la obra.',
    },
  ])

  // Example data for projects
  const [projects] = useState([
    {
      title: 'EDIFICIOS DE VIVIENDA',
      description:
        'Proyectos de Vivienda tales como: Habilitacion urbana, Viviendas unifamiliares, Edificios multifamiliares, Conjuntos habitacionales, Casas de playa y otros.',
    },
    {
      title: 'INDUSTRIALES Y MINEROS',
      description:
        'Proyectos en Sector Industrial y mineros tales como: Construccion y Mantenimiento de Infraestructura de Plantas Industriales, Obras civiles en general para campamentos mineros, Obras especiales.',
    },
    {
      title: 'INFRAESTRUCTURA URBANA',
      description:
        'Proyectos de Infraestructura Urbana para espacios publicos tales como: Plazas y Parques, Paseos peatonales, Alamedas, Areas de juegos infantiles, Losas deportivas, entre otros.',
    },
    {
      title: 'OFICINAS Y HOTELES',
      description:
        'Proyectos tales como: Hoteles en Ciudades, Centros Turisticos, Balnearios, etc. Edificios de Oficinas Comerciales, Agencias Bancarias, entre otros.',
    },
  ])

  // State to manage the number of services and projects to display initially
  const [numServices, setNumServices] = useState(3)
  const [numProjects, setNumProjects] = useState(3)

  return (
    <div>
      <main className="bg-gray-100 min-h-screen">
        <header className="bg-white shadow sticky top-0 z-10">
          <div className="container mx-auto py-4 px-8 flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800">GyL</div>
            <div className="block lg:hidden">
              <button
                onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                className="text-gray-800 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileNavOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
            <nav className="hidden lg:flex lg:space-x-4">
              <ul className="flex space-x-4">
                <li>
                  <Link
                    to="top"
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-gray-700 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="services"
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-gray-700 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-gray-700 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-gray-700 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Mobile Navigation */}
        {isMobileNavOpen && (
          <nav className="lg:hidden bg-gray-100 py-4 sticky top-20 z-10">
            <ul className="flex flex-col items-center">
              <li>
                <Link
                  to="top"
                  smooth={true}
                  duration={500}
                  className="text-gray-800 hover:text-gray-700 cursor-pointer"
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  className="text-gray-800 hover:text-gray-700 cursor-pointer"
                  onClick={handleLinkClick}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="text-gray-800 hover:text-gray-700 cursor-pointer"
                  onClick={handleLinkClick}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-gray-800 hover:text-gray-700 cursor-pointer"
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}

        <section
          id="top"
          className="bg-red-900 text-white py-20"
        >
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to GUTIERREZ & LEON
            </h1>
            <p className="text-lg">ARQUITECTURA, INGENIERIA Y CONSTRUCCION</p>
          </div>
        </section>

        <section
          id="services"
          className="container mx-auto py-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Display services dynamically */}
            {services.slice(0, numServices).map((service, index) => (
              <div
                key={index}
                className="bg-white shadow rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
          {/* Button to show more services */}
          {numServices < services.length && (
            <button
              onClick={() => setNumServices(numServices + 3)}
              className="block mx-auto mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Show More Services
            </button>
          )}
        </section>

        <section
          id="projects"
          className="bg-gray-200 py-20"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Our Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Display projects dynamically */}
              {projects.slice(0, numProjects).map((project, index) => (
                <div
                  key={index}
                  className="bg-white shadow rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              ))}
            </div>
            {/* Button to show more projects */}
            {numProjects < projects.length && (
              <button
                onClick={() => setNumProjects(numProjects + 3)}
                className="block mx-auto mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Show More Projects
              </button>
            )}
          </div>
        </section>

        <section
          id="contact"
          className="container mx-auto py-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-700">
                Parque Residencial MonteVerde - Piura
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                Contact Information
              </h3>
              <p className="text-gray-700">Phone: (123) 456-7890</p>
              <p className="text-gray-700">Email: info@example.com</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="flex flex-wrap justify-center gap-x-10">
            <span>&copy; 2024 GUTIERREZ & LEON.</span>{' '}
            <span>All rights reserved.</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
