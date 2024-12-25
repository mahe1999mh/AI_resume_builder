// import Header from "@/components/custom/Header";
// import { File, Edit, FileDown } from "lucide-react";
import { Hero } from "./Hero";
import { Features } from "./Features";
import { Testimonials } from "./Testimonials";
import { Pricing } from "./Pricing";
import { Navigate, useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

function Home() {
  const { isSignedIn, isLoaded } = useUser();
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/dashboard");
  };

        <Hero onGetStarted={handleGetStarted} />
        <Pricing />
        <Features />
        <Testimonials />
  if (isSignedIn && isLoaded) {
    return <Navigate to={"/dashboard"} />;
  }

  if (!isSignedIn && isLoaded) {
    return (
      <div>
        {/* <Header /> */}
        <div>
          {/* <img src={'/grid.svg'} className="absolute z-[-10] w-full" 
      width={1200} height={300} /> */}
          {/* <Header/> */}

          <Hero onGetStarted={handleGetStarted} />
          <Features />
          <Testimonials />
          <Pricing />
        </div>
      </div>
    );
  }
}

export default Home;
