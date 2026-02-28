import Image from "next/image"

async function getProducts() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/products?limit=8`,
      {
        headers: {
          "x-publishable-api-key":
            process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "",
        },
        cache: "no-store",
      }
    )

    if (!res.ok) {
      throw new Error("Failed to fetch products")
    }

    const data = await res.json()
    return data.products || []
  } catch (error) {
    console.error("Product fetch error:", error)
    return []
  }
}

export default async function HomePage() {
  const products = await getProducts()

  return (
    <main className="bg-white text-neutral-900">

      {/* ================= HERO SECTION ================= */}

      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tight leading-tight">
            Refined. Elevated. Essential.
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-neutral-200">
            Discover timeless silhouettes crafted with precision and purpose.
          </p>

          <div className="mt-10">
            <a
              href="/products"
              className="px-10 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 tracking-wide"
            >
              DISCOVER COLLECTION
            </a>
          </div>
        </div>
      </section>

      {/* ================= FEATURED TITLE ================= */}

      <section className="py-28 px-10 md:px-20">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.4em] text-sm text-neutral-500 mb-4">
            Curated Selection
          </p>
          <h2 className="text-5xl font-semibold tracking-tight">
            Signature Essentials
          </h2>
        </div>

        {/* ================= PRODUCTS GRID ================= */}

        {products.length === 0 ? (
          <p className="text-center text-neutral-500">
            No products available. Check API configuration.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
            {products.map((product: any) => {
              const price =
                product.variants?.[0]?.prices?.[0]?.amount

              return (
                <div
                  key={product.id}
                  className="group cursor-pointer"
                >
                  {/* Image Wrapper */}
                  <div className="relative overflow-hidden bg-neutral-100">
                    {product.thumbnail ? (
                      <Image
                        src={product.thumbnail}
                        alt={product.title}
                        width={500}
                        height={500}
                        className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-[380px] bg-neutral-200" />
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="mt-6 space-y-2">
                    <h3 className="text-lg font-medium tracking-wide">
                      {product.title}
                    </h3>

                    <p className="text-neutral-600 text-sm">
                      €
                      {price ? price / 100 : "—"}
                    </p>

                    <div className="pt-2">
                      <span className="text-sm uppercase tracking-widest border-b border-black pb-1 hover:opacity-60 transition">
                        View Product
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </section>

      {/* ================= BRAND STATEMENT ================= */}

      <section className="py-32 bg-neutral-50 text-center px-10 md:px-20">
        <h3 className="text-4xl font-semibold tracking-tight max-w-3xl mx-auto">
          Designed with intention. Built for longevity.
        </h3>

        <p className="mt-8 text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Our pieces are crafted from premium materials and engineered for
          enduring performance. Every detail reflects our commitment to
          refined minimalism and modern sophistication.
        </p>
      </section>

      {/* ================= FOOTER PREVIEW ================= */}

      <section className="py-20 border-t border-neutral-200 px-10 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-600">
          <p>© 2026 LUXE. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-black transition">
              Instagram
            </a>
            <a href="#" className="hover:text-black transition">
              Twitter
            </a>
            <a href="#" className="hover:text-black transition">
              Contact
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}