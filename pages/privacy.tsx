import Link from "next/link"

export default function Privacy() {
  return (
    <article className="centered">
      <h1>Privacy policy</h1>

      <main>
        <p>This website just collects no user data.</p>

        <Link href="/">Back to home page</Link>
      </main>
    </article>
  )
}
