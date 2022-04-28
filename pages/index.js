import React, { useState, useEffect } from 'react'

import styles from '../styles/Home.module.css'

import contentList from '../public/data/block.json';

import Intro from '../components/Intro/Intro'
import BlockContent from '../components/BlockContent/BlockContent'

// > 1680 => 8 cols 5 rows
// > 1440 => 6 cols 7 rows
// > 1680 => 4 cols 10 rows
// > 1680 => 2 cols 20 rows

let blockContentList = contentList.data.map((content, i) =>
    <div className={styles.block_1x1}>
      <BlockContent type={content.type} img={content.image} text={content.text} link={content.link}/>
    </div>
);

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function sortGrid(rowNumber, columnNumber) {
  let columns = [];

  for (var i=0; i < columnNumber/2; i++) columns.push([]);

  // first column - static content
  columns[0].push(blockContentList[0]);
  columns[0].push(<div className={styles.block_1x1}></div>);
  columns[0].push(<div className={styles.block_2x3}><Intro/></div>);
  columns[0].push(blockContentList[1]);
  columns[0].push(<div className={styles.block_1x1}></div>);

  for (var i = 0; i < rowNumber * 2 - 10; i++) {
    columns[0].push(<div className={styles.block_1x1}></div>)
  }

  // creating and randomizing rest
  let list = blockContentList.slice(2);
  for (var i = 0; i < rowNumber * columnNumber - (2 * rowNumber) - (blockContentList.length - 2); i++) {
    list.push(<div className={styles.block_1x1}></div>);
  }

  shuffle(list);

  for (var i = 0; i < list.length; i++) {
    let index = i % (columnNumber / 2 - 1) + 1
    columns[index].push(list[i]);
      
  }

  let res = columns.map((col, i) =>
      <div className={styles.col_x2}>
          {columns[i]}
      </div>  
  );
  return res;
}

function generateBlocks(windowWidth) {
  if (windowWidth >= 1680) {
    return sortGrid(5, 8);
  } else if (windowWidth > 1225 && windowWidth < 1680) {
    return sortGrid(7, 6);
  } else {
    return sortGrid(10, 4);
  } 
}

export default function Home() {
  const [windowDimension, updateDimensions] = useState({
    winWidth: undefined,
    winHeight: undefined,
  })

  const detectSize = () => {
    updateDimensions({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    detectSize();
  }, [])

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimension])

  return (
    <div className={styles.container}>
      <div className={styles.flex_grid}>
        {generateBlocks(windowDimension.winWidth)}
      </div>
    </div>
  )
}