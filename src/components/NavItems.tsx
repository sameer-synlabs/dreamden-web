import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const NavItems = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        to="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Home
      </Link>
      <Link
        to="/"
        className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
      >
        Rooms
      </Link>
    </nav>
  );
};

export default NavItems;
