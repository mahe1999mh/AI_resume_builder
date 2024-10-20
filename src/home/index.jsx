import Header from "@/components/custom/Header";
import { File, Edit, FileDown } from "lucide-react";

function Home() {
  return (
    <div>
      <Header />
      <div>
        {/* <img src={'/grid.svg'} className="absolute z-[-10] w-full" 
      width={1200} height={300} /> */}
        {/* <Header/> */}

        <section className="section">
          <div className="left-column">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Enhance Your <span className="text-primary">Resume</span>
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Easily Create a Winning Resume with Our AI-Driven Builder
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="/dashboard"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get Started
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              {/* <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <svg
                  className="mr-2 -ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                Watch video
              </a> */}
            </div>
          </div>
        </section>

        <section className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h2 className="font-bold text-3xl">How it Works?</h2>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="card-containers">
              <File className="h-8 w-8" />

              <h2 className="mt-4 text-xl font-bold text-black">
                Clear Clarity PFD
              </h2>

              <p
                className="mt-1 text-sm text-gray-600 text-justify"
                style={{ lineHeight: "1.5" }}
              >
                A versatile, high-precision PDF with a clear, structured layout
                for easy readability. Ideal for presentations, reports, and
                professional submissions, it simplifies complex information into
                a visually accessible format. It maintains consistent quality
                across both digital and print platforms.
              </p>
            </div>
            <div className="card-containers">
              <Edit className="h-8 w-8" />

              <h2 className="mt-4 text-xl font-bold text-black">
                Edit Your form{" "}
              </h2>

              <p
                className="mt-1 text-sm text-gray-600 text-justify"
                style={{ lineHeight: "1.5" }}
              >
                An intuitive form editing tool for easy updates and
                modifications. It offers a user-friendly interface for efficient
                customization and real-time adjustments, with validation checks
                to enhance accuracy and reduce errors. Ideal for environments
                with frequent form updates, it supports various input types
                while ensuring data integrity.
              </p>
            </div>

            <div className="card-containers">
              <FileDown className="h-8 w-8" />

              <h2 className="mt-4 text-xl font-bold text-black">
                Download You Resume
              </h2>

              <p
                className="mt-1 text-sm text-gray-600 text-justify"
                style={{ lineHeight: "1.5" }}
              >
                A convenient feature allowing users to instantly download a
                professionally formatted resume in various formats like PDF or
                Word. It ensures easy access and sharing of up-to-date resumes,
                offering a high-quality, printer-friendly version with
                consistent layout across platforms.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/dashboard"
              className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
