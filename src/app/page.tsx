import Hero from "@/components/Hero";
import Sheba from "@/components/sheba";
import Products from "@/components/Peoducts";
import Slogan from "@/components/Slogan";
import Testimony from "@/components/Testimony";
import Video from "@/components/Video";
import Contact from "@/components/Contact";
import Qualities from "@/components/Qualities";

export default function Home() {
  return (
    <main>
      <Hero />
      <Sheba />
      <Products />
      <Slogan />
      <Qualities />
      <Video />
      <Testimony />
      <Contact />
    </main>
  );
}
