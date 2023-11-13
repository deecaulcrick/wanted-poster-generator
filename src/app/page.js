import PosterForm from "@/components/posterForm/PosterForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1>Create Your Own Wanted Pirate Poster!</h1>
        <p>
          Whether you're a daring navigator, a fierce swordsman, or a cunning
          strategist, let the world know your tale through a custom wanted
          poster that captures the spirit of the Grand Line. Simply fill in the
          blanks below and let the seas echo your legendary exploits!
        </p>
      </div>

      <PosterForm />
      <div className={styles.footer}>
        <div className={styles.site__credit}>
          © Dee Caulcrick · 2023 <br />
          Built with ♥.
        </div>
        <div className={styles.footer__links}>
          <ul>
            <li>
              <a href="mailto:deecaulcrick@gmail.com" target="_blank">
                Email
              </a>
            </li>
            <li>
              <a href="https://github.com/deecaulcrick" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="https://twitter.com/deecaulcrick" target="_blank">
                Twitter
              </a>
            </li>
           
            <li>
              <a href="https://instagram.com/deecaulcrick" target="_blank">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
