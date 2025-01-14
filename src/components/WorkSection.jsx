"use client"
import React from 'react'
import Image from 'next/image'
import ProjectCard from './ProjectCard'

const projectData = [
    {
        id: "1",
        title: "Sistem Informasi Manajemen Aset Negara (SIMAN)",
        desc: "desc app1",
        image: "/dyfzn/siman.jpg",
        tag: ["All", "Web"],
        giturl: "https://siman.kemenkeu.go.id",
    },
    {
        id: "2",
        title: "Management Sistem Information",
        desc: "desc app2",
        image: "/dyfzn/aset.jpg",
        tag: ["All", "Web"],
        giturl: "https://github.com/DeranDYF/simaset",
    },
    {
        id: "3",
        title: "Agent Service Operational System",
        desc: "desc app3",
        image: "/dyfzn/fms.jpg",
        tag: ["All", "Web"],
        giturl: "https://pola.inti.co.id",
    },
    {
        id: "4",
        title: "E-commerce Camera",
        desc: "desc app4",
        image: "/dyfzn/camera.jpg",
        tag: ["All", "Web"],
        giturl: "https://github.com/DeranDYF/camera",
    },
    {
        id: "99",
        title: "View More",
        desc: "desc app99",
        image: "/dyfzn/more.jpg",
        tag: ["All", "Web"],
        giturl: "https://github.com/DeranDYF",
    }

];
const WorkSection = () => {
    return (
        <div>
            <h1 className="text-white mb-14 text-2xl lg:text-4xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#D16BA5] via-[#86A8E7] to-[#5FFBF1] text-2xl lg:text-4xl">My Work & Project</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-4 lg:gap-8">
                {projectData.map((project) => (
                    <div key={project.id} className="">
                        <ProjectCard title={project.title} desc={project.desc} imgUrl={project.image} tag={project} gitUrl={project.giturl} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkSection