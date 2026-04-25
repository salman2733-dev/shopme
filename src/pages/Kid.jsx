import React, { useState } from "react";


const products = [
  {
    id: 1,
    name: "Rainbow Puffer Jacket",
    category: "Jackets",
    age: "3-5 yrs",
    price: 3299,
    originalPrice: 4999,
    rating: 4.9,
    reviews: 1243,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=400&fit=crop",
    badge: "Best Seller",
    color: "#FF6B6B",
    discount: 34,
  },
  {
    id: 2,
    name: "Dino Print T-Shirt",
    category: "T-Shirts",
    age: "5-7 yrs",
    price: 899,
    originalPrice: 1400,
    rating: 4.8,
    reviews: 3210,
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400&h=400&fit=crop",
    badge: "Fan Fav",
    color: "#6BCB77",
    discount: 36,
  },
  {
    id: 3,
    name: "Fluffy Bear Hoodie",
    category: "Hoodies",
    age: "2-4 yrs",
    price: 2199,
    originalPrice: 3200,
    rating: 4.9,
    reviews: 876,
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=400&fit=crop",
    badge: "Trending",
    color: "#FFD93D",
    discount: 31,
  },
  {
    id: 4,
    name: "Floral Summer Dress",
    category: "Dresses",
    age: "4-6 yrs",
    price: 1799,
    originalPrice: 2800,
    rating: 4.7,
    reviews: 2104,
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=400&fit=crop",
    badge: "New Arrival",
    color: "#FF9ECA",
    discount: 36,
  },
  {
    id: 5,
    name: "Cargo Jogger Pants",
    category: "Pants",
    age: "6-8 yrs",
    price: 1499,
    originalPrice: 2200,
    rating: 4.7,
    reviews: 1560,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=400&fit=crop",
    badge: "Top Pick",
    color: "#4D96FF",
    discount: 32,
  },
  {
    id: 6,
    name: "Cozy Knit Sweater",
    category: "Sweaters",
    age: "3-5 yrs",
    price: 1999,
    originalPrice: 3000,
    rating: 4.8,
    reviews: 987,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=400&fit=crop",
    badge: "Cozy Pick",
    color: "#C77DFF",
    discount: 33,
  },
  {
    id: 7,
    name: "Space Explorer Set",
    category: "Sets",
    age: "5-8 yrs",
    price: 2799,
    originalPrice: 4200,
    rating: 4.9,
    reviews: 743,
    image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=400&h=400&fit=crop",
    badge: "Bundle Deal",
    color: "#FF6B35",
    discount: 33,
  },
  {
    id: 8,
    name: "Classic Denim Overalls",
    category: "Overalls",
    age: "2-4 yrs",
    price: 2499,
    originalPrice: 3800,
    rating: 4.8,
    reviews: 1890,
    image: "https://images.unsplash.com/photo-1476234251651-f353703a034d?w=400&h=400&fit=crop",
    badge: "Classic",
    color: "#4D96FF",
    discount: 34,
  },
];

const categories = ["All", "T-Shirts", "Hoodies", "Dresses", "Jackets", "Pants", "Sweaters", "Sets", "Overalls"];
const ageGroups = ["All Ages", "2-4 yrs", "3-5 yrs", "4-6 yrs", "5-7 yrs", "5-8 yrs", "6-8 yrs"];

const badgeColors = {
  "Best Seller": "#FF6B35",
  "Fan Fav": "#EC4899",
  Trending: "#10B981",
  "New Arrival": "#0EA5E9",
  "Top Pick": "#7C3AED",
  "Cozy Pick": "#C77DFF",
  "Bundle Deal": "#F59E0B",
  Classic: "#6366F1",
};

const floatingEmojis = ["🧸", "⭐", "🎈", "🌈", "🦄", "🎀", "🚀", "🌸"];

