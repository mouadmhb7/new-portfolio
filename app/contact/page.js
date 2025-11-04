import styles from './page.module.css'


export const metadata ={
    title:"contact page",
}
export default function contact() {
    return(
        <div className={styles.contact}>
            <h1>contact</h1>

            <form action="">
                <input type="text" placeholder="your name"/>
                <input type="email" placeholder="your email"/>
                <textarea placeholder="your message"></textarea>
            </form>
        </div>
        )
}