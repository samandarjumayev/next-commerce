// src/app/signup/page.jsx   ← Faqat shu faylni almashtir yoki yarat!

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForSignup() {
  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailPhoneError, setEmailPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const router = useRouter();

  const validate = () => {
    let valid = true;

    if (name.trim().length < 3) {
      setNameError("Ism kamida 3 ta harf bo‘lishi kerak");
      valid = false;
    } else setNameError("");

    const phoneRegex = /^\+998\s?(90|91|93|94|95|97|98|99)\s?\d{3}\s?\d{2}\s?\d{2}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailOrPhone.trim()) && !phoneRegex.test(emailOrPhone.trim())) {
      setEmailPhoneError("To‘g‘ri email yoki +998 telefon raqami kiriting");
      valid = false;
    } else setEmailPhoneError("");

    if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[0-9]/.test(password) ||
      !/[!@#$%^&*]/.test(password)
    ) {
      setPasswordError("Parol: 8+ belgi, 1 katta harf, 1 raqam, 1 belgi");
      valid = false;
    } else setPasswordError("");

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Bu yerda login qilish logikasi bo‘lishi mumkin
      alert("Hisob muvaffaqiyatli yaratildi!");
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-sky-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Chap taraf — rasm (internetdan, doim ishlaydi) */}
        <div className="hidden lg:block">
          <img
            src="https://i.imgur.com/7rMoeoq.png"
            alt="Telefon va savat"
            className="w-full max-w-md mx-auto drop-shadow-2xl"
          />
        </div>

        {/* O‘ng taraf — forma */}
        <div className="flex flex-col items-start">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Create an account</h1>
          <p className="text-gray-600 mb-10">Enter your details below</p>

          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-8">
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-1 py-3 text-lg border-b-2 border-gray-300 focus:border-gray-900 outline-none bg-transparent transition"
              />
              {nameError && <p className="text-red-rose-500 text-sm mt-2">{nameError}</p>}
            </div>

            <div>
              <input
                type="text"
                placeholder="Email or Phone Number"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="w-full px-1 py-3 text-lg border-b-2 border-gray-300 focus:border-gray-900 outline-none bg-transparent transition"
              />
              {emailPhoneError && <p className="text-rose-500 text-sm mt-2">{emailPhoneError}</p>}
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-1 py-3 text-lg border-b-2 border-gray-300 focus:border-gray-900 outline-none bg-transparent transition"
              />
              {passwordError && <p className="text-rose-500 text-sm mt-2">{passwordError}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-rose-500 hover:bg-rose-600 text-white font-medium py-4 rounded-lg text-lg transition transform hover:scale-105 shadow-lg"
            >
              Create Account
            </button>
          </form>

          <button className="w-full max-w-md mt-4 border border-gray-300 hover:bg-gray-100 py-4 rounded-lg flex items-center justify-center gap-3 transition flex">
            <img src="https://www.google.com/favicon.ico" alt="G" className="w-5 h-5" />
            <span className="text-gray-700">Sign up with Google</span>
          </button>

          <p className="mt-8 text-gray-600 text-center w-full">
            Already have account?{" "}
            <a href="/login" className="text-gray-900 underline font-medium hover:text-rose-500">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}