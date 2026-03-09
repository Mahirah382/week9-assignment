'use server';
import { connect } from "@/utils/utilities";

export async function handleDelete(id) {
    const db = connect();
    await db.query(`DELETE FROM posts WHERE id = $1`, [id])
}