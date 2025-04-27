import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MusicalNote, Truck, Shield, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-music-muted py-20 md:py-32">
          <div className="container-main">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="hero-text mb-6">Откройте мир <span className="text-music">музыки</span> вместе с нами</h1>
                <p className="text-muted-foreground text-lg mb-8">
                  Профессиональное музыкальное оборудование для творчества и вдохновения
                </p>
                <div className="flex gap-4">
                  <Button asChild size="lg">
                    <Link to="/catalog/all">Смотреть каталог</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/customer">Для покупателей</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1511379938547-c1f69419868d" 
                  alt="Музыкальное оборудование" 
                  className="rounded-lg shadow-lg object-cover w-full h-[400px]" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-20">
          <div className="container-main">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Популярные категории</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link to="/catalog/guitars" className="group">
                <div className="bg-secondary rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1556449895-a33c9dba33dd" 
                    alt="Гитары" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Гитары</h3>
                    <p className="text-muted-foreground mb-4">Акустические, электрические и бас-гитары для любого стиля</p>
                    <span className="text-primary flex items-center font-medium">
                      Подробнее <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
              
              <Link to="/catalog/drums" className="group">
                <div className="bg-secondary rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7" 
                    alt="Ударные" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Ударные</h3>
                    <p className="text-muted-foreground mb-4">Акустические и электронные барабаны, тарелки и аксессуары</p>
                    <span className="text-primary flex items-center font-medium">
                      Подробнее <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
              
              <Link to="/catalog/keyboards" className="group">
                <div className="bg-secondary rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0" 
                    alt="Клавишные" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Клавишные</h3>
                    <p className="text-muted-foreground mb-4">Пианино, синтезаторы и MIDI-контроллеры</p>
                    <span className="text-primary flex items-center font-medium">
                      Подробнее <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild>
                <Link to="/catalog/all">Посмотреть все категории</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features */}
        <section className="py-20 bg-secondary">
          <div className="container-main">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Почему выбирают нас</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-background rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center bg-primary/10 p-3 rounded-full mb-4">
                  <MusicalNote className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Качественное оборудование</h3>
                <p className="text-muted-foreground">Только проверенные бренды и профессиональная техника</p>
              </div>
              
              <div className="bg-background rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center bg-primary/10 p-3 rounded-full mb-4">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Быстрая доставка</h3>
                <p className="text-muted-foreground">Доставляем по всей России в кратчайшие сроки</p>
              </div>
              
              <div className="bg-background rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center bg-primary/10 p-3 rounded-full mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Гарантия на товары</h3>
                <p className="text-muted-foreground">Официальная гарантия от производителей</p>
              </div>
              
              <div className="bg-background rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center bg-primary/10 p-3 rounded-full mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Профессиональная консультация</h3>
                <p className="text-muted-foreground">Наши специалисты помогут с выбором оборудования</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* New Arrivals */}
        <section className="py-20">
          <div className="container-main">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Новые поступления</h2>
              <Link to="/catalog/new" className="text-primary flex items-center">
                Все новинки <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 1,
                  name: "Электрогитара Fender Stratocaster",
                  price: 89900,
                  image: "https://images.unsplash.com/photo-1550985616-10810253b84d"
                },
                {
                  id: 2,
                  name: "Синтезатор Roland JUNO-DS88",
                  price: 124500,
                  image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04"
                },
                {
                  id: 3,
                  name: "Акустическая гитара Martin D-28",
                  price: 195000,
                  image: "https://images.unsplash.com/photo-1588449668365-d15e397f6787"
                }
              ].map(product => (
                <div key={product.id} className="bg-background border rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg">
                  <div className="overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                    <p className="text-xl font-bold mb-4">{product.price.toLocaleString('ru-RU')} ₽</p>
                    <Button className="w-full">В корзину</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
