import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="py-4 border-b border-border sticky top-0 bg-background/80 backdrop-blur-sm z-50">
      <div className="container-main">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-display text-2xl font-bold">
            МузТорг
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
                  )}>
                    Главная
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Каталог</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px] md:grid-cols-2">
                      <Link to="/catalog/guitars" className="group block p-3 space-y-1 rounded-md hover:bg-accent">
                        <div className="font-medium">Гитары</div>
                        <div className="text-sm text-muted-foreground">Электро и акустические гитары</div>
                      </Link>
                      <Link to="/catalog/drums" className="group block p-3 space-y-1 rounded-md hover:bg-accent">
                        <div className="font-medium">Ударные</div>
                        <div className="text-sm text-muted-foreground">Барабаны, тарелки и аксессуары</div>
                      </Link>
                      <Link to="/catalog/keyboards" className="group block p-3 space-y-1 rounded-md hover:bg-accent">
                        <div className="font-medium">Клавишные</div>
                        <div className="text-sm text-muted-foreground">Пианино, синтезаторы и MIDI-контроллеры</div>
                      </Link>
                      <Link to="/catalog/all" className="group block p-3 space-y-1 rounded-md hover:bg-accent">
                        <div className="font-medium">Все категории</div>
                        <div className="text-sm text-muted-foreground">Посмотреть полный каталог</div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/delivery" className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
                  )}>
                    Доставка и возврат
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/customer" className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
                  )}>
                    Покупателям
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </Link>

            {/* Mobile menu button */}
            <button 
              className="md:hidden flex items-center" 
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-background border-b">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="py-2 font-medium" onClick={toggleMobileMenu}>Главная</Link>
            <Link to="/catalog/all" className="py-2 font-medium" onClick={toggleMobileMenu}>Каталог</Link>
            <Link to="/delivery" className="py-2 font-medium" onClick={toggleMobileMenu}>Доставка и возврат</Link>
            <Link to="/customer" className="py-2 font-medium" onClick={toggleMobileMenu}>Покупателям</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
