import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./Footer";

function Page() {
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = (currentPage) => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      case "Contact":
        return <Contact />;
    }
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          // Render the component returned by 'renderPage(currentPage)'
          renderPage(currentPage)
        }
      </div>
      <Footer />
    </div>
  );
}

export default Page;
