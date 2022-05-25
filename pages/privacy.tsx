import Link from "next/link";
import { PageHead } from "../components/PageHead";

export default function Privacy() {
  return (
    <>
      <PageHead pagePath="/policy" pageTitle="Privacy policy" />

      <article className="centered">
        <h1>Privacy policy</h1>

        <main>
          <p>This website just collects no user data.</p>

          <Link href="/">Back to home page</Link>
        </main>
      </article>
    </>
  );
}
