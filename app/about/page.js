import styles from "./page.module.css";
export const metadata = {
    title:"about page",
}
export default function About() {
    return(
        <div className={styles.about}>
            
            <h1>about</h1>
            
            <p> i'm mouaad from morocco i'm a front-end developer
            with a passion for creating beautiful and functional web applications.
            I have experience working with HTML, CSS, JavaScript, and React.js.
            </p>
        </div>
    )
}