import Image from "next/image";
import Main from "./components/main";
import Footer from "./components/footer";
import Card from "@/components/common/card";
import Title from "@/components/common/title";
import SimpleSlider from "@/components/slider/simpleSlider";
import RecentWatchCard from "./components/recent-watch-card";

export default function Home() {


  return (
    <div className="bg-background">
      <Main/>
      <Title text="Recently watched"/>
      <SimpleSlider>
        <RecentWatchCard name="batman" seasonNumber={1} episodeNumber={2} percentage="42%"/>
      </SimpleSlider>
      <Title text="Best"/>
      <SimpleSlider>
        <Card name="test" genre="Action" rate={3.3}/>
        <Card name="test" genre="Action" rate={3.3}/>
        <Card name="test" genre="Action" rate={3.3}/>
      </SimpleSlider>

      <Footer/>
    </div>
  );
}
