import React, {useState} from "react";
import styles from './Switcher.module.scss';


const Switcher = () => {
    const [isRight, setIsRight] = useState<boolean>(false);

    return <div className={styles.switcher}>
        <div className={styles.switcher__items}>
            <div className={`${styles.switcher__item} ${!isRight ? styles.switcher__item_active : ''}`} onClick={() => {setIsRight(false)}} >
                <span>Login</span> 
            </div>
            <div className={`${styles.switcher__item} ${isRight ? styles.switcher__item_active : ''}`} onClick={() => {setIsRight(true)}}>
                <span>Signup</span> 
            </div>
        </div>
        <div className={`${styles.switcher__switch} ${styles[`switcher__switch_${Number(isRight)}`]}`}></div>
    </div>;
};

export default Switcher;