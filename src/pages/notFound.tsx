// src/pages/NotFound.jsx
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white p-6">
      <div className="w-full max-w-4xl rounded-2xl bg-white shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Illustration */}
        <div className="flex items-center justify-center p-10 bg-[linear-gradient(135deg,#f5f3ff_0%,#eef2ff_100%)]">
          <svg
            className="w-64 h-64"
            viewBox="0 0 600 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="404 illustration"
          >
            <rect x="50" y="50" width="500" height="500" rx="48" fill="#fff" />
            <g
              transform="translate(120,120)"
              fill="none"
              stroke="#6b21a8"
              strokeWidth="18"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 220 C 60 90, 180 90, 240 220" />
              <path d="M280 200 L340 120" />
              <path d="M340 200 L280 120" />
            </g>
            <text
              x="300"
              y="490"
              textAnchor="middle"
              fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto"
              fontSize="22"
              fill="#7c3aed"
            >
              Oops! Page not found
            </text>
          </svg>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 flex flex-col justify-center gap-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
              404
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              We can’t find the page you’re looking for.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            The page may have been moved, deleted, or the URL is incorrect. Try
            returning home or check the link.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 px-5 py-3 bg-purple-700 text-white rounded-xl shadow hover:bg-purple-800 transition"
              aria-label="Go to homepage"
            >
              Go home
            </button>

            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 px-5 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition"
              aria-label="Go back"
            >
              -Go back
            </button>
          </div>

          <div className="mt-4 text-xs text-gray-400">
            <strong>Tip:</strong> Check for typos in the URL or try searching
            from the homepage.
          </div>
        </div>
      </div>
    </main>
  );
}
