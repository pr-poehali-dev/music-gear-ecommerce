import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, CreditCard, Award, Shield, User } from "lucide-react";

const Customer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Для покупателя</h1>
        
        <Tabs defaultValue="help" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="help">Поддержка</TabsTrigger>
            <TabsTrigger value="faq">Вопросы и ответы</TabsTrigger>
            <TabsTrigger value="loyalty">Программа лояльности</TabsTrigger>
          </TabsList>
          
          <TabsContent value="help" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Phone className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Телефон поддержки</CardTitle>
                    <CardDescription>Ежедневно с 9:00 до 21:00</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-semibold mb-2">8 (800) 123-45-67</p>
                  <p className="text-gray-600">Бесплатно по России</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <MessageSquare className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Онлайн-чат</CardTitle>
                    <CardDescription>Ответ в течение 5 минут</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">Задайте вопрос нашему специалисту в онлайн-чате</p>
                  <Button>Начать чат</Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-muted/50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Остались вопросы?</h2>
              <p className="mb-4">Напишите нам, и мы ответим вам в ближайшее время:</p>
              <ul className="space-y-2 mb-4">
                <li><span className="font-medium">Email:</span> support@musicshop.ru</li>
                <li><span className="font-medium">Telegram:</span> @musicshop_support</li>
                <li><span className="font-medium">WhatsApp:</span> +7 (999) 123-45-67</li>
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="faq" className="mt-6">
            <Accordion type="single" collapsible className="w-full mb-8">
              <AccordionItem value="faq-1">
                <AccordionTrigger>Как выбрать первую гитару?</AccordionTrigger>
                <AccordionContent>
                  При выборе первой гитары обратите внимание на следующие параметры:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Тип гитары (акустическая, электроакустическая, электрогитара)</li>
                    <li>Размер (полноразмерная или уменьшенная для детей)</li>
                    <li>Материал (массив дерева или ламинат)</li>
                    <li>Удобство грифа (ширина и форма)</li>
                  </ul>
                  <p className="mt-2">Для начинающих рекомендуем акустические гитары средней ценовой категории от проверенных брендов.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-2">
                <AccordionTrigger>Как часто нужно менять струны?</AccordionTrigger>
                <AccordionContent>
                  Частота замены струн зависит от интенсивности игры, качества самих струн и условий хранения инструмента:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>При ежедневной игре — раз в 1-2 месяца</li>
                    <li>При игре 2-3 раза в неделю — раз в 3-4 месяца</li>
                    <li>При редкой игре — раз в полгода</li>
                  </ul>
                  <p className="mt-2">Основные признаки того, что пора менять струны: потеря яркости звука, изменение цвета и появление следов коррозии.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-3">
                <AccordionTrigger>Какие синтезаторы подходят для начинающих?</AccordionTrigger>
                <AccordionContent>
                  Для начинающих музыкантов мы рекомендуем:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Синтезаторы с 61 клавишей (достаточно для большинства произведений)</li>
                    <li>Модели с встроенными уроками и функцией разделения клавиатуры</li>
                    <li>Инструменты с подсветкой клавиш или подключением к обучающим приложениям</li>
                  </ul>
                  <p className="mt-2">Хорошие варианты для начинающих: Yamaha PSR-E373, Casio CT-X700, Roland GO:KEYS.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-4">
                <AccordionTrigger>Какие документы нужны для покупки в рассрочку?</AccordionTrigger>
                <AccordionContent>
                  <p>Для оформления рассрочки вам потребуются:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Паспорт гражданина РФ</li>
                    <li>Наличие постоянной регистрации</li>
                    <li>Возраст от 18 до 70 лет</li>
                  </ul>
                  <p className="mt-2">Решение по заявке принимается в течение 15-20 минут. Рассрочка доступна на срок от 6 до 24 месяцев.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          
          <TabsContent value="loyalty" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <CreditCard className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Бонусная программа</CardTitle>
                    <CardDescription>Кэшбэк до 5%</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Получайте до 5% бонусами от каждой покупки. 1 бонус = 1 рубль.</p>
                  <div className="flex items-center gap-2">
                    <Badge>Новичок</Badge>
                    <span className="text-gray-500">→</span>
                    <Badge variant="outline">Меломан</Badge>
                    <span className="text-gray-500">→</span>
                    <Badge variant="secondary">Маэстро</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Award className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Особые привилегии</CardTitle>
                    <CardDescription>Для постоянных клиентов</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Badge className="h-1.5 w-1.5 rounded-full p-0" />
                      Приоритетная поддержка
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge className="h-1.5 w-1.5 rounded-full p-0" />
                      Приглашения на закрытые презентации
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge className="h-1.5 w-1.5 rounded-full p-0" />
                      Эксклюзивные предложения
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Shield className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Расширенная гарантия</CardTitle>
                    <CardDescription>Защита вашей покупки</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Увеличьте срок гарантии на ваши инструменты:</p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-center gap-2">
                      <Badge className="h-1.5 w-1.5 rounded-full p-0" />
                      +1 год для серебряного уровня
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge className="h-1.5 w-1.5 rounded-full p-0" />
                      +2 года для золотого уровня
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-col items-center bg-muted/50 p-8 rounded-lg text-center">
              <User className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-2">Станьте участником программы лояльности</h2>
              <p className="mb-6 max-w-lg">Зарегистрируйтесь на сайте или в мобильном приложении, чтобы начать получать бонусы с первой покупки.</p>
              <Button size="lg">Зарегистрироваться</Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Customer;
