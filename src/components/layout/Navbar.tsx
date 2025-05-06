import { Link } from "react-router-dom";
import { Button } from "../ui/ButtonCVA";
import { useIsMobile } from "../../hooks/use-mobile";

const Navbar = () => {
  return (
    <nav className="bg-primary sticky top-0 border-b border-secondary">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 text-white">
        <div className="text-xl font-bold text-primary">
          <Link to="/">MyBlog </Link>
        </div>
        {!useIsMobile() ? (
          <div className={`space-x-4`}>
            <Link to="/" className="hover:text-gray-300">
              <Button intent={"tertiary"}>Home</Button>
            </Link>
            <Link to="/" className="hover:text-gray-300">
              <Button intent={"tertiary"}>Tag</Button>
            </Link>
            <Link to="/" className="hover:text-gray-300">
              <Button intent={"tertiary"}>About</Button>
            </Link>
          </div>
        ) : (
          ""
        )}
        <div className="space-x-4">
          <Link to="/signup" className="hover:text-gray-300">
            <Button intent={"secondary"} size={"sm"}>
              Sign up
            </Button>
          </Link>
          <Link to="/login">
            <Button size={"sm"}>Login </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
