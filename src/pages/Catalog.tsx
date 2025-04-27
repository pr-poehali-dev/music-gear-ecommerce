import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const Catalog = () => {
  const { category } = useParams<{ category: string }>();
  
  const products: Record<string, Product[]> = {
    guitars: [
      { id: 1, name: "Электрогитара Fender Stratocaster", description: "Классическая электрогитара с тремя звукоснимателями", price: 89990, image: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?auto=format&fit=crop&q=80&w=500" },
      { id: 2, name: "Акустическая гитара Martin D-28", description: "Премиальная акустическая гитара из массива дерева", price: 149990, image: "https://images.unsplash.com/photo-1556449895-a33c9dba33dd?auto=format&fit=crop&q=80&w=500" },
      { id: 3, name: "Бас-гитара Ibanez SR500", description: "Активная бас-гитара с 4 струнами", price: 75990, image: "https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&q=80&w=500" },
    ],
    keyboards: [
      { id: 4, name: "Синтезатор Nord Stage 3", description: "Профессиональный сценический синтезатор", price: 219990, image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=500" },
      { id: 5, name: "MIDI-клавиатура Arturia KeyLab 61", description: "61-клавишная MIDI-клавиатура с полувзвешенными клавишами", price: 39990, image: "https://images.unsplash.com/photo-1619378431640-6fee6669248c?auto=format&fit=crop&q=80&w=500" },
      { id: 6, name: "Цифровое пианино Yamaha P-125", description: "Компактное цифровое пианино с 88 клавишами", price: 59990, image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80&w=500" },
    ],
    drums: [
      { id: 7, name: "Акустическая ударная установка Tama Imperialstar", description: "Полная акустическая установка с железом", price: 69990, image: "https://images.unsplash.com/photo-1543443258-92b04ad5ec6b?auto=format&fit=crop&q=80&w=500" },
      { id: 8, name: "Электронная ударная установка Roland TD-17KVX", description: "Компактная электронная установка с сетчатыми пэдами", price: 119990, image: "https://images.unsplash.com/photo-1627332649692-6d6599047e03?auto=format&fit=crop&q=80&w=500" },
      { id: 9, name: "Кахон Meinl Headliner", description: "Перкуссионный инструмент в форме коробки", price: 9990, image: "https://images.unsplash.com/photo-1445985543470-41fba5c3144a?auto=format&fit=crop&q=80&w=500" },
    ],
  };

  const displayedProducts = products[category as string] || [];
  
  const categoryNames: Record<string, string> = {
    guitars: "Гитары",
    keyboards: "Клавишные",
    drums: "Ударные"
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">{categoryNames[category as string] || "Каталог"}</h1>
        
        {displayedProducts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-medium mb-4">Товары не найдены</h2>
            <p className="text-gray-500 mb-6">По выбранной категории нет доступных товаров.</p>
            <Button asChild>
              <a href="/catalog/guitars">Перейти к гитарам</a>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-52 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{product.price.toLocaleString()} ₽</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">В корзину</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
