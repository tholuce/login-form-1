import React, {useState} from 'react';
import styles from './Input.module.scss';


const Input = () => {
    const [value, setValue] = useState<string>('');
    return <div className={styles.input}>
            <input type='text' value={value} onChange={e => setValue(e.target.value)} />
            <div className={`${styles.label} ${value !== '' ? styles.label_up: ''}`}>E-mail</div>
        </div>;
};

export default Input;