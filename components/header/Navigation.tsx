import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import Link from "next/link";
import { Languages } from "lucide-react";

interface NavigationProps {}

const Navigation: FC<NavigationProps> = ({}) => {
  const languages: string[] = ["English", "Hindi"];
  return (
    <div className="w-fit h-full flex items-center flex-row gap-5">
      <Select defaultValue={languages?.[0]}>
        <SelectTrigger className="h-8 px-4 bg-transparent text-white">
          <Languages className="w-4 h-4 mr-2" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent defaultValue={languages?.[0]}>
          {languages?.map((value: string, index) => (
            <SelectItem key={index} value={value}>
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button asChild className="bg-red-600 hover:bg-red-600/80 h-9">
        <Link href="/sign-in">Sign In</Link>
      </Button>
    </div>
  );
};

export default Navigation;
