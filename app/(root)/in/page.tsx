import Banner from "@/components/pages/movies/banner";
import MovieRenderer from "@/components/pages/movies/components/movie-renderer";
import { useMultiFetch } from "@/hooks/use-multi-fetch";
import NotFound from "../details/not-found";

const MoviePage = async () => {
  const { data, error } = await useMultiFetch([
    "/movie/popular",
    "/trending/movie/day",
    "/movie/top_rated",
    "/movie/upcoming",
    "/movie/now_playing",
    "/trending/tv/day",
  ]);

  const popularMovies = data?.[0]?.results;
  const trendingMovies = data?.[1]?.results;
  const topRatedMovies = data?.[2]?.results;
  const upcomingMovies = data?.[3]?.results;
  const nowPlayingMovies = data?.[4]?.results;
  const popularTvSerials = data?.[5]?.results;

  const bannerData = upcomingMovies?.[Math.floor(Math.random() * 20)];

  const bannerVideoData = await useMultiFetch([
    `/movie/${bannerData?.id}/videos`,
  ]);

  if (error || bannerVideoData?.error) {
    return <NotFound />;
  }

  return (
    <>
      <Banner
        // @ts-ignore
        bannerVideoData={bannerVideoData?.data[0]?.results[0]}
        bannerData={bannerData}
      />

      <MovieRenderer label="Popular on Netflix" movies={popularMovies} />

      <MovieRenderer
        label="Popular Tv Shows."
        movies={popularTvSerials}
        className="my-12"
        redirectCategory="tv"
      />

      <MovieRenderer
        label="Trending Today"
        movies={trendingMovies}
        className="my-12"
      />

      <MovieRenderer
        label="Top-Rated Movies"
        movies={topRatedMovies}
        className="my-12"
      />

      <MovieRenderer
        label="Currently playing"
        movies={nowPlayingMovies}
        className="my-12"
      />
    </>
  );
};

export default MoviePage;
