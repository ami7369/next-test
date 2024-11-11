import styles from "./page.module.css";
import Link from "next/link";

export const revalidate = 30; // 30secごとに再検証する
const endpoint = `https://dev.gokakunin.net/marine2/api/marine_blog`;

export default async function Home() {
  const time = new Date().toLocaleString();
  const data = await fetch(endpoint, { next: { revalidate } }).then((res)=>res.json());
  return (
    <main className={styles.main}>
      <h1>Render@ {time}</h1>
      <ul>
        {data.contents.map((post) => {
          return (
            <li key={post.id} id={post.id}>
              <Link href={`/posts/${post.id}`}>タイトル：{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
