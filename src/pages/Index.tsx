import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null);

  const tobaccoFlavors = [
    { name: "Двойное яблоко", price: "800₽", popular: true },
    { name: "Мята", price: "750₽", popular: false },
    { name: "Виноград", price: "750₽", popular: true },
    { name: "Вишня", price: "800₽", popular: false },
    { name: "Апельсин", price: "750₽", popular: false },
    { name: "Арбуз", price: "750₽", popular: true },
    { name: "Персик", price: "800₽", popular: false },
    { name: "Кокос", price: "850₽", popular: false },
    { name: "Лимон", price: "750₽", popular: false },
    { name: "Клубника", price: "800₽", popular: true },
    { name: "Манго", price: "850₽", popular: false },
    { name: "Дыня", price: "750₽", popular: false },
  ];

  const interiorImages = [
    "/img/af675e20-f791-4541-bc88-61eb972dc491.jpg",
    "/img/ccf42235-0966-4d80-bb97-b6206b94e03a.jpg",
    "/img/47971594-6fce-4a88-8399-4f6a5fddc581.jpg",
    "/img/af675e20-f791-4541-bc88-61eb972dc491.jpg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Header */}
      <header className="bg-amber-900/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Flame" className="text-orange-300" size={28} />
              <h1 className="text-2xl font-bold text-orange-100">
                Кальян Lounge
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-orange-100 hover:text-orange-300 transition-colors"
              >
                Главная
              </a>
              <a
                href="#menu"
                className="text-orange-100 hover:text-orange-300 transition-colors"
              >
                Меню
              </a>
              <a
                href="#booking"
                className="text-orange-100 hover:text-orange-300 transition-colors"
              >
                Бронирование
              </a>
              <a
                href="#interior"
                className="text-orange-100 hover:text-orange-300 transition-colors"
              >
                Интерьер
              </a>
              <a
                href="#contacts"
                className="text-orange-100 hover:text-orange-300 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              Забронировать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-orange-900/30"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-6xl md:text-8xl font-bold text-amber-900 mb-6 animate-fade-in font-montserrat">
            Атмосфера
          </h2>
          <p className="text-xl md:text-2xl text-amber-800 mb-8 animate-fade-in font-open-sans">
            Уютная кальянная с большой линейкой табаков
            <br />и неповторимой атмосферой восточного отдыха
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4"
            >
              <Icon name="Calendar" className="mr-2" size={20} />
              Забронировать столик
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-8 py-4"
            >
              <Icon name="Menu" className="mr-2" size={20} />
              Посмотреть меню
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-amber-900 mb-6">
              Меню табаков
            </h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Большая линейка премиальных табаков от лучших производителей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tobaccoFlavors.map((flavor, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer border-amber-200 hover:border-amber-300"
                onClick={() => setSelectedFlavor(flavor.name)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-amber-900">
                      {flavor.name}
                    </CardTitle>
                    {flavor.popular && (
                      <Badge className="bg-orange-500 text-white">
                        Популярный
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-2xl font-bold text-amber-700">
                    {flavor.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon name="Leaf" className="text-green-600" size={16} />
                      <span className="text-sm text-gray-600">
                        Премиум качество
                      </span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-amber-600 hover:bg-amber-700 text-white"
                    >
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section
        id="booking"
        className="py-20 bg-gradient-to-br from-amber-50 to-orange-100"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-amber-900 mb-6">
              Бронирование
            </h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Забронируйте столик и наслаждайтесь атмосферой
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-amber-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-900 text-center">
                  Форма бронирования
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-amber-800 font-medium mb-2 block">
                      Имя
                    </label>
                    <Input
                      placeholder="Ваше имя"
                      className="border-amber-300 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="text-amber-800 font-medium mb-2 block">
                      Телефон
                    </label>
                    <Input
                      placeholder="+7 (000) 000-00-00"
                      className="border-amber-300 focus:border-amber-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-amber-800 font-medium mb-2 block">
                      Дата
                    </label>
                    <Input
                      type="date"
                      className="border-amber-300 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="text-amber-800 font-medium mb-2 block">
                      Время
                    </label>
                    <Input
                      type="time"
                      className="border-amber-300 focus:border-amber-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-amber-800 font-medium mb-2 block">
                    Количество гостей
                  </label>
                  <Input
                    type="number"
                    placeholder="2"
                    min="1"
                    max="10"
                    className="border-amber-300 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="text-amber-800 font-medium mb-2 block">
                    Комментарий
                  </label>
                  <Textarea
                    placeholder="Особые пожелания..."
                    className="border-amber-300 focus:border-amber-500"
                  />
                </div>
                <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Забронировать столик
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interior Section */}
      <section id="interior" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-amber-900 mb-6">Интерьер</h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Погрузитесь в атмосферу восточного уюта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {interiorImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={image}
                  alt={`Интерьер ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section
        id="contacts"
        className="py-20 bg-gradient-to-br from-amber-900 to-orange-900 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Контакты</h2>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Мы всегда рады видеть вас в нашей кальянной
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Icon
                name="MapPin"
                className="mx-auto mb-4 text-orange-300"
                size={32}
              />
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="opacity-90">
                ул. Примерная, 123
                <br />
                Москва, Россия
              </p>
            </div>
            <div className="text-center">
              <Icon
                name="Phone"
                className="mx-auto mb-4 text-orange-300"
                size={32}
              />
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="opacity-90">+7 (999) 123-45-67</p>
            </div>
            <div className="text-center">
              <Icon
                name="Clock"
                className="mx-auto mb-4 text-orange-300"
                size={32}
              />
              <h3 className="text-xl font-semibold mb-2">Режим работы</h3>
              <p className="opacity-90">
                Ежедневно
                <br />
                14:00 - 02:00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Flame" className="text-orange-300" size={24} />
              <span className="text-xl font-bold">Кальян Lounge</span>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-orange-200 hover:text-orange-300 transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="text-orange-200 hover:text-orange-300 transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="#"
                className="text-orange-200 hover:text-orange-300 transition-colors"
              >
                <Icon name="Phone" size={20} />
              </a>
            </div>
          </div>
          <div className="text-center mt-4 pt-4 border-t border-amber-800">
            <p className="text-orange-200 opacity-75">
              © 2024 Кальян Lounge. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
