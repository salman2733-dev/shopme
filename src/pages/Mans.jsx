import React, { useState } from "react";


const products = [
  {
    id: 1,
    name: "Classic Slim Fit Suit",
    category: "Suits",
    price: 14999,
    originalPrice: 22000,
    rating: 4.9,
    reviews: 2341,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4b4057?w=400&h=400&fit=crop",
    badge: "Best Seller",
    sizes: ["S", "M", "L", "XL", "XXL"],
    discount: 32,
  },
  {
    id: 2,
    name: "Casual Linen Shirt",
    category: "Shirts",
    price: 1899,
    originalPrice: 2800,
    rating: 4.8,
    reviews: 4120,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&h=400&fit=crop",
    badge: "Top Rated",
    sizes: ["S", "M", "L", "XL"],
    discount: 32,
  },
  {
    id: 3,
    name: "Slim Chino Pants",
    category: "Pants",
    price: 2499,
    originalPrice: 3800,
    rating: 4.7,
    reviews: 1870,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    badge: "Trending",
    sizes: ["28", "30", "32", "34", "36"],
    discount: 34,
  },
  {
    id: 4,
    name: "Leather Biker Jacket",
    category: "Jackets",
    price: 9499,
    originalPrice: 14000,
    rating: 4.9,
    reviews: 987,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    badge: "Premium",
    sizes: ["S", "M", "L", "XL"],
    discount: 32,
  },
  {
    id: 5,
    name: "Oversized Graphic Tee",
    category: "T-Shirts",
    price: 999,
    originalPrice: 1600,
    rating: 4.7,
    reviews: 6540,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
    badge: "Fan Fav",
    sizes: ["S", "M", "L", "XL", "XXL"],
    discount: 38,
  },
  {
    id: 6,
    name: "Knit Crew Neck Sweater",
    category: "Sweaters",
    price: 3299,
    originalPrice: 4800,
    rating: 4.8,
    reviews: 1230,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
    badge: "Winter Pick",
    sizes: ["S", "M", "L", "XL"],
    discount: 31,
  },
  {
    id: 7,
    name: "Jogger Track Pants",
    category: "Activewear",
    price: 1799,
    originalPrice: 2700,
    rating: 4.7,
    reviews: 3210,
    image: "https://images.unsplash.com/photo-1542652735873-fb2825bac6e2?w=400&h=400&fit=crop",
    badge: "Active Pick",
    sizes: ["S", "M", "L", "XL", "XXL"],
    discount: 33,
  },
  {
    id: 8,
    name: "Formal Oxford Shoes",
    category: "Footwear",
    price: 5999,
    originalPrice: 8500,
    rating: 4.9,
    reviews: 1450,
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400&h=400&fit=crop",
    badge: "Classic",
    sizes: ["40", "41", "42", "43", "44"],
    discount: 29,
  },
  {
    id: 9,
    name: "Denim Slim Jeans",
    category: "Jeans",
    price: 2999,
    originalPrice: 4500,
    rating: 4.8,
    reviews: 5670,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
    badge: "Must Have",
    sizes: ["28", "30", "32", "34", "36"],
    discount: 33,
  },
  {
    id: 10,
    name: "Polo Ralph Style Shirt",
    category: "Shirts",
    price: 2199,
    originalPrice: 3200,
    rating: 4.8,
    reviews: 2890,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&h=400&fit=crop",
    badge: "New Arrival",
    sizes: ["S", "M", "L", "XL"],
    discount: 31,
  },
];

const categories = ["All", "Suits", "Shirts", "Pants", "Jackets", "T-Shirts", "Sweaters", "Activewear", "Footwear", "Jeans"];

const badgeStyles = {
  "Best Seller":  { bg: "#1F2937", color: "#fff" },
  "Top Rated":    { bg: "#7C3AED", color: "#fff" },
  Trending:       { bg: "#0EA5E9", color: "#fff" },
  Premium:        { bg: "#92400E", color: "#fff" },
  "Fan Fav":      { bg: "#DC2626", color: "#fff" },
  "Winter Pick":  { bg: "#1E3A5F", color: "#fff" },
  "Active Pick":  { bg: "#047857", color: "#fff" },
  Classic:        { bg: "#374151", color: "#fff" },
  "Must Have":    { bg: "#4338CA", color: "#fff" },
  "New Arrival":  { bg: "#BE185D", color: "#fff" },
};

