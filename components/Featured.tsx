import Image from "next/image";
import styles from "../styles/Featured.module.css";
import React from "react";

const Featured = () => {
    const [index, setIndex] = React.useState(0);

    const handleArrow = (direction) => {
        if (direction === "moveLeft") {
            setIndex(index !== 0 ? index - 1 : 2);
        } 
        
        if (direction === "moveRight") {
            setIndex(index !== 2 ? index + 1 : 0);
        }
    }

    console.log(index);
  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("moveLeft")}>
        <Image src="/img/arrowl.png" alt="" layout="fill" />
      </div>
      <div className={styles.wrapper} style={{transform: `translateX(${-100 * index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt=""  layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("moveRight")}>
        <Image src="/img/arrowr.png" alt="" layout="fill" />
      </div>
    </div>
  );
};

export default Featured;
