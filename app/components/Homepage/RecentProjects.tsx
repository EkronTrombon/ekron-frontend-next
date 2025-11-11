import Link from "next/link";

export const RecentProjects = () => {
  return (
    <div className="bg-site-black py-16 md:py-24">
        <div className="container">
            <h2 className="h2 text-white text-center">My Recent Projects</h2>
            <div className="mt-10 max-w-[720px] mx-auto text-white text-center">Our system is meticulously designed to tackle occasional transaction failures caused by issues such as insufficient funds or temporary glitches.</div>
            {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
                <?php foreach ($projects as $project) : ?>
                    <a href="<?= the_permalink($project->ID); ?>" className="relative">
                        <?= get_the_post_thumbnail($project->ID, 'full', ['class' => 'w-full h-full object-cover rounded-lg']); ?>
                        <div className="absolute inset-0 m-32 bg-white opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 flex flex-col gap-5 items-center justify-center p-10 rounded-lg">
                            <h3 className="h3 text-site-black text-center"><?= get_the_title($project->ID); ?></h3>
                            <div className="text-center text-site-black"><?= get_the_excerpt($project->ID); ?></div>
                        </div>
                    </a>
                <?php endforeach; ?>
            </div> */}
            <div className="mt-16 md:mt-24 flex flex-col items-center justify-center gap-5">
                <h3 className="h3 text-center text-white">Continue exploring my projects</h3>
                <Link className="button button-hollow-white" href="/">View My Portfolio</Link>
            </div>
        </div>
    </div>
  )
}
