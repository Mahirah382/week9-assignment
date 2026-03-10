import { connect } from "@/utils/utilities"
import Comments from "@/components/Comments"
import AddComment from "@/components/AddComment"

export default async function OnePost({params}) {
    const {id} = await params
    const db = connect()
    const post = (await db.query('SELECT * FROM posts WHERE id= $1', [id] )).rows[0]
    const comments = (await db.query(`SELECT * FROM comments WHERE post_id = $1`,[id])).rows;
    

    return (
      <div className="min-h-screen bg-linear-to-br from-blue-300 via-purple-400 to-indigo-500 py-16 px-6 max-w-3xl mx-auto space-y-10">
        <article className="bg-white p-10 rounded-xl shadow-xl">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{post.title}</h2>
          <p className="prose prose-lg max-w-none text-gray-800">{post.content}</p>
        </article>

        <h3 className="font-semibold text-black">Comments</h3>
        <Comments comments={comments} />
        <h3 className="font-semibold text-black">Add a comment</h3>
        <AddComment postId={id}/>
      </div>
    )
}