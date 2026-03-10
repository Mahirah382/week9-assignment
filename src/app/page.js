export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-300 via-purple-400 to-indigo-500 flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl mx-auto text-center text-white space-y-10">

        <h1 className="text-5xl sm:text-6xl font-extrabold drop-shadow-lg">
          Weekly Blogs
        </h1>

        <p className="text-lg sm:text-xl max-w-2xl mx-auto opacity-90">
          A colourful space for ideas, stories, and weekly reflections — crafted with care and shared with the world.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href="/posts"
            className="bg-white text-blue-700 px-6 py-3 rounded-lg text-lg font-semibold shadow hover:shadow-lg hover:bg-gray-100 transition"
          >
            View Posts
          </a>

          <a
            href="/add-posts"
            className="bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow hover:bg-blue-800 transition"
          >
            Write a Post
          </a>
        </div>

        <div className="bg-white text-gray-800 shadow-xl rounded-xl p-8 mt-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">What’s this blog about?</h2>
          <p className="text-gray-600 leading-relaxed">
            Every week brings something new — a thought, a lesson, a story worth sharing.
            This blog captures those moments and turns them into something meaningful.
          </p>
        </div>

      </div>
    </div>
  );
}
