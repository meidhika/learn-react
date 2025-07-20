import { useEffect, useState } from "react";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import CardProduct from "../components/ui/CardProduct";
import ProductLayouts from "../components/layouts/ProductLayouts";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useLogin();
  useEffect(() => {
    getProducts((data) => {
      setIsLoading(false);
      setProducts(data);
    });
  }, [products]);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen w-full">
        <h1 className="text-3xl font-bold">Loading...</h1>
      </div>
    );
  }
  return (
    <ProductLayouts>
      <h1 className="text-3xl font-bold mb-2 w-full">Contoh 1</h1>
      {products.map((product) => {
        const roundedRating = Math.round(product.rating?.rate ?? 0);
        return (
          <div
            key={product.id}
            className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl p-5"
          >
            <div className="w-full aspect-square">
              <img
                className="w-full h-full object-contain"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 truncate">
                {product.title}
              </h3>
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
                <span className="text-gray-500 text-xs ml-2">
                  ({product.rating?.count ?? 0})
                </span>
              </div>

              <p className="text-sm text-gray-500 mt-2 truncate">
                {product.description}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-blue-600">
                  ${product.price}
                </span>
                <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  View Detail
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <h1 className="text-3xl font-bold mb-2 w-full">Contoh 2</h1>
      {products.map((product) => {
        return (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} title={product.title} />
            <CardProduct.Body
              rate={product.rating.rate}
              count={product.rating.count}
            >
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        );
      })}
    </ProductLayouts>
  );
}