function StarRating({ rating }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="13" height="13" viewBox="0 0 24 24"
          fill={s <= Math.floor(rating) ? "#FBBF24" : "#E5E7EB"}>
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const [selectedSize, setSelectedSize] = useState("");
  const [wishlist, setWishlist]         = useState(false);
  const [added, setAdded]               = useState(false);

  const handleCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const badge = badgeStyles[product.badge] || { bg: "#1F2937", color: "#fff" };

  return (
    <div
      style={{
        background: "#fff", borderRadius: "18px", overflow: "hidden",
        boxShadow: "0 2px 14px rgba(0,0,0,0.07)",
        transition: "transform 0.25s, box-shadow 0.25s",
        display: "flex", flexDirection: "column",
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-7px)"; e.currentTarget.style.boxShadow = "0 18px 40px rgba(0,0,0,0.13)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)";    e.currentTarget.style.boxShadow = "0 2px 14px rgba(0,0,0,0.07)"; }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: "240px", overflow: "hidden", background: "#F3F4F6" }}>
        <img src={product.image} alt={product.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.07)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        />
        {/* Badge */}
        <span style={{
          position: "absolute", top: "12px", left: "12px",
          background: badge.bg, color: badge.color,
          fontSize: "10px", fontWeight: 700,
          padding: "4px 11px", borderRadius: "20px",
          textTransform: "uppercase", letterSpacing: "0.6px",
        }}>{product.badge}</span>

        {/* Discount */}
        <span style={{
          position: "absolute", bottom: "12px", left: "12px",
          background: "#FEE2E2", color: "#DC2626",
          fontSize: "11px", fontWeight: 700,
          padding: "3px 9px", borderRadius: "8px",
        }}>-{product.discount}%</span>

        {/* Wishlist */}
        <button onClick={() => setWishlist(!wishlist)} style={{
          position: "absolute", top: "12px", right: "12px",
          background: "white", border: "none", borderRadius: "50%",
          width: "34px", height: "34px",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          transition: "transform 0.2s",
        }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.15)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        >
          <svg width="17" height="17" viewBox="0 0 24 24"
            fill={wishlist ? "#EF4444" : "none"}
            stroke={wishlist ? "#EF4444" : "#9CA3AF"} strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      {/* Body */}
      <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "9px", flex: 1 }}>
        <span style={{ fontSize: "10px", fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "1px" }}>
          {product.category}
        </span>

        <h3 style={{ margin: 0, fontSize: "15px", fontWeight: 700, color: "#111827", lineHeight: 1.4 }}>
          {product.name}
        </h3>

        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <StarRating rating={product.rating} />
          <span style={{ fontSize: "12px", fontWeight: 700, color: "#111827" }}>{product.rating}</span>
          <span style={{ fontSize: "11px", color: "#9CA3AF" }}>({product.reviews.toLocaleString()})</span>
        </div>

        {/* Size selector */}
        <div>
          <p style={{ margin: "0 0 6px", fontSize: "11px", fontWeight: 600, color: "#6B7280" }}>SELECT SIZE:</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {product.sizes.map(size => (
              <button key={size} onClick={() => setSelectedSize(size)} style={{
                padding: "4px 10px", borderRadius: "8px", cursor: "pointer",
                fontSize: "11px", fontWeight: 700, transition: "all 0.15s",
                border: selectedSize === size ? "2px solid #111827" : "1.5px solid #E5E7EB",
                background: selectedSize === size ? "#111827" : "white",
                color: selectedSize === size ? "white" : "#374151",
              }}>{size}</button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "19px", fontWeight: 800, color: "#111827" }}>
            Rs. {product.price.toLocaleString()}
          </span>
          <span style={{ fontSize: "12px", color: "#9CA3AF", textDecoration: "line-through" }}>
            Rs. {product.originalPrice.toLocaleString()}
          </span>
        </div>

        {/* Cart Button */}
        <button onClick={handleCart} style={{
          marginTop: "auto",
          display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
          background: added ? "#10B981" : "#111827",
          color: "white", border: "none", borderRadius: "12px",
          padding: "12px", fontSize: "13px", fontWeight: 700,
          cursor: "pointer", transition: "all 0.2s", width: "100%",
        }}>
          {added
            ? <><span>✓</span> Added to Cart!</>
            : <><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>Add to Cart</>
          }
        </button>
      </div>
    </div>
  );
}

