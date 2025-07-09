export default function CartPage() {
  // For now: Hardcoded example items.
  const cartItems = [
    { id: 1, name: "Dell XPS 13", price: 1200, quantity: 1 },
    { id: 2, name: "MacBook Air", price: 1400, quantity: 2 },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart 🛒</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="border-b pb-2 mb-2 flex justify-between"
              >
                <div>
                  {item.name} (x{item.quantity})
                </div>
                <div>${item.price * item.quantity}</div>
              </li>
            ))}
          </ul>

          <p className="font-semibold">Total: ${total}</p>

          <button className="mt-4 bg-[#00CAFF] hover:cursor-pointer hover:bg-[#63b6ca] text-white px-4 py-2 rounded">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
