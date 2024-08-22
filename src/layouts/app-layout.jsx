import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div >
    
      <main className="min-h-screen bg-gray-100 container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center text-white text-lg font-bold bg-slate-500 mt-1">
      &copy; {new Date().getFullYear()} JobFinder || All Rights Reserved.
      </div>
    </div>
  );
};

export default AppLayout;