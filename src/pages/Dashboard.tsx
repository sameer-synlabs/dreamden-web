import RoomCard from "@/components/RoomCard";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h4 className="text-xl">Unleash Imagination</h4>

        <Button variant="mainGradient" size="sm">
          Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3 h-fit">
        <RoomCard label="Bedroom" imageUrl="" loading={true} />
        <RoomCard label="Bedroom" imageUrl="" loading={true} />
        <RoomCard label="Bedroom" imageUrl="" loading={true} />
      </div>
    </div>
  );
};

export default Dashboard;
