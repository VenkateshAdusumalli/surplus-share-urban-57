
import { Button } from "@/components/ui/button";
import { Utensils } from "lucide-react";

const NavBar = () => (
  <header className="w-full bg-white border-b border-border shadow-sm sticky top-0 z-20">
    <nav className="container mx-auto px-8 flex items-center justify-between h-20">
      <div className="flex items-center gap-2">
        <Utensils className="w-7 h-7 text-green-600" />
        <span className="font-extrabold text-xl tracking-tight text-primary">FoodShare</span>
      </div>
      <div className="flex items-center gap-8">
        <a href="/" className="font-semibold text-gray-700 hover:text-green-700 transition">Home</a>
        <a href="#donate" className="font-semibold text-gray-700 hover:text-green-700 transition">Donate Food</a>
        <a href="#request" className="font-semibold text-gray-700 hover:text-green-700 transition">Request Food</a>
        <a href="#about" className="font-semibold text-gray-700 hover:text-green-700 transition">About</a>
      </div>
      <div>
        <Button variant="outline" className="rounded-full border-green-600 text-green-700 hover:bg-green-50 font-semibold">
          Log In
        </Button>
      </div>
    </nav>
  </header>
);

export default NavBar;
