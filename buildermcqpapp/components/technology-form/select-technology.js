"use client";
import React from "react";
import NavBarLinks from "../admin-nav-bar/admin-nav-bar";
import { useRouter } from "next/navigation";

function SelectTechnology({ data }) {
  const router = useRouter();
  const handleTechnology = (event) => {
    router.push(`/admin/technologies/${event.target.value}/questions`);
  };
  return (
    <div className="h-dvh">
      <NavBarLinks />
      <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow-lg bg-white">
        <h2 className="text-2xl font-bold mb-6">Choose Technology</h2>
        <div className="mb-4">
          <label
            htmlFor="examTime"
            className="block text-sm font-medium text-gray-600"
          >
            Technology
          </label>
          <select
            id="duration"
            name="duration"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            onChange={handleTechnology}
          >
            <option value="">Select Technology</option>
            {data.map((tech) => (
              <option key={tech} value={tech.id}>
                {tech.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default SelectTechnology;
