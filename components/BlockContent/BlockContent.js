import styles from './BlockContent.module.css'

import Img from '../../components/Img/Img'

export default function BlockContent(props) {
  function insertContent(type) {
    if (type == "image") {
      return <Img image={props.img} text={props.text}/>;
    } else {
      return (
        <div className={styles.container}>
          <p className={styles.icon}>{props.text}</p>
        </div>
      )
    }
  }

  return (
    <a className={styles.link} href={props.link} target="_blank">
      {insertContent(props.type)}
    </a> 
  )
}
