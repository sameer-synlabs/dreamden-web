import React from "react";
import { Badge } from "./ui/badge";
import { Skeleton } from "./ui/skeleton";

interface RoomCardProps {
  label: string;
  imageUrl: string;
  loading?: boolean;
}

const RoomCard: React.FC<RoomCardProps> = ({
  label,
  imageUrl,
  loading = false,
}) => {
  return (
    <div className="relative border border-white border-opacity-50 rounded-md min-h-[20rem] md:min-h-[21rem] xl:min-h-[26rem] overflow-hidden">
      {loading ? (
        <Skeleton variant="image" className="absolute inset-0 w-full h-full" />
      ) : (
        <>
          <img
            src={imageUrl}
            alt={label}
            className="absolute inset-0 object-cover w-full h-full"
          />

          <Badge variant="main" className="absolute top-3 left-3">
            {label}
          </Badge>
        </>
      )}
    </div>
  );
};

export default RoomCard;
