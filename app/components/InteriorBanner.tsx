export const InteriorBanner = ({ title }: { title: string }) => {
  return (
    <section className="relative bg-black">
        <div className="relative container mx-auto flex justify-center items-center py-5 md:py-10">
            <h1 className="h1 text-center text-white before:text-white after:text-white">{ title }</h1>
        </div>
    </section>
  )
}
