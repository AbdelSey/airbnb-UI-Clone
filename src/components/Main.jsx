import React from "react";
import FormSection from "./Sections/FormSection";
import HostingSection from "./Sections/HostingSection";
import JustBookedSection from "./Sections/JustBookedSection";
import ReviewSection from "./Sections/ReviewSection";
import SupportSection from "./Sections/SupportSection";
import AddDatesSection from "./Sections/AddDatesSection";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <FormSection />
        <HostingSection />
        <ReviewSection />
        <SupportSection />
        <JustBookedSection />
        <AddDatesSection />
        <Footer />
      </main>
    </>
  );
};

export default Main;
