import React, { useState } from 'react';
import styles from "./carousel.module.scss";
import Image from "next/image";

export const End: React.FC = () => {
    return(
        <div className={styles.end}>
            <div className={styles.endLink}>
            <a  href="/">Home</a>
            <a  href="/">Page 1</a>
            <a  href="/">Page 2</a>
            </div>
                        <div  className={styles.endLine}>
                            <hr />
                        </div>

                        <div className={styles.socialMedia}>
                            <img className={styles.social} src="/assets/Vector.svg" alt="" />
                            <img className={styles.social} src="/assets/6.svg" alt="" />
                            <img className={styles.social} src="/assets/Subtract.svg" alt="" />
                            <img className={styles.social} src="/assets/7.svg" alt="" />
                  </div>
                  <img src="/assets/8.svg" alt="" />
        </div>
    )
}
