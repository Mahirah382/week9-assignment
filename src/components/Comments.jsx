export default function Comments({ comments }) {
    return (
        <div className="space-y-4 mt-4">
            {comments.map((comment) => (
                <div key={comment.id} className="bg-gray-50 border border-purple-200 rounded-lg p-4 shadow-sm ">
                    <p className="font-semibold text-gray-900">{comment.user_name}</p>
                    <p className="text-gray-700">{comment.content}</p>
                    <p className="text-xs text-gray-500 mt-1">{comment.created_at.toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
}