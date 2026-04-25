import React, { useState, useEffect, useRef } from 'react';

const mockProducts = [
  { id: 1, name: "Premium Wireless Headphones", price: "₹1299.00", isFeatured: false, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" },
  { id: 2, name: "Minimalist Smartwatch", price: "₹4199.00", isFeatured: true, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" },
  { id: 3, name: "Ergonomic Office Chair", price: "₹9499.00", isFeatured: false, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&q=80" },
  { id: 4, name: "Mechanical Keyboard", price: "₹2149.00", isFeatured: true, image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80" },
  { id: 5, name: "4K Ultra HD Monitor", price: "₹25349.00", isFeatured: false, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80" },
  { id: 6, name: "Professional Studio Mic", price: "₹11129.00", isFeatured: false, image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&q=80" },
  { id: 7, name: "Noise-Cancelling Earbuds", price: "₹5159.00", isFeatured: false, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80" },
  { id: 8, name: "Wireless Gaming Mouse", price: "₹2789.00", isFeatured: false, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80" },
];

export default function App() {
  const [products, setProducts] = useState(mockProducts);

  const toggleFeatured = (id) => {
    setProducts(products.map(p => p.id === id ? { ...p, isFeatured: !p.isFeatured } : p));
  };

  const featuredProducts = products.filter(p => p.isFeatured);
  const regularProducts = products.filter(p => !p.isFeatured);

  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden font-sans selection:bg-indigo-500 selection:text-white">

      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto space-y-10">

          <header className="sticky z-50 flex items-center justify-center md:flex-row md:items-center md:justify-between bg-white/70 backdrop-blur-xl px-6 py-2 rounded-b-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 transition-all duration-300">
            <div className="flex flex-col items-center justify-center w-full">
              <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 tracking-tight">Product Catalogue</h1>
              <p className="text-sm font-medium text-slate-500 mt-1">Manage your premium products</p>
            </div>
          </header>

          <section className="relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] bg-gradient-to-l from-indigo-500/50 to-transparent flex-1 rounded-full"></div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Featured Products</h2>
              <div className="h-[2px] bg-gradient-to-r from-indigo-500/50 to-transparent flex-1 rounded-full"></div>
            </div>

            {featuredProducts.length === 0 ? (
              <div className="bg-white/60 backdrop-blur-md rounded-3xl border border-white p-16 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-indigo-50 mb-6 shadow-inner">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M20 12V7a2 2 0 00-1-1.73l-6-3.5a2 2 0 00-2 0l-6 3.5A2 2 0 004 7v5m16 0l-8 4-8-4m16 0v5a2 2 0 01-1 1.73l-6 3.5a2 2 0 01-2 0l-6-3.5A2 2 0 014 17v-5"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">No items featured</h3>
                <p className="text-slate-500 font-medium">Elevate products from the catalog to display them here.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {featuredProducts.map(product => (
                  <ProductCard key={product.id} product={product} onToggle={() => toggleFeatured(product.id)} isFeaturedSection={true} />
                ))}
              </div>
            )}
          </section>


          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] bg-gradient-to-l from-slate-200 to-transparent flex-1 rounded-full"></div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Other Products</h2>
              <div className="h-[2px] bg-gradient-to-r from-slate-200 to-transparent flex-1 rounded-full"></div>
            </div>
            {(regularProducts.length === 0) ? (
              <div className="bg-white/60 backdrop-blur-md rounded-3xl border border-white p-16 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-slate-50 mb-6 shadow-inner">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M20 12V7a2 2 0 00-1-1.73l-6-3.5a2 2 0 00-2 0l-6 3.5A2 2 0 004 7v5m16 0l-8 4-8-4m16 0v5a2 2 0 01-1 1.73l-6 3.5a2 2 0 01-2 0l-6-3.5A2 2 0 014 17v-5"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">All products are featured</h3>
                <p className="text-slate-500 font-medium">All products are currently in the featured section.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {regularProducts.map(product => (
                  <ProductCard key={product.id} product={product} onToggle={() => toggleFeatured(product.id)} isFeaturedSection={false} />
                ))}
              </div>
            )}
          </section>

        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, onToggle, isFeaturedSection }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const btn = buttonRef.current;
    if (btn) {
      btn.addEventListener('click', onToggle);
      return () => btn.removeEventListener('click', onToggle);
    }
  }, [onToggle]);

  return (
    <div className={`group bg-white/80 backdrop-blur-sm rounded-[2rem] border overflow-hidden transition-all duration-500 flex flex-col transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] ${isFeaturedSection ? 'border-indigo-100 shadow-[0_8px_30px_rgb(79,70,229,0.06)]' : 'border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]'}`}>
      <div className="relative overflow-hidden h-64 p-3 pb-0">
        <div className="w-full h-full rounded-3xl overflow-hidden relative shadow-inner">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {product.isFeatured && (
            <div className="absolute top-4 right-4 z-10 animate-fade-in-down">
              <div className="bg-green backdrop-blur-sm rounded-full px-1 py-1 shadow-lg">
                <s-badge tone="success">Featured</s-badge>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex flex-col gap-1 mb-4">
          <h3 className="text-3xl font-bold text-slate-800 line-clamp-1 leading-tight group-hover:text-indigo-600 transition-colors" title={product.name}>{product.name}</h3>
        </div>
        <hr />
        <div className="mt-auto flex flex-col gap-3 pt-2">
          <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            {product.price}
          </span>

          <s-button
            ref={buttonRef}
            variant={product.isFeatured ? "tertiary" : "primary"}
            tone={product.isFeatured ? "critical" : "auto"}
          >
            {product.isFeatured ? 'Remove' : 'Add to Featured'}
          </s-button>
        </div>
      </div>
    </div>
  );
}
