import { cn } from "@/lib/utils";
import { HomeCardProps } from "@/types";
import Image from "next/image";
import React from "react";

const HomeCard = ({ className, src, title, description, handleClick }: HomeCardProps) => {
  return (
    <div
      onClick={handleClick}
      className={cn(
        "bg-orange-600/90 px-5 py-6 flex flex-col justify-between w-full xl:max-w-64 min-h-64 rounded-lg cursor-pointer text-gray-200",
        className
      )}
    >
      <div className="flex justify-center items-center glassmorphism rounded-md size-11">
        <Image src={src} height={23} width={23} alt="meeting" />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-blue-200 font-semibold text-lg">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
