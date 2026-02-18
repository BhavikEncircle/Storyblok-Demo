import { StoryblokServerComponent, storyblokEditable } from "@storyblok/react/rsc"
export const Page = ({ blok }: any) => {
    return <main {...storyblokEditable(blok)}>
        {blok.blocks.map((blok: any) => (
            <StoryblokServerComponent blok={blok} key={blok._uid} />
        ))}
    </main>
}