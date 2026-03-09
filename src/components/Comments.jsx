import { connect } from "@/utils/utilities";

export default function Comments({ comments }) {
    return (
        <div>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <p>{comment.user_name}</p>
                    <p>{comment.content}</p>
                    <p>{comment.created_at}</p>
                </div>
            ))}
        </div>
    );
}