import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Truck, Calendar, RotateCcw, CreditCard } from "lucide-react";

const Delivery = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Доставка и возврат</h1>
        
        <Tabs defaultValue="delivery" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="delivery">Доставка</TabsTrigger>
            <TabsTrigger value="returns">Возврат</TabsTrigger>
          </TabsList>
          
          <TabsContent value="delivery" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Truck className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Курьерская доставка</CardTitle>
                    <CardDescription>1-3 рабочих дня</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Доставка до двери в удобное для вас время. Доступна во всех крупных городах России.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Calendar className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Самовывоз</CardTitle>
                    <CardDescription>В день заказа</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Бесплатно из наших фирменных магазинов. Резерв товара действует 3 дня.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <CreditCard className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Оплата</CardTitle>
                    <CardDescription>Удобные способы</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Наличными, картой при получении, онлайн-платежи и рассрочка без переплаты.</p>
                </CardContent>
              </Card>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Сколько стоит доставка?</AccordionTrigger>
                <AccordionContent>
                  Стоимость доставки зависит от региона и веса товара. В пределах МКАД — от 350 ₽. 
                  При заказе от 15 000 ₽ доставка бесплатная.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Как отследить заказ?</AccordionTrigger>
                <AccordionContent>
                  После оформления заказа вам будет отправлено SMS-сообщение с трек-номером. 
                  Также вы можете отслеживать статус в личном кабинете или позвонив нам.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Доставляете ли вы за границу?</AccordionTrigger>
                <AccordionContent>
                  Да, мы осуществляем международную доставку. Стоимость и сроки рассчитываются индивидуально.
                  Свяжитесь с нашими менеджерами для уточнения деталей.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          
          <TabsContent value="returns" className="mt-6">
            <div className="bg-muted/50 p-6 rounded-lg mb-8">
              <div className="flex items-start gap-4">
                <RotateCcw className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">14 дней на возврат</h3>
                  <p className="text-gray-600 mb-4">
                    Если товар вам не подошел, вы можете вернуть его в течение 14 дней с момента получения.
                    Товар должен быть в оригинальной упаковке, без следов использования.
                  </p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Условия возврата</h2>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Товар должен быть в идеальном состоянии без следов использования</li>
              <li>Наличие оригинальной упаковки, комплектации и документов</li>
              <li>Сохранение всех защитных пленок и этикеток</li>
              <li>Наличие документа, подтверждающего покупку (чек, накладная)</li>
            </ul>
            
            <h2 className="text-2xl font-bold mb-4">Процесс возврата</h2>
            <ol className="list-decimal pl-6 mb-8 space-y-2">
              <li>Заполните заявление на возврат в личном кабинете или в магазине</li>
              <li>Упакуйте товар в оригинальную упаковку</li>
              <li>Доставьте товар в магазин или отправьте курьером</li>
              <li>После проверки товара мы вернем вам деньги в течение 10 дней</li>
            </ol>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="return-1">
                <AccordionTrigger>Какие товары нельзя вернуть?</AccordionTrigger>
                <AccordionContent>
                  Нельзя вернуть товары со следами использования, а также струны, медиаторы, губные гармошки 
                  и другие товары личной гигиены. Программное обеспечение с нарушенной упаковкой также не подлежит возврату.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="return-2">
                <AccordionTrigger>Как вернуть товар, купленный в кредит?</AccordionTrigger>
                <AccordionContent>
                  При возврате товара, приобретенного в кредит, вам необходимо предоставить кредитный договор.
                  После проверки товара мы передадим информацию в банк, и кредитный договор будет расторгнут.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="return-3">
                <AccordionTrigger>Как мне вернут деньги?</AccordionTrigger>
                <AccordionContent>
                  Деньги возвращаются тем же способом, которым была произведена оплата. 
                  При оплате картой — на карту, при оплате наличными — наличными или на карту по вашему выбору.
                  Срок возврата — до 10 рабочих дней.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Delivery;
