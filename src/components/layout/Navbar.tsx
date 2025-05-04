import { Link } from "react-router-dom";
import { Button } from "../ui/ButtonCVA";

const Navbar = () => {
  return (
    <nav className="bg-secondary sticky top-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 text-white">
        <div className="text-xl font-bold text-primary">
          <Link to="/">MyBlog </Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">
            <Button intent={"linkGray"}>Home</Button>
          </Link>
          <Link to="/admin/login">
            <Button size={"sm"}>Admin </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
