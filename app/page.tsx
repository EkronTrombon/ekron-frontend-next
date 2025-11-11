import { HeroBanner } from "./components/Homepage/HeroBanner";
import { HomeAbout } from "./components/Homepage/HomeAbout";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <HeroBanner />
      </div>
      <HomeAbout />
    </>
  );
}
