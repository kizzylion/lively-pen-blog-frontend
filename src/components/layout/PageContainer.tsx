import { Toaster } from "../ui/toaster";
import { TooltipProvider } from "../ui/tooltip";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Toaster as Sonner } from "../ui/sonner";
const PageContainer = () => {
  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 p-4 w-full mx-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default PageContainer;
