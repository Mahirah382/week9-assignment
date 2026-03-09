import { connect } from "@/utils/utilities"
import { revalidatePath } from "next/cache";

export default async function AddComment({id}) {
    const db = connect()
    async function handleComment(formData) {
        'use server'
        const {user_name, content} = Object.fromEntries(formData);

        const newComment = db.query(`INSERT INTO comments (user_name, content, post_id) VALUES ($1, $2, $3)`, [user_name, content, id]);

        revalidatePath(`/posts/${id}`);
    }

    return (
        <>
        <form action={handleComment}>
            <label htmlFor="user_name">Enter your Username</label>
            <input name="user_name" type="text"></input>
            <label htmlFor="content">Enter a comment</label>
            <textarea name="content" required />
            <button type="submit">submit</button>
        </form>
        </>
    )
}