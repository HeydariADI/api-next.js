import React from "react";

import Link from "next/link";

function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center my-8">صفحه اصلی</h1>
      <h2 className="text-2xl text-center mb-4">به فروشگاه من خوش آمدید</h2>
      <Link
        href="/products"
        className="text-blue-500 hover:underline m-5 font-bold p-4 text-center text-2xl"
      >
        به صفحه محصولات بروید
      </Link>
    </div>
  );
}

export default HomePage;
