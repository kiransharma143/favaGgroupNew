import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Approach", id: "approach" },
   // { name: "Projects", id: "projects" },
    { name: "Team", id: "team" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header style={{ backgroundColor: '#f4f4f4' }} className="shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/logo.png" 
              alt="FAVA Glocal"
              className="h-25 w-32"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  scrollToSection(item.id);
                  setSelectedTab(item.id);
                }}
                className={`font-medium text-lg px-3 py-1 rounded transition-colors ${selectedTab === item.id ? 'text-[#8fc64e] underline underline-offset-4' : 'text-gray-600 hover:text-blue-600'}`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <Button 
            className="hidden md:block bg-[cornflowerblue] hover:bg-blue-500"
            onClick={() => scrollToSection('contact')}
          >
            Get Started
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      scrollToSection(item.id);
                      setSelectedTab(item.id);
                    }}
                    className={`font-medium text-xl px-3 py-2 rounded transition-colors text-left ${selectedTab === item.id ? 'text-[#8fc64e] underline underline-offset-4' : 'text-gray-600 hover:text-blue-600'}`}
                  >
                    {item.name}
                  </button>
                ))}
                <Button 
                  className="w-full mt-6 bg-[cornflowerblue] hover:bg-blue-500"
                  onClick={() => scrollToSection('contact')}
                >
                  Get Started
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
