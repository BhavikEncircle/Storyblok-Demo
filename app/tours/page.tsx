import { RecommendedTour } from "@/components/RecommendedTour";
import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
const fetchToursPage = async () => {
    const client = getStoryblokApi();
    const response = await client.getStory(`tours`, {
        version: process.env.NODE_ENV === "development" ? "draft" : "published",
    });
    return response.data.story;
};
const fetchAllTours = async () => {
    const client = getStoryblokApi();
    const response = await client.getStories({
        content_type: "tour",
        version: process.env.NODE_ENV === "development" ? "draft" : "published",
    });
    return response.data.stories;
}
export default async function ToursPage() {
    const story = await fetchToursPage();
    const tours = await fetchAllTours();
    return (
        <div>
            <StoryblokStory story={story} />
            <div className="grid md:grid-cols-2 gap-8 mt-16 container mx-auto w-full px-4 py-16">
                {tours.map((tour) => (
                    <RecommendedTour story={tour} key={tour.content._uid} />
                ))}
            </div>
        </div>
    );
}