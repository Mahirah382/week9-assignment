import { connect } from "@/utils/utilities"
import AddComment from "@/components/AddComment"
import Comments from "@/components/Comments"

export const revalidate = 0;

export default async function OnePost({params}) {

    const {id} = params
    const db = connect()
    console.log("PARAMS RAW:", params);
    const post = (await db.query('SELECT * FROM posts WHERE id= $1', [id] )).rows[0]
    console.log("ID RECEIVED:", id);
    console.log("POST RESULT:", post);
    const comments = (await db.query(`SELECT * FROM comments WHERE post_id = $1`,[id])).rows;
    

    return (
        <div>
            <div>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <p>{post.created_at}</p>
            </div>
            <AddComment id={id}/>
            <Comments comments={comments} />
        </div>
    )
}