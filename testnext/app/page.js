import styles from "./page.module.css";
import Link from "next/link";

export const revalidate = 10; // 10secごとに再検証する
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
      <p>
        <img src="https://images.microcms-assets.io/assets/8f40449166414243988f44799f5e4770/e655d115af744f86a6f4c8416d67ac37/fe4f37afa8fc6e97ebabe2054ae3d3c8_892b7cb679b9e76586d439c27ba15e11.jpg" />
      </p>
    </main>
  );
}
