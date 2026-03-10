"use client";

export default function DeleteButton({ id }) {
  async function handleDelete() {
    await fetch(`/api/posts/${id}`, {
      method: "POST",
    });

    window.location.reload();
  }

  return <button onClick={handleDelete} className="text-red-600 hover:text-red-800 font-medium">Delete</button>;
}