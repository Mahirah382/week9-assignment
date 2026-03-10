import Link from "next/link";
import DeleteButton from "./DeleteButton";


export default function PostCard({post}) {

    console.log("POSTCARD ID:", post.id);
    return(
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col">
                    <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.created_at ? new Date(post.created_at).toLocaleString() : ""}</p>
                    <p className="text-gray-800 line-clamp-3">{post.content.slice(0,30)}...</p>
                <a className="inline-block mt-4 text-blue-600 hover:underline" href={`/posts/${post.id}`}>Read more ➡️</a>
                <DeleteButton id={post.id}/>
            </div>
    )
}