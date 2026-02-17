export default function AsmitPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Asmit's Page 🚀
        </h1>

        <p className="text-gray-600 mb-6">
          This is my static page contribution to the ecommerce project.
        </p>

        <a href="/">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition duration-300">
            Go Back Home
          </button>
        </a>
      </div>
    </div>
  );
}
