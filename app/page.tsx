import FaqSection from "@/components/pages/home/faq-section";
import HeroSection from "@/components/pages/home/hero-section";
import MovieSection from "@/components/pages/home/movie-section";
import ProfileSection from "@/components/pages/home/profile-section";
import ShowSection from "@/components/pages/home/show-section";
import TvSection from "@/components/pages/home/tv-section";
import Divider from "@/components/shared/divider";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Divider />
      <TvSection />
      <Divider />
      <ShowSection />
      <Divider />
      <MovieSection />
      <Divider />
      <ProfileSection />
      <Divider />
      <FaqSection />
      <Divider />
    </>
  );
};

export default HomePage;
