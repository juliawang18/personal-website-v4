import styles from './Publication.module.css'

export default function Publication(props) {
  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <p>{props.index}.</p>
      </div>
      <div className={styles.rightWrapper}>
        <p className={styles.title}>{props.title}</p>
        <p>{props.authors}</p>
        <p className={styles.info}><i>{props.info}</i></p>
      </div>
    </div>
  )
}
