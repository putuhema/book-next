import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

export default function SearchBar() {
  return (
    <form className="w-full">
      <div className="w-full flex items-center border border-white bg-white overflow-hidden focus-within:border-white focus-within:ring-2 focus-within:ring-white">
        <div className="relative text-primary">
          <Select>
            <SelectTrigger className="w-[180px] bg-transparent border-0 focus:ring-0 focus:ring-offset-0 px-3 py-2 h-full">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Category</SelectItem>
              <SelectItem value="books">Books</SelectItem>
              <SelectItem value="magazine">Magazine</SelectItem>
              <SelectItem value="toys">Toys</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Input
          type="search"
          className="bg-white border-none text-primary pl-10 pr-4 w-full focus-visible:ring-0 focus-visible:outline-none flex-grow"
          placeholder="Search..."
        />
        <Button>
          <Search />
        </Button>
      </div>
    </form>
  );
}
