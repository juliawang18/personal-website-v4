import styles from './Intro.module.css'

export default function Intro() {
  return (
    <div className={styles.container}>
        <p>
          I'm a researcher, creative technologist, and student living in Berkeley, CA. I’m mostly interested in exploring and creating environments where creativity, sense-making, and personal growth blossoms—whether it’s through technology or art.
          <br /><br />
          Recently,
          <br />
        </p>

        <ul>
            <li>Finishing my undergraduate studies at University of California, Berkeley</li>
            <li>Researching and designing new forms of inclusive math pedagogy at Berkeley’s <a href="https://edrl.berkeley.edu/" target="_blank">Embodied Design Research Laboratory</a></li>
            <li>Preparing for a couple upcoming research conferences: <a href="https://chi2022.acm.org/" target="_blank">@CHI2022</a> <a href="https://2022.isls.org/" target="_blank">@ISLS2022</a> <a href="https://idc.acm.org/2022/" target="_blank">@IDC2022</a></li>
        </ul>

        <p>
        <br />
        I am absolutely in love with brainstorming and building. Sometimes you can find me existing, painting, watching shows on repeat, or reading.
        <br/><br/>
        You can find me on <a href="https://twitter.com/juliaxwang" target="_blank">twitter</a> or email me at juliawang821@gmail.com!
        </p>
    </div>
  )
}
