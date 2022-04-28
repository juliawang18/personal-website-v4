import styles from './Img.module.css'

export default function Img(props) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={props.image}/>
      <div className={styles.overlay}>
        <p className={styles.text}>{props.text}</p>
      </div>
    </div>
  )
}
