"use client";

import "../globals.css";
import React, { useEffect, useState } from "react";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });
  const [editId, setEditId] = useState(null);
  const [editProduct, setEditProduct] = useState({ name: "", price: "" });

  function fetchData() {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleAddProduct() {
    fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then(() => {
        fetchData();
        setNewProduct({ name: "", price: "", description: "", image: "" });
      })
      .catch((error) => console.error("Error adding product:", error));
  }

  function handleDeleteProduct(id) {
    fetch("http://localhost:3000/api/products", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((response) => response.json())
      .then(() => fetchData())
      .catch((error) => console.error("Error deleting product:", error));
  }

  function handleEditProduct(product) {
    setEditId(product.id);
    setEditProduct({ name: product.name, price: product.price });
  }

  function handleUpdateProduct() {
    fetch("http://localhost:3000/api/products", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: editId, ...editProduct }),
    })
      .then((response) => response.json())
      .then(() => {
        fetchData();
        setEditId(null);
        setEditProduct({ name: "", price: "" });
      })
      .catch((error) => console.error("Error updating product:", error));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">محصولات</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl mb-8">
        {products.map((product) => (
          <div
            key={product.id || Math.random()}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform relative"
          >
            <img
              src={
                product.image
                  ? `/imeages/${product.image.replace("/images/", "")}`
                  : "/imeages/placeholder.png"
              }
              alt={product.name}
              className="w-32 h-32 object-cover rounded-xl mb-4 border"
            />
            {editId === product.id ? (
              <div className="flex flex-col gap-2 items-center w-full">
                <input
                  type="text"
                  className="border rounded-lg px-2 py-1 w-full"
                  value={editProduct.name}
                  onChange={(e) =>
                    setEditProduct({ ...editProduct, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="border rounded-lg px-2 py-1 w-full"
                  value={editProduct.price}
                  onChange={(e) =>
                    setEditProduct({ ...editProduct, price: e.target.value })
                  }
                />
                <button
                  onClick={handleUpdateProduct}
                  className="bg-green-500 text-white px-3 py-1 rounded-lg shadow hover:bg-green-600 transition-colors w-full"
                >
                  ذخیره
                </button>
                <button
                  onClick={() => setEditId(null)}
                  className="bg-gray-300 text-gray-700 px-2 py-1 rounded-lg shadow hover:bg-gray-400 transition-colors w-full"
                >
                  لغو
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {product.name}
                </h2>
                <p className="text-gray-500 mb-2 text-center">
                  {product.description}
                </p>
                <p className="text-blue-600 font-bold text-lg mb-2">
                  {product.price} تومان
                </p>
              </>
            )}
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => handleEditProduct(product)}
                className="bg-yellow-400 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-500 transition-colors"
              >
                ویرایش
              </button>
              <button
                onClick={() => handleDeleteProduct(product.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition-colors"
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xl mb-8">
        <h2 className="text-lg font-bold text-gray-700 mb-4">
          اضافه کردن محصول جدید
        </h2>
        <div className="flex flex-col gap-4 mb-4">
          <input
            type="text"
            className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="نام محصول..."
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
          <input
            type="text"
            className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="قیمت..."
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
          <input
            type="text"
            className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="توضیحات..."
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
          />
        </div>
        <button
          onClick={handleAddProduct}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors w-full font-bold"
        >
          افزودن محصول جدید
        </button>
      </div>
    </div>
  );
}

export default ProductsPage;
