"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="cursor-pointer text-gray-600 text-xl flex gap-1 items-center font-bold mb-4 hover:text-blue-600"
    >
      <FaArrowLeftLong />
      <span>Back</span>
    </button>
  );
}
