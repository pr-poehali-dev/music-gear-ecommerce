import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 mt-20">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-xl font-bold mb-4">МузТорг</h3>
            <p className="text-muted-foreground mb-4">
              Качественное музыкальное оборудование для профессионалов и любителей
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Каталог</h4>
            <ul className="space-y-2">
              <li><Link to="/catalog/guitars" className="text-muted-foreground hover:text-primary transition-colors">Гитары</Link></li>
              <li><Link to="/catalog/drums" className="text-muted-foreground hover:text-primary transition-colors">Ударные</Link></li>
              <li><Link to="/catalog/keyboards" className="text-muted-foreground hover:text-primary transition-colors">Клавишные</Link></li>
              <li><Link to="/catalog/all" className="text-muted-foreground hover:text-primary transition-colors">Все товары</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Информация</h4>
            <ul className="space-y-2">
              <li><Link to="/delivery" className="text-muted-foreground hover:text-primary transition-colors">Доставка и возврат</Link></li>
              <li><Link to="/customer" className="text-muted-foreground hover:text-primary transition-colors">Покупателям</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">О компании</Link></li>
              <li><Link to="/contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Контакты</h4>
            <address className="not-italic">
              <p className="text-muted-foreground mb-2">Москва, ул. Музыкальная, 42</p>
              <p className="text-muted-foreground mb-2">Телефон: +7 (495) 123-45-67</p>
              <p className="text-muted-foreground mb-2">Email: info@muztorg.ru</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border/50">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} МузТорг. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
