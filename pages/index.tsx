import RootLayout from "@/components/layouts/RootLayout";
import InstagramFeed from "@/components/Instagram";
import Banner from "@/components/Banner";

export default function Intro(){
  return(
    <RootLayout>
      <Banner>
        <h1 className="text-center text-3xl text-white font-bold md:text-6xl">Kuchařík</h1>
      </Banner>

      <InstagramFeed/>
    </RootLayout>
  );
}