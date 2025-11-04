import styles from './page.module.css'

export default function Project() {
    return(
        <div className={styles.project}>
            <h1>project</h1>
            <div className={styles.container}>
                <div className={styles.card}> 
                    <img src="../portfolio-pic.jpg/" alt="" />
                    <div className={styles.aboutProject}>
                        <h2>project 1</h2>
                        <p>this my Project</p>
                    </div>
                    <div className={styles.buttons}>
                        <button>demo</button>
                        <button>code</button>
                    </div>
                </div>
                <div className={styles.card}> 
                    <img src="../portfolio-pic.jpg/" alt="" />
                    <div className={styles.aboutProject}>
                        <h2>project 1</h2>
                        <p>this my Project</p>
                    </div>
                    <div className={styles.buttons}>
                        <button>demo</button>
                        <button>code</button>
                    </div>
                </div>
                <div className={styles.card}> 
                    <img src="../portfolio-pic.jpg/" alt="" />
                    <div className={styles.aboutProject}>
                        <h2>project 1</h2>
                        <p>this my Project</p>
                    </div>
                    <div className={styles.buttons}>
                        <button>demo</button>
                        <button>code</button>
                    </div>
                </div>
                <div className={styles.card}> 
                    <img src="../portfolio-pic.jpg/" alt="" />
                    <div className={styles.aboutProject}>
                        <h2>project 1</h2>
                        <p>this my Project</p>
                    </div>
                    <div className={styles.buttons}>
                        <button>demo</button>
                        <button>code</button>
                    </div>
                </div>
            </div>
        </div>
    )
}