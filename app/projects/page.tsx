import Link from "next/link";
import Image from "next/image";

import { InteriorBanner } from "../components/InteriorBanner";
import { supabase } from "@/app/lib/supabase";

import HomeAboutImage from '@/app/assets/images/EKR_Home_About.png';

export default async function ProjectsPage() {
    const { data: projects, error } = await supabase.from('Projects').select('*').order('createdAt', { ascending: false });

    if (error || !projects) {
        // Handle the error appropriately in a real application
        console.error('Error fetching projects:', error);
        return <div>Error loading projects.</div>;
    }

    return (
        <>
            <InteriorBanner title="projects" />
            <div className="bg-quaternary py-16 md:py-24">
                <div className="container mx-auto">
                    <h2 className="h2 text-black text-center">My Projects</h2>
                    <div className="mt-10 max-w-[720px] mx-auto text-black text-center">Our system is meticulously designed to tackle occasional transaction failures caused by issues such as insufficient funds or temporary glitches.</div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
                        {projects.map((project) => (
                            <Link href={project.url} target="_blank" key={project.id} className="relative group">
                                <Image 
                                    src={project.thumbnail.replace(/\\/g, '/').split('/public')[1]} 
                                    alt={project.name} 
                                    width={580} 
                                    height={580} 
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col gap-5 items-center justify-center p-10 rounded-lg">
                                    <h3 className="h3 text-black text-center">{project.name}</h3>
                                    <div className="text-center text-black">{project.excerpt}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-black py-16 md:py-24">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-[120px]">
                    <div className="w-full md:w-1/2">
                        <h2 className="h2 text-white">About Me</h2>
                        <p className="mt-10 text-white text-xl">Building exceptional websites tailored to your vision for 10+ years. Blending creativity and functionality to deliver stunning digital experiences.</p>
                        <div className="mt-10">
                            <a className="button button-primary " href="/about/">More About Me</a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <Image className="w-full object-cover rounded-xl" src={HomeAboutImage} alt="About Image"/>
                    </div>
                </div>
            </div>
        </>
    );
}