function StarRating({ rating }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width="13" height="13" viewBox="0 0 24 24"
          fill={star <= Math.floor(rating) ? "#FBBF24" : "#E5E7EB"}>
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const [wishlist, setWishlist] = useState(false);
  const [added, setAdded] = useState(false);

  const handleCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div style={{
      background: "#fff",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
      transition: "transform 0.25s, box-shadow 0.25s",
      display: "flex",
      flexDirection: "column",
      cursor: "pointer",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-7px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.13)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.07)"; }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: "230px", overflow: "hidden", background: "#FFF7ED" }}>
        <img src={product.image} alt={product.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.07)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        />
        {/* Badge */}
        <span style={{
          position: "absolute", top: "12px", left: "12px",
          background: badgeColors[product.badge] || "#7C3AED",
          color: "white", fontSize: "10px", fontWeight: 700,
          padding: "4px 10px", borderRadius: "20px",
          textTransform: "uppercase", letterSpacing: "0.5px",
        }}>{product.badge}</span>

        {/* Discount */}
        <span style={{
          position: "absolute", bottom: "12px", left: "12px",
          background: "#FEE2E2", color: "#DC2626",
          fontSize: "11px", fontWeight: 700,
          padding: "3px 9px", borderRadius: "8px",
        }}>-{product.discount}%</span>

        {/* Age Tag */}
        <span style={{
          position: "absolute", bottom: "12px", right: "12px",
          background: "rgba(255,255,255,0.92)",
          color: "#374151", fontSize: "11px", fontWeight: 700,
          padding: "3px 9px", borderRadius: "8px",
        }}>👦 {product.age}</span>

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
      <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{
            fontSize: "10px", fontWeight: 700, color: product.color,
            textTransform: "uppercase", letterSpacing: "1px",
          }}>{product.category}</span>
          <span style={{
            fontSize: "10px", background: "#F3F4F6", color: "#6B7280",
            padding: "2px 8px", borderRadius: "6px", fontWeight: 600,
          }}>{product.age}</span>
        </div>

        <h3 style={{ margin: 0, fontSize: "15px", fontWeight: 700, color: "#1F2937", lineHeight: 1.4 }}>
          {product.name}
        </h3>

        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <StarRating rating={product.rating} />
          <span style={{ fontSize: "12px", fontWeight: 700, color: "#1F2937" }}>{product.rating}</span>
          <span style={{ fontSize: "11px", color: "#9CA3AF" }}>({product.reviews.toLocaleString()})</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "18px", fontWeight: 800, color: "#111827" }}>
            Rs. {product.price.toLocaleString()}
          </span>
          <span style={{ fontSize: "12px", color: "#9CA3AF", textDecoration: "line-through" }}>
            Rs. {product.originalPrice.toLocaleString()}
          </span>
        </div>

        <button onClick={handleCart} style={{
          marginTop: "auto",
          display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
          background: added ? "#10B981" : product.color,
          color: "white", border: "none", borderRadius: "12px",
          padding: "11px", fontSize: "13px", fontWeight: 700,
          cursor: "pointer", transition: "all 0.2s", width: "100%",
        }}>
          {added ? (
            <><span>✓</span> Added to Cart!</>
          ) : (
            <><span>🛒</span> Add to Cart</>
          )}
        </button>
      </div>
    </div>
  );
}

