import DeleteButton from "./DeleteButton";


export default function PostCard({post}) {

    console.log("POSTCARD ID:", post.id);
    return(
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border border-purple-100 flex flex-col">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h2>
                    <p className="text-sm text-gray-500 mb-4">{post.created_at ? new Date(post.created_at).toLocaleString() : ""}</p>
                    <p className="text-gray-700 line-clamp-3 mb-4">{post.content.slice(0,30)}...</p>
                <a className="inline-block mt-4 text-blue-600 hover:underline" href={`/posts/${post.id}`}>Read more ➡️</a>
                <DeleteButton id={post.id}/>
            </div>
    )
}