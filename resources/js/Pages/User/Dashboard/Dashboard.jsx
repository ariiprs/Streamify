import Authenticated from "@/Layouts/Authenticated/Authenticated";
import Flickity from "react-flickity-component";
import { Head, usePage } from "@inertiajs/react";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";

export default function Dashboard({ featuredMovies, browseMovie }) {
    const user = usePage().props.auth.user;
    /* featuredMovies, movies, browseMovie props ini didapatkan dari data yang dilemparkan dari DashboardController */

    /* ini untuk mengatur scroll ke samping */
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };

    return (
        <Authenticated auth={user}>
            {/* CHILDREN AUTHENTICATED */}
            <Head>
                <title>Dashboard</title>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {/* Movie Thumbnail */}
                    {featuredMovies.map((featuredMovie) => (
                        <FeaturedMovie
                            key={featuredMovie.id}
                            slug={featuredMovie.slug}
                            name={featuredMovie.name}
                            category={featuredMovie.category}
                            thumbnail={featuredMovie.thumbnail}
                            rating={featuredMovie.rating}
                        />
                    ))}
                </Flickity>
            </div>

            {/* Browse Featured */}
            <div className="mt-[50px]">
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {browseMovie.map((itemBrowseMovie) => (
                        <MovieCard
                            key={itemBrowseMovie.id}
                            slug={itemBrowseMovie.slug}
                            name={itemBrowseMovie.name}
                            category={itemBrowseMovie.category}
                            thumbnail={itemBrowseMovie.thumbnail}
                        />
                    ))}
                </Flickity>
            </div>
            {/*END CHILDREN AUTHENTICATED */}
        </Authenticated>
    );
}
