import FeaturedProducts from "@/components/landing-page/featured-products";
import HeroSection from "@/components/landing-page/hero-section";
import RecentlyLaucnchedProducts from "@/components/landing-page/recently-launched-products";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <RecentlyLaucnchedProducts />
    </div>
  );
}
