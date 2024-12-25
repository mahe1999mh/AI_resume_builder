import React from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "./../components/ui/tabs";
import { ResumePackages } from "./Pricing/ResumePackages";
import { LinkedInPackages } from "./Pricing/LinkedInPackages";
import { WebsitePackages } from "./Pricing/WebsitePackages";
import { All } from "./Pricing/All";

export function Pricing() {
  return (
    <div className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Select the perfect solution for your career growth
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          {/* Tabs List: Centered */}
          <div className="flex justify-center mb-8 sm:mb-12 overflow-x-auto pb-4 sm:pb-0">
            <TabsList className="inline-flex p-1 bg-gray-100 rounded-lg gap-1">
              <TabsTrigger
                value="All"
                className="px-3 sm:px-6 py-2 text-sm font-medium rounded-md whitespace-nowrap"
              >
                ALL
              </TabsTrigger>
              <TabsTrigger
                value="indian"
                className="px-3 sm:px-6 py-2 text-sm font-medium rounded-md whitespace-nowrap"
              >
                Resumes
              </TabsTrigger>
              <TabsTrigger
                value="linkedin"
                className="px-3 sm:px-6 py-2 text-sm font-medium rounded-md whitespace-nowrap"
              >
                LinkedIn
              </TabsTrigger>
              <TabsTrigger
                value="website"
                className="px-3 sm:px-6 py-2 text-sm font-medium rounded-md whitespace-nowrap"
              >
                Website
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tabs Content: Centered */}
          <div className="max-w-1xl mx-auto">
            <div className="flex flex-col items-center justify-center">
              <TabsContent value="All">
                <All region="All" />
              </TabsContent>
              <TabsContent value="indian">
                <ResumePackages />
              </TabsContent>

              <TabsContent value="linkedin">
                <LinkedInPackages />
              </TabsContent>

              <TabsContent value="website">
                <WebsitePackages />
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
