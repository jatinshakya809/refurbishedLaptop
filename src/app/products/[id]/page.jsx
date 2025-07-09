import refurbishedLaptops from "@/app/data/refurbishedLaptops";

export default function ProductDetail({ params }) {
  const { id } = params;

  // 1️⃣ Find product by ID
  const product = refurbishedLaptops.find((p) => String(p.id) === String(id));

  // 2️⃣ Fallback if not found
  if (!product) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
      </div>
    );
  }

  // 3️⃣ Pick 3 recommended laptops (excluding current)
  const recommended = refurbishedLaptops
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="p-8 text-black">
      {/* ✅ Main Product Details */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover rounded-lg shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg mb-2 text-gray-700">{product.condition}</p>
          <p className="text-2xl font-semibold text-blue-600 mb-4">
            {product.price.toLocaleString()}
          </p>
          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* Example: specs */}
          <ul className="list-disc ml-5 text-gray-700">
            <li>
              Processor: {product.specifications?.processor || "Intel i5"}
            </li>
            <li>RAM: {product.specifications?.ram || "8GB"}</li>
            <li>Storage: {product.specifications?.storage || "256GB SSD"}</li>
          </ul>

          <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>

      {/* ✅ Recommended Laptops */}
      <h2 className="text-2xl font-bold mb-4">Recommended for you</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recommended.map((rec) => (
          <a
            href={`/products/${rec.id}`}
            key={rec.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={rec.image}
              alt={rec.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{rec.name}</h3>
              <p className="text-gray-600 mb-1">{rec.company}</p>
              <p className="text-blue-600 font-semibold">{rec.price}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
