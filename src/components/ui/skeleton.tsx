import { cn } from "@/lib/utils";
import React from "react";
import { FaImage } from "react-icons/fa6";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "image";
}

function Skeleton({ className, variant = "default", ...props }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-button-gradient", className)}
      {...props}
    >
      {variant === "image" && (
        <div className="flex items-center justify-center w-full h-full">
          <FaImage size={40} className="text-white opacity-55" />
        </div>
      )}
    </div>
  );
}

export { Skeleton };
