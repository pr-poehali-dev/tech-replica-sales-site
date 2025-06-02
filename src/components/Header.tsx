import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <Icon name="Smartphone" size={18} className="text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">HYDRA</h1>
          </div>

          {/* Поиск */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Icon
                name="Search"
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Поиск товаров..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Навигация */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Icon name="Heart" size={18} />
              Избранное
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="ShoppingCart" size={18} />
              Корзина
            </Button>
            <Button size="sm">
              <Icon name="User" size={18} />
              Войти
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
