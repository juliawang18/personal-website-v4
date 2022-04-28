import styles from '../styles/Art.module.css'

import artList from '../public/data/art.json';

import Artwork from '../components/Art/Art';

function listArt() {
    let list = artList.works
    let buckets = [[],[],[],[]]
    let item;
    for (var i = 0; i < list.length; i++) {
        item = list[i];
        buckets[i%4].push(
            <Artwork image={item.link} description={item.description} medium={item.medium}/>
        )
    }

    let res = buckets.map((items, i) =>
        <div className={styles.col}>
            {buckets[i]}
        </div>  
    );
    return res;
}

export default function Art() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <p className={styles.headerText}>Personal Artworks</p>
                    <p>a digital gathering and history of my own art</p><br />
                    <a href="/">
                        <p>← Return</p>
                    </a>
                </div>
                <div className={styles.row}>
                    {listArt()}
                </div>
            </div>
        </div>
    )
}