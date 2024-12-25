// import Header from "@/components/custom/Header";
// import { File, Edit, FileDown } from "lucide-react";
import { Hero } from "./Hero";
import { Features } from "./Features";
import { Testimonials } from "./Testimonials";
import { Pricing } from "./Pricing";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/dashboard");
  };
  return (
    <div>
      {/* <Header /> */}
      <div>
        {/* <img src={'/grid.svg'} className="absolute z-[-10] w-full" 
      width={1200} height={300} /> */}
        {/* <Header/> */}

        <Hero onGetStarted={handleGetStarted} />
        <Pricing />
        <Features />
        <Testimonials />
      </div>
    </div>
  );
}

export default Home;