export default function Kid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeAge, setActiveAge] = useState("All Ages");
  const [sortBy, setSortBy] = useState("rating");

  const filtered = products
    .filter(p => activeCategory === "All" || p.category === activeCategory)
    .filter(p => activeAge === "All Ages" || p.age === activeAge)
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "reviews") return b.reviews - a.reviews;
      return 0;
    });

  return (
    <>

      <main style={{ fontFamily: "'Segoe UI', sans-serif", background: "#FFFBF5", minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{
          background: "linear-gradient(135deg, #FF6B6B 0%, #FFD93D 50%, #6BCB77 100%)",
          padding: "60px 24px 40px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Floating emojis */}
          {floatingEmojis.map((emoji, i) => (
            <span key={i} style={{
              position: "absolute",
              fontSize: `${18 + (i % 3) * 8}px`,
              top: `${10 + (i * 11) % 70}%`,
              left: `${(i * 13) % 95}%`,
              opacity: 0.25,
              animation: `float${i % 2} ${3 + i * 0.4}s ease-in-out infinite`,
              pointerEvents: "none",
              userSelect: "none",
            }}>{emoji}</span>
          ))}

          <style>{`
            @keyframes float0 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
            @keyframes float1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(10px)} }
          `}</style>

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(255,255,255,0.35)", backdropFilter: "blur(8px)",
              borderRadius: "30px", padding: "6px 20px", marginBottom: "16px",
            }}>
              <span style={{ fontSize: "16px" }}>🧸</span>
              <span style={{ color: "white", fontSize: "13px", fontWeight: 700, letterSpacing: "1px" }}>
                KIDS COLLECTION
              </span>
            </div>

            <h1 style={{
              color: "white", fontSize: "clamp(28px, 5vw, 54px)",
              fontWeight: 900, margin: "0 0 12px",
              textShadow: "0 3px 20px rgba(0,0,0,0.2)",
            }}>
              Little Ones, Big Style! 🎈
            </h1>
            <p style={{
              color: "rgba(255,255,255,0.9)", fontSize: "15px",
              maxWidth: "480px", margin: "0 auto",
            }}>
              Colorful, comfy & cute clothes for your little superstars ✨
            </p>

            {/* Stats */}
            <div style={{
              display: "flex", justifyContent: "center", flexWrap: "wrap",
              gap: "24px", marginTop: "28px",
            }}>
              {[
                { emoji: "👕", label: "200+ Styles" },
                { emoji: "🌈", label: "Safe Materials" },
                { emoji: "📦", label: "Fast Delivery" },
                { emoji: "🔄", label: "Easy Returns" },
              ].map(s => (
                <div key={s.label} style={{
                  background: "rgba(255,255,255,0.25)", backdropFilter: "blur(8px)",
                  borderRadius: "14px", padding: "10px 18px",
                  display: "flex", alignItems: "center", gap: "8px",
                }}>
                  <span style={{ fontSize: "18px" }}>{s.emoji}</span>
                  <span style={{ color: "white", fontWeight: 700, fontSize: "13px" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "36px 20px" }}>

          {/* Age Filter */}
          <div style={{ marginBottom: "20px" }}>
            <p style={{ fontSize: "13px", fontWeight: 700, color: "#6B7280", marginBottom: "10px", letterSpacing: "0.5px" }}>
              👦 SHOP BY AGE
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {ageGroups.map(age => (
                <button key={age} onClick={() => setActiveAge(age)} style={{
                  padding: "7px 16px", borderRadius: "30px", border: "none",
                  cursor: "pointer", fontSize: "12px", fontWeight: 700, transition: "all 0.2s",
                  background: activeAge === age ? "#FF6B6B" : "white",
                  color: activeAge === age ? "white" : "#4B5563",
                  boxShadow: activeAge === age ? "0 4px 14px rgba(255,107,107,0.35)" : "0 1px 4px rgba(0,0,0,0.08)",
                }}>
                  {age}
                </button>
              ))}
            </div>
          </div>

          {/* Category + Sort Row */}
          <div style={{
            display: "flex", flexWrap: "wrap",
            justifyContent: "space-between", alignItems: "center",
            gap: "16px", marginBottom: "28px",
          }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                  padding: "8px 16px", borderRadius: "30px", border: "none",
                  cursor: "pointer", fontSize: "12px", fontWeight: 700, transition: "all 0.2s",
                  background: activeCategory === cat ? "#6BCB77" : "white",
                  color: activeCategory === cat ? "white" : "#4B5563",
                  boxShadow: activeCategory === cat ? "0 4px 14px rgba(107,203,119,0.35)" : "0 1px 4px rgba(0,0,0,0.08)",
                }}>
                  {cat}
                </button>
              ))}
            </div>

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
          </div>

          {/* Count */}
          <p style={{ color: "#6B7280", fontSize: "13px", marginBottom: "24px" }}>
            Showing <strong style={{ color: "#1F2937" }}>{filtered.length}</strong> products
          </p>

          {/* Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(255px, 1fr))",
            gap: "24px",
          }}>
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 20px", color: "#9CA3AF" }}>
              <div style={{ fontSize: "48px" }}>🧸</div>
              <p style={{ fontWeight: 600, fontSize: "16px" }}>No items found for this filter!</p>
            </div>
          )}

          {/* Why Choose Us */}
          <section style={{ marginTop: "60px" }}>
            <h2 style={{
              textAlign: "center", fontSize: "24px", fontWeight: 800,
              color: "#1F2937", marginBottom: "28px",
            }}>
              Why Parents Love Us 💛
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
            }}>
              {[
                { icon: "🌿", title: "Skin-Safe Fabric", desc: "100% tested, soft on sensitive skin" },
                { icon: "🎨", title: "Fun Designs", desc: "Kids love our colorful prints" },
                { icon: "📏", title: "True to Size", desc: "Accurate sizing for all age groups" },
                { icon: "💰", title: "Best Prices", desc: "Quality clothes at budget prices" },
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
                  <div style={{ fontSize: "30px", marginBottom: "10px" }}>{f.icon}</div>
                  <p style={{ margin: "0 0 6px", fontWeight: 700, color: "#1F2937", fontSize: "14px" }}>{f.title}</p>
                  <p style={{ margin: 0, color: "#9CA3AF", fontSize: "12px", lineHeight: 1.5 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

    </>
  );
}