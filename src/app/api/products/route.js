export const products = [
  {
    id: 1,
    name: "کیبورد مکانیکی RGB",
    price: 2500000,
    description: "کیبورد مکانیکی با نور پس‌زمینه RGB و کلیدهای سوئیچ قرمز",
    category: "لوازم جانبی کامپیوتر",
    inStock: 12,
    image: "/images/keyboard.jpg",
  },
  {
    id: 2,
    name: "موس گیمینگ بی‌سیم",
    price: 1500000,
    description: "موس بی‌سیم مخصوص بازی با دقت 16000 DPI",
    category: "لوازم جانبی کامپیوتر",
    inStock: 25,
    image: "/images/mouse.jpg",
  },
  {
    id: 3,
    name: "مانیتور 27 اینچ 2K",
    price: 9500000,
    description: "مانیتور 27 اینچ با رزولوشن 2K و نرخ تازه‌سازی 165Hz",
    category: "نمایشگر",
    inStock: 8,
    image: "/images/monitor.jpg",
  },
  {
    id: 4,
    name: "هندزفری بلوتوث",
    price: 1200000,
    description: "هندزفری بلوتوث با کیفیت صدای HD و نویز کنسلینگ",
    category: "صوتی و تصویری",
    inStock: 40,
    image: "/images/earbuds.jpg",
  },
  {
    id: 5,
    name: "اسپیکر پرتابل",
    price: 1800000,
    description: "اسپیکر بی‌سیم ضدآب با 12 ساعت شارژدهی",
    category: "صوتی و تصویری",
    inStock: 18,
    image: "/images/speaker.jpg",
  },
  {
    id: 6,
    name: "لپ‌تاپ گیمینگ",
    price: 45000000,
    description: "لپ‌تاپ Core i7 با کارت گرافیک RTX 4060 و رم 16 گیگ",
    category: "کامپیوتر و لپ‌تاپ",
    inStock: 5,
    image: "/images/laptop.jpg",
  },
  {
    id: 7,
    name: "تبلت 10 اینچ",
    price: 9000000,
    description: "تبلت 10 اینچ با پردازنده هشت هسته‌ای و حافظه 128 گیگ",
    category: "موبایل و تبلت",
    inStock: 14,
    image: "/images/tablet.jpg",
  },
  {
    id: 8,
    name: "گوشی موبایل",
    price: 25000000,
    description: "گوشی پرچم‌دار با دوربین 108 مگاپیکسل و نمایشگر AMOLED",
    category: "موبایل و تبلت",
    inStock: 9,
    image: "/images/smartphone.jpg",
  },
  {
    id: 9,
    name: "ساعت هوشمند",
    price: 3500000,
    description: "ساعت هوشمند ضدآب با سنسور ضربان قلب و GPS",
    category: "گجت",
    inStock: 20,
    image: "/images/smartwatch.jpg",
  },
  {
    id: 10,
    name: "پاوربانک 20000 میلی‌آمپر",
    price: 800000,
    description: "پاوربانک سریع با دو خروجی USB و یک ورودی Type-C",
    category: "گجت",
    inStock: 30,
    image: "/images/powerbank.jpg",
  },
];

export async function GET(request) {
  try {
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    products.push({ id: products.length + 1, ...data });
    return new Response(
      JSON.stringify({ message: "Product added successfully" }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    const index = products.findIndex((product) => product.id === id);
    if (index !== -1) {
      products.splice(index, 1);
      return new Response(
        JSON.stringify({ message: "Product deleted successfully" }),
        { status: 200 }
      );
    } else {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
export async function PUT(request) {
  try {
    const { id, ...data } = await request.json();
    const index = products.findIndex((product) => product.id === id);
    if (index !== -1) {
      products[index] = { ...products[index], ...data };
      return new Response(
        JSON.stringify({ message: "Product updated successfully" }),
        { status: 200 }
      );
    } else {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
