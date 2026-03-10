import Link from "next/link"

export default function NavBar() {
    return(
        <div className="bg-white shadow-md px-8 py-4 mb-8">
            <nav className="max-w-5xl mx-auto flex items-center justify-between">
                    <Link href="/" className="text-2xl font-semibold text-blue-700">My Blog</Link>
                    <div className="flex gap-6 text-gray-700 font-medium">
                        <Link href="/" className="hover:text-blue-600 transition">Home</Link>
                        <Link href="/posts" className="hover:text-blue-600 transition">Posts</Link>
                        <Link href="/add-post" className="hover:text-blue-600 transition">Add Posts</Link>
                    </div>
            </nav>
        </div>
    )
}