"use server";

import { connect } from "@/utils/utilities";
import { revalidatePath } from "next/cache";

export async function addComment(id, formData) {
  const db = connect();
  const { user_name, content } = Object.fromEntries(formData);

  await db.query(
    `INSERT INTO comments (user_name, content, post_id) VALUES ($1, $2, $3)`,
    [user_name, content, id]
  );

  revalidatePath(`/posts/${id}`);
}