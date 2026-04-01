import { Check } from "lucide-react";

const ProductCard = ({
  tool,
  tagStyles,
  periodLabel,
  onAddToCart,
  isInCart,
}) => {
  const handlePurchasing = () => {
    if (isInCart) return;
    onAddToCart(tool);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex flex-col p-6 relative">
      {/* Tag */}
      <div className="absolute top-4 right-4">
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagStyles[tool.tagType]}`}
        >
          {tool.tag}
        </span>
      </div>

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-2xl mb-4">
        <img src={tool.icon} alt={tool.name} />
      </div>

      {/* Name & Description */}
      <h3 className="text-base font-bold text-gray-900 mb-1">{tool.name}</h3>
      <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
        {tool.description}
      </p>

      {/* Price */}
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-2xl font-extrabold text-gray-900">
          ${tool.price}
        </span>
        <span className="text-sm text-gray-400 capitalize">
          {periodLabel[tool.period]}
        </span>
      </div>

      {/* Features */}
      <ul className="space-y-1.5 mb-6 flex-1">
        {tool.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
            <Check className="w-4 h-4 text-primary shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Buy Now Button */}
      <button
        onClick={handlePurchasing}
        disabled={isInCart}
        className={`text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 text-base ${
          isInCart
            ? "bg-green-500 cursor-default"
            : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:from-[#9514FA] hover:to-[#4F39F6] shadow-lg shadow-purple-200 cursor-pointer"
        }`}
      >
        {isInCart ? " Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;
