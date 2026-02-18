import { StoryblokServerComponent, storyblokEditable } from "@storyblok/react/rsc"
export const Grid = ({ blok }: any) => {
    return <section className="bg-blue-100 py-16" {...storyblokEditable(blok)}>
        <div className="container mx-auto w-full px-4">
            <h2 className="text-3xl md:text-4xl font-bold">{blok.headline}</h2>
            <div className="grid md:grid-flow-col auto-cols-fr mt-12 gap-8">
                {blok.items.map((blok: any) => (
                    <StoryblokServerComponent blok={blok} key={blok._uid} />
                ))}
            </div>
        </div>
    </section>
}
