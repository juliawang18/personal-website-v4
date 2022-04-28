import styles from '../styles/Universe.module.css'

export default function Universe() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <p className={styles.icon}>✏️</p><br/>
                <p>This area of my lil' web is in the works...</p>
                <a href="/">
                    <p>← Return</p>
                </a>
            </div>
        </div>
    )
}