import landingImage from "../../public/landing.png";
import appDownloadImage from "../../public/appDownload.png";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col gap-12 ">
      <div className="md:px-32  rounded-lg  py-12 flex flex-col gap-5 text-center -mt-16 ">
        
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
        {/* <SearchBar
          placeHolder="Search by City or Town"
         
        /> */}
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Image
          src={landingImage}
          alt="Picture of the author"
        />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the MernEats App for faster ordering and personalised
            recommendations
          </span>
          <Image src={appDownloadImage} alt="Picture of the author" />
        </div>
      </div>
    </div>
  );
}
