import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    category: "Electronics",
    price: 12999,
    originalPrice: 18999,
    rating: 4.9,
    reviews: 2847,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    badge: "Best Seller",
    discount: 32,
  },
  {
    id: 2,
    name: "Leather Crossbody Bag",
    category: "Fashion",
    price: 4599,
    originalPrice: 6999,
    rating: 4.8,
    reviews: 1923,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    badge: "Top Rated",
    discount: 34,
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    category: "Electronics",
    price: 8499,
    originalPrice: 12000,
    rating: 4.8,
    reviews: 3412,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    badge: "Editor's Pick",
    discount: 29,
  },
  {
    id: 4,
    name: "Organic Face Serum",
    category: "Beauty",
    price: 2199,
    originalPrice: 3500,
    rating: 4.9,
    reviews: 5610,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    badge: "Fan Favorite",
    discount: 37,
  },
  {
    id: 5,
    name: "Running Sneakers Pro",
    category: "Footwear",
    price: 6799,
    originalPrice: 9500,
    rating: 4.7,
    reviews: 2190,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    badge: "Trending",
    discount: 28,
  },
  {
    id: 6,
    name: "Stainless Steel Water Bottle",
    category: "Lifestyle",
    price: 1299,
    originalPrice: 2000,
    rating: 4.8,
    reviews: 8920,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    badge: "Most Loved",
    discount: 35,
  },
  {
    id: 7,
    name: "Minimalist Desk Lamp",
    category: "Home",
    price: 3499,
    originalPrice: 5200,
    rating: 4.7,
    reviews: 1450,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
    badge: "Top Rated",
    discount: 33,
  },
  {
    id: 8,
    name: "Silk Pajama Set",
    category: "Fashion",
    price: 5200,
    originalPrice: 7800,
    rating: 4.9,
    reviews: 987,
    image: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?w=400&h=400&fit=crop",
    badge: "Luxury Pick",
    discount: 33,
  },
];

const categories = ["All", "Electronics", "Fashion", "Beauty", "Footwear", "Lifestyle", "Home"];

const badgeColors = {
  "Best Seller": "#FF6B35",
  "Top Rated": "#7C3AED",
  "Editor's Pick": "#0EA5E9",
  "Fan Favorite": "#EC4899",
  Trending: "#10B981",
  "Most Loved": "#F59E0B",
  "Luxury Pick": "#6366F1",
};

function StarRating({ rating }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={star <= Math.floor(rating) ? "#FBBF24" : star - 0.5 <= rating ? "url(#half)" : "#D1D5DB"}
        >
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="#FBBF24" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const [wishlist, setWishlist] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1800);
  };

  return (
    <div className="product-card">
      <div className="card-image-wrap">
        <img src={product.image} alt={product.name} className="card-img" />
        <span
          className="badge-tag"
          style={{ background: badgeColors[product.badge] || "#7C3AED" }}
        >
          {product.badge}
        </span>
        <button
          className={`wishlist-btn ${wishlist ? "active" : ""}`}
          onClick={() => setWishlist(!wishlist)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={wishlist ? "#EF4444" : "none"} stroke={wishlist ? "#EF4444" : "#9CA3AF"} strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        <div className="discount-badge">-{product.discount}%</div>
      </div>

      <div className="card-body">
        <p className="card-category">{product.category}</p>
        <h3 className="card-name">{product.name}</h3>

        <div className="rating-row">
          <StarRating rating={product.rating} />
          <span className="rating-num">{product.rating}</span>
          <span className="reviews">({product.reviews.toLocaleString()})</span>
        </div>

        <div className="price-row">
          <span className="price">Rs. {product.price.toLocaleString()}</span>
          <span className="original-price">Rs. {product.originalPrice.toLocaleString()}</span>
        </div>

        <button className={`cart-btn ${addedToCart ? "added" : ""}`} onClick={handleCart}>
          {addedToCart ? (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Added!
            </>
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              Add to Cart
            </>
          )}
        </button>
      </div>

      <style>{`
        .product-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          display: flex;
          flex-direction: column;
        }
        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.13);
        }
        .card-image-wrap {
          position: relative;
          overflow: hidden;
          height: 220px;
          background: #F9FAFB;
        }
        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .product-card:hover .card-img {
          transform: scale(1.06);
        }
        .badge-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          color: white;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .discount-badge {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: #FEE2E2;
          color: #DC2626;
          font-size: 12px;
          font-weight: 700;
          padding: 3px 9px;
          border-radius: 8px;
        }
        .wishlist-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          background: white;
          border: none;
          border-radius: 50%;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          transition: transform 0.2s;
        }
        .wishlist-btn:hover { transform: scale(1.15); }
        .card-body {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }
        .card-category {
          font-size: 11px;
          font-weight: 600;
          color: #7C3AED;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0;
        }
        .card-name {
          font-size: 15px;
          font-weight: 700;
          color: #1F2937;
          margin: 0;
          line-height: 1.4;
        }
        .rating-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .rating-num {
          font-size: 13px;
          font-weight: 700;
          color: #1F2937;
        }
        .reviews {
          font-size: 12px;
          color: #9CA3AF;
        }
        .price-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .price {
          font-size: 18px;
          font-weight: 800;
          color: #111827;
        }
        .original-price {
          font-size: 13px;
          color: #9CA3AF;
          text-decoration: line-through;
        }
        .cart-btn {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #1F2937;
          color: white;
          border: none;
          border-radius: 10px;
          padding: 11px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          width: 100%;
        }
        .cart-btn:hover { background: #374151; transform: scale(1.02); }
        .cart-btn.added { background: #10B981; }
      `}</style>
    </div>
  );
}

