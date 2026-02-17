import Image from "next/image";
import Link from "next/link";

export const RecommendedTour = ({ story }: any) => {
    return <div className="bg-white rounded-sm shadow">
        <Image src={story.content.main_image.filename} alt={story.content.name} width={500} height={500} className="aspect-video object-cover w-full" />
        <div className="p-6">
            <div className="flex gap-4 justify-between text-lg font-bold">
                <h3>{story.content.name}</h3>
                <p>{Number(story.content.price).toLocaleString("en-US", {
                    style: "currency",
                    currency: "TWD",
                    minimumFractionDigits: 0,
                })}</p>
            </div>
            <p className="uppercase font-bold mt-2 text-sm tracking-wide text-gray-700">{story.content.location}</p>
            <Link className="font-bold text-base mt-8 block underline" href={`/${story.full_slug}`}>View Tour</Link>
        </div>
    </div>
}