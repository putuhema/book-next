import { Heart, LogIn, ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavAction() {
  return (
    <div className="flex gap-2 items-center">
      <Button className="shadow-none" size="icon">
        <Heart />
      </Button>
      <Button className="shadow-none" size="icon">
        <ShoppingCart />
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="shadow-none" size="icon">
            <User />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <LogIn />
            Login
          </DropdownMenuItem>
          <DropdownMenuItem>Register</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
