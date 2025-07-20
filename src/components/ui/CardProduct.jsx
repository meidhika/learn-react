import Button from "./Button";
const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl p-5">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, title } = props;
  return (
    <div className="w-full aspect-square">
      <img className="w-full h-full object-contain" src={image} alt={title} />
    </div>
  );
};

const Body = (props) => {
  const { title, children, rate = 0, count = 0 } = props;
  const roundedRating = Math.round(rate);

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>

      <div className="flex items-center space-x-1 mt-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-sm ${
              i < roundedRating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
        <span className="text-gray-500 text-xs ml-2">({count})</span>
      </div>

      <p className="text-sm text-gray-500 mt-2 truncate">
        {children.substring(0, 100)}
      </p>
    </div>
  );
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className="mt-4 flex items-center justify-between">
      <span className="text-lg font-bold text-blue-600">
        ${" "}
        {price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}
      </span>
      <Button className="bg-blue-600 px-3 py-1">View Detail</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;
