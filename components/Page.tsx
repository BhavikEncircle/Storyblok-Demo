import { StoryblokServerComponent } from "@storyblok/react/rsc"
export const Page = ({ blok }: any) => {
    return <main>
        {blok.blocks.map((blok: any) => (
            <StoryblokServerComponent blok={blok} key={blok._uid} />
        ))}
    </main>
}