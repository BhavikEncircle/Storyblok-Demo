import { storyblokEditable } from "@storyblok/react/rsc"
export const Testimonial = ({ blok }: any) => {
    return <div className="bg-white p-8 rounded-sm shadow" {...storyblokEditable(blok)}>
        <p className="text-xl leading-relaxed text-gray-700">{blok.comment}</p>
        <p className="mt-6 text-lg font-semibold">{blok.name}</p>
    </div>
}