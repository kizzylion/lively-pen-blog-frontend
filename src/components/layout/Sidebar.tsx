import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-full p-4 min-h-screen">
      <h3 className="text-2xl font-semibold mb-6">Admin Panel</h3>
      <ul className="space-y-4">
        <li>
          <Link to="/admin/dashboard" className="hover:text-gray-400">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/posts" className="hover:text-gray-400">
            Posts
          </Link>
        </li>
        <li>
          <Link to="/admin/settings" className="hover:text-gray-400">
            Settings
          </Link>
        </li>
        <li>
          <Link to="/admin/logout" className="hover:text-gray-400">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
