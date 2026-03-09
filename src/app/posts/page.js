import { connect } from "@/utils/utilities"
import PostCard from "@/components/PostCard"

export default async function PostsPage() {

    console.log("STEP 1: connecting");

    const db = connect()
    console.log("STEP 2: querying");

    const posts = (await db.query("SELECT * FROM posts")).rows
    console.log("STEP 3: rendering");

    
    return(
        <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-6 flex justify-center">All Posts</h2>
            <div className="flex flex-col gap-10 max-w-3xl w-full">
                {posts.map ((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

