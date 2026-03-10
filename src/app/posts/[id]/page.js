import { connect } from "@/utils/utilities"
import Comments from "@/components/Comments"
import AddComment from "@/components/AddComment"

export default async function OnePost({params}) {
    const {id} = await params
    const db = connect()
    const post = (await db.query('SELECT * FROM posts WHERE id= $1', [id] )).rows[0]
    const comments = (await db.query(`SELECT * FROM comments WHERE post_id = $1`,[id])).rows;
    

    return (
      <div className="max-w-3xl mx-auto mt-10 space-y-10">
        <article className="bg-white p-8 roundedxl shadow">
          <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
          <p className="text-gray-500 text-sm mb-6">{post.content}</p>
        </article>

        <h3>Comments</h3>
        <Comments comments={comments} />
        <h3>Add a comment</h3>
        <AddComment postId={id}/>
      </div>
    )
}