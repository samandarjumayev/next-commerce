
// Davlat

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

// O‘zbek telefon raqami validatsiyasi
const phoneRegex = /^\+998\s?(90|91|93|94|95|97|98|99)\s?\d{3}\s?\d{2}\s?\d{2}$/;

const schema = z.object({
  name: z.string().min(3, "Ism kamida 3 ta harfdan iborat bo‘lishi kerak"),
  emailOrPhone: z.string().min(1, "Email yoki telefon kiriting"),
  password: z
    .string()
    .min(8, "Parol kamida 8 ta belgidan iborat bo‘lishi kerak")
    .regex(/[A-Z]/, "Kamida 1 ta katta harf")
    .regex(/[0-9]/, "Kamida 1 ta raqam")
    .regex(/[!@#$%^&*]/, "Kamida 1 ta maxsus belgi (!@#$%^&*)"),
}).refine((data) => {
  // Email yoki telefon formatini tekshirish
  const isEmail = z.string().email().safeParse(data.emailOrPhone).success;
  const isPhone = phoneRegex.test(data.emailOrPhone);
  return isEmail || isPhone;
}, {
  message: "To‘g‘ri email yoki +998 formatidagi telefon raqam kiriting",
  path: ["emailOrPhone"],
});

export default function Signup() {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    const newUser = {
      username: data.name,
      email: data.emailOrPhone.includes("@") ? data.emailOrPhone : null,
      phone: data.emailOrPhone.includes("+998") ? data.emailOrPhone : null,
      role: data.emailOrPhone === "admin@site.com" ? "admin" : "user",
    };

    login(newUser);
    alert("Muvaffaqiyatli ro‘yxatdan o‘tdingiz!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Rasm qismi */}
        <div className="hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=800&q=80"
            alt="Shopping"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
        </div>

        {/* Form qismi */}
        <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-lg mx-auto w-full">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Create an account</h1>
          <p className="text-gray-600 mb-8">Enter your details below</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <input
                {...register("name")}
                type="text"
                placeholder="Name"
                className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            {/* Email or Phone */}
            <div>
              <input
                {...register("emailOrPhone")}
                type="text"
                placeholder="Email or Phone Number"
                className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
              />
              {errors.emailOrPhone && (
                <p className="text-red-500 text-sm mt-1">{errors.emailOrPhone.message}</p>
              )}
              <p className="text-xs text-gray-500 mt-2">Masalan: +998 90 123 45 67 yoki test@mail.ru</p>
            </div>

            {/* Password */}
            <div>
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 rounded-xl text-lg transition duration-200 shadow-lg"
            >
              Create Account
            </button>
          </form>

          {/* Google Button */}
          <button className="w-full mt-4 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-4 rounded-xl flex items-center justify-center gap-3 transition">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
            Sign up with Google
          </button>

          {/* Login Link */}
          <p className="text-center mt-8 text-gray-600">
            Already have account?{" "}
            <a href="/login" className="text-red-500 font-medium hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}