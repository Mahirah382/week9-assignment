import { connect } from "@/utils/utilities";
import { NextResponse } from "next/server";

export async function POST(req) {
  const db = connect();
  const body = await req.formData();

  const user_name = body.get("user_name");
  const content = body.get("content");
  const post_id = body.get("post_id");

  await db.query(
    `INSERT INTO comments (user_name, content, post_id) VALUES ($1, $2, $3)`,
    [user_name, content, post_id]
  );

  return NextResponse.redirect(`/posts/${post_id}`);
}