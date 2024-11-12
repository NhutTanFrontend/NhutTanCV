import Header from "./component/Header/page";
import Banner from "./component/Home/Banner";
import Infomation from "./component/Home/Infomation";
import ServiceProvide from "./component/Home/ServiceProvide";
import Skills from "./component/Home/Skills";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Banner />
      <Infomation />
      <Skills />
      <ServiceProvide />
    </div>
  );
}
