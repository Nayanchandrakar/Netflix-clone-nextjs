import { useMultiFetch } from "@/hooks/use-multi-fetch";

import AlertModal from "@/components/pages/details/alert-modal";
import MovieDetails from "@/components/pages/details/moive-details";
import MoreMovies from "@/components/pages/details/more-movies";
import MovieDetailsbanner from "@/components/shared/movie-details-banner";
import NotFound from "@/app/(root)/details/not-found";
import VideoSection from "@/components/pages/details/video-section";

const MovieDetailsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  let movieData;
  let creditsData;
  let moreMovies;
  let videoData;
  let hasErrors;

  const { category, id } = searchParams;

  if (id && category) {
    const { data, error } = await useMultiFetch([
      `/${category}/${id}`,
      `/${category}/${id}/credits`,
      `/${category}/${id}/similar`,
      `/${category}/${id}/videos`,
    ]);
    movieData = data?.[0];
    creditsData = data?.[1];
    moreMovies = data?.[2]?.results;
    videoData = data?.[3]?.results;
    hasErrors = error;
  }

  if (hasErrors) {
    return <NotFound />;
  }

  return (
    <section className="">
      <MovieDetailsbanner bannerData={movieData} />
      <AlertModal />
      <VideoSection videoData={videoData} />
      <MovieDetails movieData={movieData} creditsData={creditsData} />
      <MoreMovies moreMovies={moreMovies} searchParams={searchParams} />
    </section>
  );
};

export default MovieDetailsPage;
