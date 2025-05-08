import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./AdminFooter";
import { TooltipProvider } from "../ui/tooltip";
import { Toaster } from "../ui/toaster";
import { Toaster as Sonner } from "../ui/sonner";
const AdminLayout = () => {
  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <div className="flex-1 p-4 max-w-4xl mx-auto">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </TooltipProvider>
  );
};

export default AdminLayout;
