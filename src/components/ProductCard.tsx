import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  isNew?: boolean;
  discount?: number;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  rating,
  isNew,
  discount,
}: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {isNew && (
            <Badge className="absolute top-2 left-2 bg-green-500">
              Новинка
            </Badge>
          )}
          {discount && (
            <Badge className="absolute top-2 right-2 bg-red-500">
              -{discount}%
            </Badge>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Icon name="Heart" size={16} />
          </Button>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
            {name}
          </h3>

          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={14}
                className={
                  i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
                }
              />
            ))}
            <span className="text-sm text-gray-600 ml-2">{rating}.0</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-gray-900">
                {price.toLocaleString()} ₽
              </span>
              <span className="text-sm text-gray-500 line-through ml-2">
                {originalPrice.toLocaleString()} ₽
              </span>
            </div>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
              <Icon name="ShoppingCart" size={14} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
