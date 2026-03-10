import { connect } from "@/utils/utilities"
import PostCard from "@/components/PostCard"

export default async function PostsPage({searchParams}) {
    const sort = searchParams.sort || "desc"
    const db = connect()
    const posts = (await db.query(`SELECT * FROM posts ORDER BY created_at ${sort === "asc"? "ASC": "DESC"}`)).rows

    
    return(
        <div className="min-h-screen bg-linear-to-br from-blue-300 via-purple-400 to-indigo-500 py-16 px-6">
            <h2 className="text-4xl font-extrabold text-white text-center drop-shadow">All Posts</h2>

            <div className="flex gap-4 justify-center">
            <a href="/posts?sort=asc" className="bg-white text-blue-700 px-4 m-5 py-2 rounded-lg shadow hover:bg-gray-100 transition">Sort Ascending</a>
          
            <a href="/posts?sort=desc" className="bg-white text-blue-700 px-4 m-5 py-2 rounded-lg shadow hover:bg-gray-100 transition">Sort Descending</a>
            </div>

            <div className="grid gap-6">
                {posts.map ((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

