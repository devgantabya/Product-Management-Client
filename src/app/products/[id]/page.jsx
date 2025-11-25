const ProductDetails = async ({ params }) => {
  const id = params.id;

  let product;
  try {
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Product not found");
    }

    product = await res.json();
  } catch (err) {
    return <div className="p-10 text-red-600">{err.message}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p className="text-xl text-gray-700 mb-2">
        Price: <span className="font-semibold">${product.price}</span>
      </p>
      <p className="text-gray-600 mt-4 leading-7">{product.description}</p>
    </div>
  );
};

export default ProductDetails;
