import { useState } from "react";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //AUthentication will be implemented Late
    console.log("Login attempt:", { email, password });
  };
  return (
    <div>
      <h2 className="text-xl font-bold text-primary">User Login</h2>
      <p>Login form goes here</p>
    </div>
  );
}
export default LoginPage;
