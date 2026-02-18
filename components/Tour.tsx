import Image from "next/image"
import { renderRichText, storyblokEditable } from "@storyblok/react/rsc"
export const Tour = ({ blok }: any) => {
    return (
        <main className="container mx-auto px-4 w-full pt-32 pb-16" {...storyblokEditable(blok)}>
            <h1 className="text-3xl md:text-5xl font-bold">{blok.name}</h1>
            <Image src={blok.main_image.filename} alt={blok.name} width={500} height={500} className="mt-12 aspect-video object-cover w-full" />
            <p className="mt-12 text-lg md:text-2xl md:leading-relaxed">{blok.introduction}</p>
            <div
                className="prose md:prose-lg mt-16 max-w-none"
                dangerouslySetInnerHTML={{
                    __html: renderRichText(blok.body) || "",
                }}>
            </div>
        </main>
    )
}