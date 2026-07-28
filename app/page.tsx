import Image from "next/image";
import Footer from "./components/footer";
import Card from "@/components/common/card";
import Title from "@/components/common/title";
import SimpleSlider from "@/components/slider/simpleSlider";
import RecentWatchCard from "./components/recent-watch-card";
import Header from "./components/header";
import Slider from "./components/slider";

export default function Home() {
  return (
    <div className="bg-background">
      <div className="w-full aspect-16/7 relative">
        <Header />
        <Slider />
      </div>
      <main>
        <Title>Recently watched</Title>
        <SimpleSlider>
          <RecentWatchCard
            name="batman"
            seasonNumber={1}
            episodeNumber={2}
            percentage="42%"
          />
          <RecentWatchCard
            name="batman"
            seasonNumber={1}
            episodeNumber={2}
            percentage="42%"
          />
          <RecentWatchCard
            name="batman"
            seasonNumber={1}
            episodeNumber={2}
            percentage="42%"
          />
         
        </SimpleSlider>
        <Title>Best</Title>
        <SimpleSlider>
          <Card name="test" genre="Action" rate={3.3} />
          <Card name="test" genre="Action" rate={3.3} />
          <Card name="test" genre="Action" rate={3.3} />
          <Card name="test" genre="Action" rate={3.3} />
          <Card name="test" genre="Action" rate={3.3} />
          <Card name="test" genre="Action" rate={3.3} />
        </SimpleSlider>
      </main>

      <Footer />
    </div>
  );
}
