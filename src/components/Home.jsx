import { locations } from '#constants'
import useLocationStore from '#store/Location'
import useWindowStore from '#store/window'
import { useGSAP } from '@gsap/react'
import clsx from 'clsx'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import React from 'react'

gsap.registerPlugin(useGSAP, Draggable);

const projects = locations.work?.children ?? []
const Home = () => {
    const { setActiveLocation } = useLocationStore()
    const { openWindows } = useWindowStore()

    const handleOpenProjectFinder = (project) => {
        setActiveLocation(project)
        openWindows('finder')
    }

    useGSAP(() => {
        Draggable.create(".folder")
    },[])
  return (
    <section id='home'>
        <ul>
            {projects.map((project) => ( 
                <li key={project.id} className={clsx('group folder', project.windowPosition)}>
                    <img src='/images/folder.png' alt={project.name} onClick={() => handleOpenProjectFinder(project)}/>
                    <p>{project.name}</p>
                </li> 
           ) )}
        </ul>
    </section>
  )
}

export default Home