import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 font-sans">
      <main className="flex w-full max-w-4xl flex-col items-center justify-center text-center px-8 py-20">

        <Image
          className="mb-8"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <h1 className="text-4xl font-bold text-white mb-6">
          Welcome to the Ecommerce Project 🚀
        </h1>

        <p className="text-lg text-gray-300 max-w-xl mb-10">
          This is the main homepage of our storefront.
          Click below to open my DX activity page.
        </p>

        <a
          href="/neha"
          className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-semibold shadow-lg transition hover:scale-105 hover:shadow-xl"
        >
          Open Neha DX Page 🚀
        </a>

      </main>
    </div>
  );
}
