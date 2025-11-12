import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/app/lib/supabase";

export const RecentProjects = async () => {
  // Fetch projects using the Supabase client
  const { data: projects, error } = await supabase
    .from('Projects') // Note: This refers to the table name, which is case-sensitive.
    .select('*')
    .order('createdAt', { ascending: false })
    .limit(2);

    console.log(projects);

    if (error || !projects) {
        // Handle the error appropriately in a real application
        console.error('Error fetching projects:', error);
        return <div>Error loading projects.</div>;
    }
    return (
        <div className="bg-site-black py-16 md:py-24">
            <div className="container mx-auto">
                <h2 className="h2 text-white text-center">My Recent Projects</h2>
                <div className="mt-10 max-w-[720px] mx-auto text-white text-center">Our system is meticulously designed to tackle occasional transaction failures caused by issues such as insufficient funds or temporary glitches.</div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
                    {projects.map((project) => (
                        <Link href={`/projects/${project.id}`} key={project.id} className="relative group">
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
                <div className="mt-16 md:mt-24 flex flex-col items-center justify-center gap-5">
                    <h3 className="h3 text-center text-white">Continue exploring my projects</h3>
                    <Link className="button button-hollow-white" href="/projects">View My Portfolio</Link>
                </div>
            </div>
        </div>
    )
}
