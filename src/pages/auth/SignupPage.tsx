import { useState } from "react";

function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //AUthentication will be implemented Late
    console.log("Signup attempt:", { email, password });
  };
  return (
    <div>
      <h2 className="text-xl font-bold text-primary">User Signup</h2>
      <p>Signup form goes here</p>
    </div>
  );
}

export default SignupPage;
