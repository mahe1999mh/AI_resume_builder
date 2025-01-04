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

  if (isSignedIn && isLoaded) {
    return <Navigate to={"/dashboard"} />;
  }

  if (!isSignedIn && isLoaded) {
    return (
      <div>
        {/* <Header /> */}
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_j6zKHu8BEYzvw9sK3O5kVj2jE5xA0NNdYw&s"
            alt="Professional workspace"
            style={{
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              position: "fixed",
              bottom: "10px",
              right: "10px",
              zIndex: 100,
            }}
          />
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
}

export default Home;
