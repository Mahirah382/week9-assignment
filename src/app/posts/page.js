import { connect } from "@/utils/utilities"
import PostCard from "@/components/PostCard"

export default async function PostsPage() {

    const db = connect()
    const posts = (await db.query("SELECT * FROM posts")).rows

    
    return(
        <div className="min-h-screen bg-linear-to-br from-blue-500 via-purple-500 to-indigo-600 py-16 px-6">
            <h2 className="text-4xl font-extrabold text-white text-center drop-shadow">All Posts</h2>
            <div className="grid gap-6">
                {posts.map ((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

