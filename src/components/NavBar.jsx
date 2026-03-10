import Link from "next/link"

export default function NavBar() {
    return(
        <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-md px-8 py-4">
            <nav className="max-w-5xl mx-auto flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold tracking-wide">My Blog</Link>
                    <div className="flex gap-6 text-lg font-medium">
                        <Link href="/" className="hover:text-gray-200 transition">Home</Link>
                        <Link href="/posts" className="hover:text-gray-200 transition">Posts</Link>
                        <Link href="/add-post" className="hover:text-gray-200 transition">Add Posts</Link>
                    </div>
            </nav>
        </div>
    )
}