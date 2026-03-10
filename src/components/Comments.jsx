import { connect } from "@/utils/utilities";

export default function Comments({ comments }) {
    return (
        <div className="space-y-4 mt-4">
            {comments.map((comment) => (
                <div key={comment.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="font-medium">{comment.user_name}</p>
                    <p className="text-gray-700">{comment.content}</p>
                    <p className="text-xs text-gray-500 mt-1">{comment.created_at.toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
}