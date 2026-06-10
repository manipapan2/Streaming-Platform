import Image from "next/image";
import Main from "./components/main";
import Footer from "./components/footer";
import Card from "@/components/common/card";
import Title from "@/components/common/title";
import SimpleSlider from "@/components/slider/simpleSlider";

export default function Home() {


  return (
    <div className="bg-background">
      <Main/>
      <Title text="Best"/>
      {/* <SimpleSlider>
        <Card name="test" genre="Action" rate={3.3}/>
      </SimpleSlider> */}


    <div className="w-full h-1000"></div>

      <Footer/>
    </div>
  );
}
