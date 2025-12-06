"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const router = useRouter();

  // +998 telefon validatsiyasi
  const isValidPhone = (phone) => {
    const phoneRegex = /^\+998\s?(90|91|93|94|95|97|98|99)\s?\d{3}\s?\d{2}\s?\d{2}$/;
    return phoneRegex.test(phone.trim());
  };

  // Email validatsiyasi
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Parol validatsiyasi
  const isValidPassword = (pass) => {
    return pass.length >= 8 && 
           /[A-Z]/.test(pass) && 
           /[0-9]/.test(pass) && 
           /[!@#$%^&*]/.test(pass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (name.trim().length < 3) {
      newErrors.name = "Ism kamida 3 ta harf bo‘lishi kerak";
    }

    const input = emailOrPhone.trim();
    if (!isValidEmail(input) && !isValidPhone(input)) {
      newErrors.emailOrPhone = "To‘g‘ri email yoki +998 telefon raqami kiriting";
    }

    if (!isValidPassword(password)) {
      newErrors.password = "Parol: 8+ belgi, 1 katta harf, 1 raqam, 1 belgi (!@#$%^&*)";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Hammasi to‘g‘ri — muvaffaqiyat!
    setErrors({});
    alert("Muvaffaqiyatli ro'yxatdan o'tdingiz!");
    console.log("Yangi user:", { name, emailOrPhone, password });
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Chap taraf — rasm */}
        <div className="hidden lg:flex justify-center">
          <img
            src="https://i.imgur.com/7rMoeoq.png"
            alt="Shopping"
            className="w-full max-w-lg rounded-3xl shadow-2xl"
          />
        </div>

        {/* O‘ng taraf — forma */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 lg:p-12 max-w-lg w-full mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Create an account</h1>
          <p className="text-gray-600 mb-10">Enter your details below</p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-6 py-4 text-lg border-b-2 border-gray-300 focus:border-red-500 outline-none transition"
              />
              {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
            </div>

            {/* Email or Phone */}
            <div>
              <input
                type="text"
                placeholder="Email or Phone Number"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="w-full px-6 py-4 text-lg border-b-2 border-gray-300 focus:border-red-500 outline-none transition"
              />
              {errors.emailOrPhone && <p className="text-red-500 text-sm mt-2">{errors.emailOrPhone}</p>}
              <p className="text-xs text-gray-500 mt-1">Masalan: +998 90 123 45 67</p>
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-4 text-lg border-b-2 border-gray-300 focus:border-red-500 outline-none transition"
              />
              {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-5 rounded-xl text-xl transition transform hover:scale-105 shadow-lg"
            >
              Create Account
            </button>
          </form>

          <button className="w-full mt-6 border border-gray-300 hover:bg-gray-50 py-4 rounded-xl flex items-center justify-center gap-3">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
            <span className="font-medium text-gray-700">Sign up with Google</span>
          </button>

          <p className="text-center mt-10 text-gray-600">
            Already have account?{" "}
            <a href="/login" className="text-red-500 font-semibold hover:underline">
              Log 
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}