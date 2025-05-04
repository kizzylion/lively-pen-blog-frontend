import { Link } from "react-router-dom";
import { Button } from "../components/ui/ButtonCVA";

const AdminLogin = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-primary">Admin Login</h2>
      <p className="text-tertiary mb-3">Login form goes here.</p>
      <Link to="/admin/dashboard">
        <Button size={"sm"}>Admin Dashboard</Button>
      </Link>
    </div>
  );
};

export default AdminLogin;
