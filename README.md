# Weekly Blogs — Full‑Stack Next.js App
A vibrant, full‑stack blogging application built with Next.js (App Router), PostgreSQL, and Tailwind CSS.
Users can create posts, view posts, sort them, delete them, and comment on individual posts.
This project fulfills all required user stories and technical requirements.

# Features
 Create Posts
- Users can create new blog posts using a clean, styled form.
- After submitting, users are automatically redirected to the posts page.

 View All Posts
- All posts are displayed on a dedicated posts page.
- Users can sort posts by date in ascending or descending order.

Delete Posts
- Each post includes a delete button.
- Posts are removed from the database instantly.

 Comment on Posts
- Each post has its own dynamic route (/posts/[id]).
- Users can add comments directly on the post’s page.
- Comments are stored in a dedicated comments table and linked via a foreign key.

 Modern UI
- Fully styled using Tailwind CSS.
- Gradient backgrounds + clean white cards.
- Responsive, modern, and consistent design across all pages.

# Technologies Used
- Next.js 14 (App Router)
- React Server Components
- PostgreSQL
- Tailwind CSS
- Node.js
- Vercel / Local Development

# Reflection
- overal it was okay, BUT i was dealing with an error for so long, it took my whole weekend. i tried googling which didnt work so i had to resort to using AI which told me something in my code my making my whole app into a client... or something. it told me to do a bunch of stuff and i think it made things worse i literally started fresh. it said to make seperate api routes which worked in the end. And i made sure to only put 'use client' to components that actually needed it.
- i enjoyed the styling, i think tailwindcss is my favourite 😃
- i had a few errors but it was all coming from the same thing(something was making the app a client) once i got that fixed it was pretty much ok.
