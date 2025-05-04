import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const PageContainer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 p-4 max-w-4xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PageContainer;
