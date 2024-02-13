"use client";
import { authentication } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";

export default function AdminLoginForm() {
  const [state, formAction] = useFormState(authentication, undefined);
  const router = useRouter();
  if (state) {
    router.push("/admin/dashboard");
  }
  return (
    <div className="bg-gray-800 bg-opacity-20 rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-bold text-gray-200 text-center">
        Admin Login
      </h2>
      <form className="space-y-4" action={formAction}>
        <div className="flex flex-col space-y-4">
          <label className="text-gray-200 font-bold">Username</label>
          <input
            type="email"
            className="border border-gray-300 p-2 rounded-md"
            placeholder="Enter your email"
            name="email"
            required
          />
          <label className="text-gray-200 font-bold">Password</label>
          <input
            type="password"
            name="password"
            className="border border-gray-300 p-2 rounded-md"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="bg-red-100 border border-red-400text-red-700 px-4 py-2 rounded-md">
          {state && <p className="text-sm">{state}</p>}
        </div>
        <LoginButton />
      </form>
    </div>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <div>
      <button
        type="submit"
        aria-disabled={pending}
        className="bg-blue-500 text-white py-2 px-4 flex items-center space-x-2 rounded-md"
      >
        Login
      </button>
    </div>
  );
}
