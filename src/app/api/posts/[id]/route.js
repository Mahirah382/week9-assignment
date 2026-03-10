import { connect } from "@/utils/utilities";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  const db = connect();
  await db.query("DELETE FROM posts WHERE id = $1", [params.id]);
  return NextResponse.redirect("/posts");
}