export default async function addPost() {

    return(
        <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-xl shadow">
            <h1 className="text-3xl font-bold mb-6">Create a new post</h1>
            <form method="POST" action="/api/posts" className="space-y-4">
                <label htmlFor="title" className="block font-medium mb-1">Title:</label>
                <input name="title" required className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"/>
                <label htmlFor="content" className="block font-medium mb-1">Content:</label>
                <textarea name="content" required className="w-full border rounded-lg p-2 h-40 focus:ring focus:ring-blue-300"/>
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">Create Post</button>
            </form>
        </div>
    )
}