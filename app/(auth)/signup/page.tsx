/** @format */
"use client";

import { Eye, EyeOff, Router } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSignupMutation } from "@/redux/features/auth/authApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type SignupFormData = {
  name: string;
  email: string;
  password: string;
};

export default function SignupPage() {
  const {
    register,
    handleSubmit,
     reset,
    formState: { errors },
  } = useForm<SignupFormData>();

  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const router = useRouter();

  //  RTK Query hook
  const [signup, { isLoading }] = useSignupMutation();

  const onSubmit = async (data: SignupFormData) => {
    setApiError(null);

    try {
      await signup(data).unwrap();

      toast.success("Registration successful!");
      router.push("/login")
      reset();
    } catch (err: unknown) {
      let message = "Registration failed";

      if (typeof err === "object" && err !== null && "status" in err) {
        const fetchError = err as FetchBaseQueryError;

        const status = fetchError.status;

        if (
          fetchError.data &&
          typeof fetchError.data === "object" &&
          "message" in fetchError.data
        ) {
          const backendMessage = (fetchError.data as { message?: string }).message;
          message = backendMessage ?? message;
        }

       
        if (status === 400 || status === 409) {
          setApiError(message);

          
          return;
        }
      }

      setApiError(message);
    }
  };

  return (
    <div className='min-h-screen w-full relative overflow-hidden flex items-center justify-center px-4 mb-10'>
      {/* Background */}
      <div className='absolute inset-0 bg-gradient-to-b from-blue-500 via-indigo-400 to-blue-200' />

      {/* Overlay circles */}
      <div className='absolute inset-0 opacity-20'>
        <div className='w-[1200px] h-[1200px] border border-white/30 rounded-full absolute -top-[650px] left-1/2 -translate-x-1/2' />
        <div className='w-[900px] h-[900px] border border-white/20 rounded-full absolute -top-[500px] left-1/2 -translate-x-1/2' />
        <div className='w-[700px] h-[700px] border border-white/15 rounded-full absolute -top-[400px] left-1/2 -translate-x-1/2' />
      </div>

      {/* Bottom wave */}
      <div className='absolute bottom-0 left-0 w-full'>
        <svg
          viewBox='0 0 1440 320'
          className='w-full h-[220px]'
          preserveAspectRatio='none'>
          <path
            fill='white'
            fillOpacity='0.55'
            d='M0,288L60,266.7C120,245,240,203,360,181.3C480,160,600,160,720,176C840,192,960,224,1080,224C1200,224,1320,192,1380,176L1440,160L1440,320L0,320Z'
          />
        </svg>
      </div>

      {/* Card */}
      <div className='relative w-full max-w-md bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-6'>
        <h1 className='text-2xl font-bold text-gray-900'>Create Account</h1>
        <p className='text-sm text-gray-600 mt-1'>
          Sign up with your details below
        </p>

        {/* API Error */}
        {apiError && (
          <div className='mt-4 rounded-lg bg-red-100 text-red-700 px-4 py-2 text-sm'>
            {apiError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className='mt-6 space-y-4'>
          {/* Name */}
          <div>
            <label className='text-sm font-medium text-gray-700'>Name</label>
            <input
              type='text'
              placeholder='Enter your name'
              className='mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className='text-sm font-medium text-gray-700'>Email</label>
            <input
              type='email'
              placeholder='Enter your email'
              className='mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className='text-sm font-medium text-gray-700'>
              Password
            </label>

            <div className='relative mt-1'>
              <input
                type={showPassword ? "text" : "password"}
                placeholder='Enter your password'
                className='w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                })}
              />

              <button
                type='button'
                onClick={() => setShowPassword((prev) => !prev)}
                className='absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700'
                aria-label={showPassword ? "Hide password" : "Show password"}>
                {showPassword ?
                  <EyeOff size={20} />
                : <Eye size={20} />}
              </button>
            </div>

            {errors.password && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type='submit'
            disabled={isLoading}
            className='w-full rounded-xl bg-blue-600 text-white py-3 font-semibold hover:bg-blue-700 transition disabled:opacity-60'>
            {isLoading ? "Creating..." : "Sign Up"}
          </button>

          <p className='text-center text-sm text-gray-600'>
            Already have an account?{" "}
            <Link href='/login'>
              <span className='text-blue-600 font-semibold cursor-pointer hover:underline'>
                Sign in
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
