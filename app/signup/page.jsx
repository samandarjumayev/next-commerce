"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailPhoneError, setEmailPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const router = useRouter();

  const validate = () => {
    let valid = true;

    // Name
    if (name.trim().length < 3) {
      setNameError("Name must be at least 3 characters");
      valid = false;
    } else {
      setNameError("");
    }

    // Email or Phone
    const phoneRegex = /^\+998\s?(90|91|93|94|95|97|98|99)\s?\d{3}\s?\d{2}\s?\d{2}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailOrPhone) && !phoneRegex.test(emailOrPhone)) {
      setEmailPhoneError("Enter valid email or phone (+998 format)");
      valid = false;
    } else {
      setEmailPhoneError("");
    }

    // Password
    if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[0-9]/.test(password) ||
      !/[!@#$%^&*]/.test(password)
    ) {
      setPasswordError("Password: 8+ chars, 1 uppercase, 1 number, 1 special");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Account created successfully!");
      console.log("User:", { name, emailOrPhone, password });
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-sky-100 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Chap taraf — rasm */}
        <div className="hidden lg:block">
          <img
            src="https://i.imgur.com/7rMoeoq.png"
            alt="Shopping cart and phone"
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* O‘ng taraf — forma */}
        <div className="flex flex-col items-start">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Create an account</h1>
          <p className="text-gray-600 mb-10">Enter your details below</p>

          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-8">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-1 py-3 text-lg border-b-2 border-gray-300 focus:border-gray-900 outline-none transition-colors bg-transparent"
              />
              {nameError && <p className="text-red-500 text-sm mt-2">{nameError}</p>}
            </div>

            {/* Email or Phone */}
            <div>
              <input
                type="text"
                placeholder="Email or Phone Number"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="w-full px-1 py-3 text-lg border-b-2 border-gray-300 focus:border-gray-900 outline-none transition-colors bg-transparent"
              />
              {emailPhoneError && <p className="text-red-500 text-sm mt-2">{emailPhoneError}</p>}
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-1 py-3 text-lg border-b-2 border-gray-300 focus:border-gray-900 outline-none transition-colors bg-transparent"
              />
              {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}
            </div>

            {/* Create Account tugmasi */}
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-4 rounded-lg transition"
            >
              Create Account
            </button>
          </form>

          {/* Google tugmasi */}
          <button className="w-full max-w-md mt-4 border border-gray-300 py-4 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
            <span className="text-gray-700">Sign up with Google</span>
          </button>

          {/* Log in link */}
          <p className="mt-8 text-gray-600 text-center w-full max-w-md">
            Already have account?{" "}
            <a href="/login" className="text-gray-900 underline font-medium">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}