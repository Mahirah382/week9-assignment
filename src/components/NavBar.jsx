import Link from "next/link"

export default function NavBar() {
    return(
        <div>
            <nav className="flex justify-end gap-5 bg-blue-950 text-white">
                    <Link href="/">Home</Link>
                    <Link href="/post">Posts</Link>
                    <Link href="/add-post">Add Posts</Link>
            </nav>
        </div>
    )
}