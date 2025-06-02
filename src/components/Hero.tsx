import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4">
              HYDRA — Мощная техника <br />
              для современных задач
            </h2>
            <p className="text-xl text-purple-100 mb-6">
              Превосходная производительность и надежность
            </p>
            <div className="flex space-x-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Icon name="ShoppingBag" size={20} />
                Каталог товаров
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-purple-600"
              >
                <Icon name="Play" size={20} />
                Смотреть обзоры
              </Button>
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="inline-block bg-white/10 rounded-2xl p-8">
              <Icon
                name="Smartphone"
                size={120}
                className="text-purple-200 mx-auto mb-4"
              />
              <div className="text-sm text-purple-200">
                Новинка: iPhone 15 Pro Replica
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
