import { useState } from 'react';

import '../../../styles/basic.css';
import styles from './phpConverter.module.css';

const PhpConverter = () => {
    const [ phpString, setPhpString ] = useState("");
    const [ jsonString, setJsonString ] = useState("");
    
    console.log('phpString',phpString);
    const convertPhpHandler = () => {
            // const converted = new Array(phpString);
            // const converted = JSON.parse("json_encode("+phpString+")");
            // console.log('converted',converted);
    }

    return (
        <div className={styles.container}>
            <div className="actions">
                <button className="btn-default" onClick={convertPhpHandler}>convert</button>
            </div>
            <div className="content">
                <textarea rows={50} cols={65} onChange={(e) => setPhpString(e.target.value)}/>
                <textarea rows={50} cols={65} value={jsonString}/>
            </div>
        </div>
    )
}

export default PhpConverter;