import styles from '../styles/Publications.module.css'

import Pub from '../components/Publication/Publication'

import publicationList from '../public/data/publications.json';

function listPubilcations() {
    let res = publicationList.publications.map((pub, i) =>
        <Pub index={i} title={pub.title} authors={pub.authors} info={pub.info}/>
    );
    return res;
}

export default function Publications() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <p className={styles.headerText}>Publications</p>   
                    <p>a (currently) mini list of all of my publications in the research world!</p><br />
                    <a href="/">
                        <p>← Return</p>
                    </a>   
                </div>
                <div>
                    {listPubilcations()}
                </div>
                
            </div>
        </div>
    )
}