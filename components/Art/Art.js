import styles from './Art.module.css'

export default function Art(props) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={props.image}/>
      <div className={styles.overlay}>
        <div className={styles.wrapper}>
          <p className={styles.description}>{props.description}</p>
          <p className={styles.medium}>{props.medium}</p>
        </div>
      </div>
    </div>
  )
}