export default function Mans() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy]                 = useState("rating");
  const [view, setView]                     = useState("grid"); // grid | list

  const filtered = products
    .filter(p => activeCategory === "All" || p.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === "rating")      return b.rating - a.rating;
      if (sortBy === "price-low")   return a.price - b.price;
      if (sortBy === "price-high")  return b.price - a.price;
      if (sortBy === "reviews")     return b.reviews - a.reviews;
      return 0;
    });

  return (
    <>

      <main style={{ fontFamily: "'Segoe UI', sans-serif", background: "#F8F8F8", minHeight: "100vh" }}>

        {/* ── Hero ── */}
        <section style={{
          background: "linear-gradient(135deg, #0F0F0F 0%, #1F2937 55%, #374151 100%)",
          padding: "70px 24px 50px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* decorative lines */}
          {[...Array(5)].map((_, i) => (
            <div key={i} style={{
              position: "absolute",
              width: "1px",
              height: "100%",
              top: 0,
              left: `${15 + i * 18}%`,
              background: "rgba(255,255,255,0.04)",
            }} />
          ))}

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "30px", padding: "6px 20px", marginBottom: "18px",
            }}>
              <span style={{ fontSize: "14px" }}>👔</span>
              <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "12px", fontWeight: 700, letterSpacing: "2px" }}>
                MEN'S COLLECTION
              </span>
            </div>

            <h1 style={{
              color: "white", fontSize: "clamp(30px, 5vw, 58px)",
              fontWeight: 900, margin: "0 0 14px", letterSpacing: "-1px",
            }}>
              Dress Like a <span style={{
                background: "linear-gradient(90deg, #FBBF24, #F59E0B)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>King</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "15px", maxWidth: "460px", margin: "0 auto 30px" }}>
              Premium men's fashion — from sharp formals to casual streetwear. Style that speaks.
            </p>

            {/* Stats bar */}
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
              {[
                { num: "500+", label: "Styles" },
                { num: "4.8★", label: "Avg Rating" },
                { num: "50K+", label: "Happy Men" },
                { num: "Free", label: "Delivery" },
              ].map(s => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <p style={{ margin: "0 0 2px", color: "#FBBF24", fontSize: "20px", fontWeight: 900 }}>{s.num}</p>
                  <p style={{ margin: 0, color: "rgba(255,255,255,0.5)", fontSize: "11px", letterSpacing: "1px" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Content ── */}
        <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "40px 20px" }}>

          {/* Toolbar */}
          <div style={{
            display: "flex", flexWrap: "wrap",
            justifyContent: "space-between", alignItems: "center",
            gap: "16px", marginBottom: "28px",
          }}>
            {/* Category pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                  padding: "8px 16px", borderRadius: "30px", border: "none",
                  cursor: "pointer", fontSize: "12px", fontWeight: 700,
                  transition: "all 0.2s",
                  background: activeCategory === cat ? "#111827" : "white",
                  color:      activeCategory === cat ? "white"   : "#4B5563",
                  boxShadow:  activeCategory === cat
                    ? "0 4px 14px rgba(17,24,39,0.35)"
                    : "0 1px 4px rgba(0,0,0,0.08)",
                }}>{cat}</button>
              ))}
            </div>

            {/* Right controls */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <select value={sortBy} onChange={e => setSortBy(e.target.value)} style={{
                padding: "9px 14px", borderRadius: "10px",
                border: "1px solid #E5E7EB", background: "white",
                fontSize: "13px", color: "#374151", fontWeight: 600,
                cursor: "pointer", outline: "none",
              }}>
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviews</option>
                <option value="price-low">Price: Low → High</option>
                <option value="price-high">Price: High → Low</option>
              </select>

              {/* View toggle */}
              <div style={{ display: "flex", background: "white", borderRadius: "10px", overflow: "hidden", border: "1px solid #E5E7EB" }}>
                {["grid", "list"].map(v => (
                  <button key={v} onClick={() => setView(v)} style={{
                    padding: "9px 13px", border: "none", cursor: "pointer",
                    background: view === v ? "#111827" : "white",
                    color:      view === v ? "white"   : "#6B7280",
                    transition: "all 0.2s", fontSize: "14px",
                  }}>
                    {v === "grid" ? "⊞" : "☰"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Count */}
          <p style={{ color: "#6B7280", fontSize: "13px", marginBottom: "24px" }}>
            Showing <strong style={{ color: "#111827" }}>{filtered.length}</strong> products
            {activeCategory !== "All" && <> in <strong style={{ color: "#7C3AED" }}>{activeCategory}</strong></>}
          </p>

          {/* Grid */}
          {view === "grid" ? (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(255px, 1fr))",
              gap: "24px",
            }}>
              {filtered.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {filtered.map(p => (
                <div key={p.id} style={{
                  background: "white", borderRadius: "16px",
                  padding: "16px", display: "flex", gap: "20px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                  alignItems: "center",
                }}>
                  <img src={p.image} alt={p.name} style={{
                    width: "100px", height: "100px", objectFit: "cover",
                    borderRadius: "12px", flexShrink: 0,
                  }} />
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: "10px", color: "#6B7280", fontWeight: 700, textTransform: "uppercase" }}>{p.category}</span>
                    <h3 style={{ margin: "4px 0 6px", fontSize: "15px", fontWeight: 700, color: "#111827" }}>{p.name}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
                      <StarRating rating={p.rating} />
                      <span style={{ fontSize: "12px", color: "#6B7280" }}>({p.reviews.toLocaleString()})</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ fontSize: "17px", fontWeight: 800, color: "#111827" }}>Rs. {p.price.toLocaleString()}</span>
                      <span style={{ fontSize: "12px", color: "#9CA3AF", textDecoration: "line-through" }}>Rs. {p.originalPrice.toLocaleString()}</span>
                      <span style={{ fontSize: "11px", background: "#FEE2E2", color: "#DC2626", padding: "2px 8px", borderRadius: "6px", fontWeight: 700 }}>-{p.discount}%</span>
                    </div>
                  </div>
                  <button style={{
                    background: "#111827", color: "white", border: "none",
                    borderRadius: "12px", padding: "12px 20px",
                    fontSize: "13px", fontWeight: 700, cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}>Add to Cart</button>
                </div>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 20px", color: "#9CA3AF" }}>
              <div style={{ fontSize: "48px" }}>👔</div>
              <p style={{ fontWeight: 600, fontSize: "16px" }}>No products found!</p>
            </div>
          )}

          {/* Style Guide Banner */}
          <div style={{
            marginTop: "60px",
            background: "linear-gradient(135deg, #1F2937, #374151)",
            borderRadius: "20px", padding: "40px 32px",
            display: "flex", flexWrap: "wrap",
            justifyContent: "space-between", alignItems: "center",
            gap: "20px",
          }}>
            <div>
              <h3 style={{ color: "white", margin: "0 0 8px", fontSize: "22px", fontWeight: 800 }}>
                Not Sure What to Wear? 🤔
              </h3>
              <p style={{ color: "rgba(255,255,255,0.6)", margin: 0, fontSize: "14px" }}>
                Let our style experts help you build the perfect wardrobe.
              </p>
            </div>
            <button style={{
              background: "#FBBF24", color: "#111827", border: "none",
              borderRadius: "12px", padding: "14px 28px",
              fontSize: "14px", fontWeight: 800, cursor: "pointer",
              whiteSpace: "nowrap",
            }}>
              Get Style Advice →
            </button>
          </div>

          {/* Feature cards */}
          <div style={{
            marginTop: "40px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}>
            {[
              { icon: "✂️", title: "Perfect Fit",      desc: "Tailored cuts for every body type"     },
              { icon: "🧵", title: "Premium Fabric",   desc: "Breathable, durable, long-lasting"     },
              { icon: "🚚", title: "Fast Shipping",    desc: "Delivered within 2–4 business days"    },
              { icon: "↩️", title: "Easy Exchange",   desc: "Size issue? Swap it hassle-free"       },
            ].map(f => (
              <div key={f.title} style={{
                background: "white", borderRadius: "16px",
                padding: "22px", textAlign: "center",
                boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                transition: "transform 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div style={{ fontSize: "28px", marginBottom: "10px" }}>{f.icon}</div>
                <p style={{ margin: "0 0 5px", fontWeight: 700, color: "#111827", fontSize: "14px" }}>{f.title}</p>
                <p style={{ margin: 0, color: "#9CA3AF", fontSize: "12px", lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

    </>
  );
}