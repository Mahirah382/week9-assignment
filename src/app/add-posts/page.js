import { connect } from "@/utils/utilities"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export default async function addPost() {
    const db = connect()

    async function handleSubmit(formData) {
        'use server'
        const {title, content} = Object.fromEntries(formData)
        revalidatePath("/posts");
        redirect("/posts");
    }
    return(
        <form>
            <label htmlFor="title">Title:</label>
            <input name="title" required />
            <label htmlFor="content">Content:</label>
            <textarea name="content" required />
        </form>
    )
}