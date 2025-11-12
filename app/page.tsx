import { HeroBanner } from "./components/Homepage/HeroBanner";
import { HomeAbout } from "./components/Homepage/HomeAbout";
import { RecentProjects } from "./components/Homepage/RecentProjects";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <HomeAbout />
      <RecentProjects />
    </>
  );
}
