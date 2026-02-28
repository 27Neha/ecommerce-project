"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface MoneyAmount {
  amount: number;
  currency_code: string;
}

interface Product {
  id: string;
  title: string;
  description?: string;
  thumbnail?: string;
  prices?: MoneyAmount[];
}

const MOCK_PRODUCT: Product = {
  id: "1",
  title: "Premium Wireless Headphones",
  description:
    "Experience sound like never before with our flagship wireless headphones. Featuring 40-hour battery life, active noise cancellation, and premium drivers crafted for audiophiles.",
  thumbnail:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900",
  prices: [{ amount: 29900, currency_code: "usd" }],
};

function formatPrice(amount: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(amount / 100);
}

export default function ProductPage() {
  const params = useParams();
  const handle = params?.handle as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<
    "desc" | "reviews" | "ship"
  >("desc");
  const [cartCount, setCartCount] = useState(0);

  // Load product (mock)
  useEffect(() => {
    setProduct(MOCK_PRODUCT);
  }, [handle]);

  // Load cart count from localStorage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(cart.length);
  }, []);

  if (!product) return <div style={{ padding: 50 }}>Loading...</div>;

  const price = product.prices?.[0];

  return (
    <div
      style={{
        background: "#000",
        color: "white",
        minHeight: "100vh",
        padding: "60px 80px",
      }}
    >
      {/* HEADER WITH CART COUNT */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ fontSize: 18 }}>
          🛒 Cart: {cartCount}
        </div>
      </div>

      {/* PRODUCT TOP SECTION */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          marginTop: 40,
        }}
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{
            width: "100%",
            borderRadius: 20,
          }}
        />

        <div>
          <h1 style={{ fontSize: 48, marginBottom: 20 }}>
            {product.title}
          </h1>

          <div style={{ fontSize: 24, marginBottom: 20 }}>
            ⭐⭐⭐⭐⭐ (3 reviews)
          </div>

          <div style={{ fontSize: 36, color: "#00e5a8" }}>
            {price && formatPrice(price.amount, price.currency_code)}
            <span
              style={{
                marginLeft: 15,
                fontSize: 18,
                textDecoration: "line-through",
                color: "#999",
              }}
            >
              $373
            </span>
            <span
              style={{
                marginLeft: 15,
                fontSize: 14,
                background: "#d1fae5",
                color: "#065f46",
                padding: "5px 10px",
                borderRadius: 20,
              }}
            >
              20% OFF
            </span>
          </div>

          <p style={{ marginTop: 20, lineHeight: 1.7 }}>
            {product.description}
          </p>

          {/* Quantity */}
          <div style={{ marginTop: 30 }}>
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              style={{ marginRight: 10 }}
            >
              -
            </button>
            {qty}
            <button
              onClick={() => setQty((q) => q + 1)}
              style={{ marginLeft: 10 }}
            >
              +
            </button>
          </div>

          {/* ADD TO CART BUTTON */}
          <button
            onClick={() => {
              const cart = JSON.parse(
                localStorage.getItem("cart") || "[]"
              );

              const newItem = {
                id: product.id,
                title: product.title,
                price: price?.amount,
                quantity: qty,
                image: product.thumbnail,
              };

              cart.push(newItem);

              localStorage.setItem(
                "cart",
                JSON.stringify(cart)
              );

              setCartCount(cart.length);

              alert("Added to cart!");
            }}
            style={{
              marginTop: 30,
              padding: "15px 40px",
              background:
                "linear-gradient(90deg,#6366f1,#8b5cf6)",
              border: "none",
              borderRadius: 12,
              fontSize: 18,
              color: "white",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* TABS SECTION */}
      <div style={{ marginTop: 80 }}>
        <div
          style={{
            display: "flex",
            gap: 40,
            borderBottom: "1px solid #333",
            marginBottom: 30,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          <div
            onClick={() => setActiveTab("desc")}
            style={{
              paddingBottom: 10,
              borderBottom:
                activeTab === "desc"
                  ? "3px solid #6366f1"
                  : "none",
            }}
          >
            Description
          </div>

          <div
            onClick={() => setActiveTab("reviews")}
            style={{
              paddingBottom: 10,
              borderBottom:
                activeTab === "reviews"
                  ? "3px solid #6366f1"
                  : "none",
            }}
          >
            Reviews (3)
          </div>

          <div
            onClick={() => setActiveTab("ship")}
            style={{
              paddingBottom: 10,
              borderBottom:
                activeTab === "ship"
                  ? "3px solid #6366f1"
                  : "none",
            }}
          >
            Shipping & Returns
          </div>
        </div>

        {/* DESCRIPTION */}
        {activeTab === "desc" && (
          <div style={{ lineHeight: 1.8 }}>
            <h3>Key Features</h3>
            <ul style={{ paddingLeft: 20 }}>
              <li>✓ 40-hour battery life</li>
              <li>✓ Active Noise Cancellation</li>
              <li>✓ Bluetooth 5.3</li>
              <li>✓ Premium 40mm drivers</li>
              <li>✓ Foldable design</li>
            </ul>
          </div>
        )}

        {/* REVIEWS */}
        {activeTab === "reviews" && (
          <div>
            <h2 style={{ fontSize: 32 }}>4.7 ⭐</h2>
            <p>3 Reviews</p>

            <div style={{ marginTop: 30 }}>
              {[
                {
                  name: "Alex M.",
                  text:
                    "Incredible sound quality. Worth every penny!",
                },
                {
                  name: "Priya S.",
                  text:
                    "Battery lasted entire flight. Super comfortable.",
                },
                {
                  name: "Jordan T.",
                  text:
                    "Amazing build quality and clarity.",
                },
              ].map((r, i) => (
                <div
                  key={i}
                  style={{
                    border: "1px solid #333",
                    padding: 20,
                    borderRadius: 12,
                    marginBottom: 20,
                  }}
                >
                  <strong>{r.name}</strong>
                  <div style={{ color: "#f59e0b" }}>
                    ★★★★★
                  </div>
                  <p style={{ marginTop: 10 }}>{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SHIPPING */}
        {activeTab === "ship" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: 20,
            }}
          >
            {[
              {
                title: "Standard Delivery",
                text:
                  "FREE on orders over $50. 3-5 business days.",
              },
              {
                title: "Express Delivery",
                text:
                  "$9.99 – Next business day delivery.",
              },
              {
                title: "Easy Returns",
                text:
                  "30-day hassle-free returns.",
              },
              {
                title: "Secure Packaging",
                text:
                  "All orders safely packaged.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid #333",
                  padding: 20,
                  borderRadius: 12,
                }}
              >
                <h4>{item.title}</h4>
                <p style={{ color: "#bbb" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}