export default function Top() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("rating");

  const filtered = products
    .filter((p) => activeCategory === "All" || p.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "reviews") return b.reviews - a.reviews;
      return 0;
    });

  return (
    <>

      <main style={{ fontFamily: "'Segoe UI', sans-serif", background: "#F3F4F6", minHeight: "100vh" }}>
        {/* Hero Banner */}
        <section style={{
          background: "linear-gradient(135deg, #1F2937 0%, #7C3AED 60%, #EC4899 100%)",
          padding: "60px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.07) 0%, transparent 40%)",
          }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(255,255,255,0.15)", borderRadius: "30px",
              padding: "6px 18px", marginBottom: "16px",
            }}>
              <span style={{ fontSize: "18px" }}>⭐</span>
              <span style={{ color: "white", fontSize: "13px", fontWeight: 600, letterSpacing: "1px" }}>
                CUSTOMER FAVOURITES
              </span>
            </div>
            <h1 style={{
              color: "white", fontSize: "clamp(28px, 5vw, 52px)",
              fontWeight: 900, margin: "0 0 12px",
              textShadow: "0 2px 20px rgba(0,0,0,0.3)",
            }}>
              Top-Rated Products
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px", maxWidth: "500px", margin: "0 auto" }}>
              Handpicked by thousands of happy customers — only the best makes it here.
            </p>
          </div>
        </section>

        <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "40px 20px" }}>
          {/* Filters Row */}
          <div style={{
            display: "flex", flexWrap: "wrap", justifyContent: "space-between",
            alignItems: "center", gap: "16px", marginBottom: "32px",
          }}>
            {/* Category Pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "8px 18px", borderRadius: "30px", border: "none",
                    cursor: "pointer", fontSize: "13px", fontWeight: 600,
                    transition: "all 0.2s",
                    background: activeCategory === cat ? "#7C3AED" : "white",
                    color: activeCategory === cat ? "white" : "#4B5563",
                    boxShadow: activeCategory === cat ? "0 4px 14px rgba(124,58,237,0.35)" : "0 1px 4px rgba(0,0,0,0.08)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "13px", color: "#6B7280", fontWeight: 600 }}>Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: "8px 14px", borderRadius: "10px", border: "1px solid #E5E7EB",
                  background: "white", fontSize: "13px", color: "#374151",
                  fontWeight: 600, cursor: "pointer", outline: "none",
                }}
              >
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviews</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <p style={{ color: "#6B7280", fontSize: "14px", marginBottom: "24px" }}>
            Showing <strong style={{ color: "#1F2937" }}>{filtered.length}</strong> top-rated products
            {activeCategory !== "All" && <> in <strong style={{ color: "#7C3AED" }}>{activeCategory}</strong></>}
          </p>

          {/* Product Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "24px",
          }}>
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 20px", color: "#9CA3AF" }}>
              <div style={{ fontSize: "48px", marginBottom: "12px" }}>🔍</div>
              <p style={{ fontSize: "16px", fontWeight: 600 }}>No products found in this category</p>
            </div>
          )}

          {/* Trust Badges */}
          <div style={{
            marginTop: "60px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}>
            {[
              { icon: "🚚", title: "Free Delivery", desc: "On orders above Rs. 2,000" },
              { icon: "🔄", title: "Easy Returns", desc: "7-day hassle-free returns" },
              { icon: "🔒", title: "Secure Payment", desc: "100% safe & encrypted" },
              { icon: "⭐", title: "Verified Reviews", desc: "From real customers only" },
            ].map((badge) => (
              <div
                key={badge.title}
                style={{
                  background: "white", borderRadius: "14px",
                  padding: "20px", textAlign: "center",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "8px" }}>{badge.icon}</div>
                <p style={{ margin: "0 0 4px", fontWeight: 700, color: "#1F2937", fontSize: "15px" }}>{badge.title}</p>
                <p style={{ margin: 0, color: "#9CA3AF", fontSize: "12px" }}>{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

    </>
  );
}