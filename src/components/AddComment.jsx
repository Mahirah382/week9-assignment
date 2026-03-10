"use client";

export default function AddComment({ postId }) {
  return (
    <form method="POST" action="/api/comments" className="bg-white p-6 rounded-xl shadow mt-6 space-y-4">
      <input type="hidden" name="post_id" value={postId} />

      <label className="block font-medium mb-1">Username</label>
      <input name="user_name" required  className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"/>

      <label className="block font-medium mb-1">Comment</label>
      <textarea name="content" required className="w-full border rounded-lg p-2 h-24 focus:ring focus:ring-blue-300"/>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Submit</button>
    </form>
  );
}