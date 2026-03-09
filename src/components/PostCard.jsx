import Link from "next/link";
import DeleteButton from "./DeleteButton";
import { handleDelete } from "@/app/posts/action";


export default function PostCard({post}) {

    console.log("POSTCARD ID:", post.id);
    return(
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 border border-gray-200">
                <Link href={`/posts/${post.id}`}>
                    <h2 className="text-xl font-semi-bold">{post.title}</h2>
                    <p>{post.content.slice(0,30)}...</p>
                    <p>{post.created_at}</p>
                </Link>
                <DeleteButton onDelete={handleDelete} id={post.id}/>
            </div>
    )
}