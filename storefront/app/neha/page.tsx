export default function NehaPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-6">
      <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-xl w-full text-center">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Neha's DX Page 🚀
        </h1>

        <p className="text-gray-600 mb-8 leading-relaxed">
          This is a static page created for the DX activity.
          Clean, minimal, and properly structured with
          a clear visual hierarchy.
        </p>

        <a
          href="/"
          className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-semibold shadow-lg transition hover:scale-105 hover:shadow-xl"
        >
          Back to Home
        </a>

      </div>
    </div>
  );
}

