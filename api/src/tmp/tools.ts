 import express from 'express';
 import { pool } from '../config/mysql';

const router = express.Router();

router.get('/tools',async(req,res) => {
    console.log('tools router');
    const data = await getInfos();
    console.log('data',data);
    res.send(JSON.stringify(data));
});

export const getInfos = () => {
    const sql = "SELECT * from strony LIMIT 2";
    return new Promise((resolve, reject) => {
        pool.query(sql, (error, data) => {
            if(error){
                return reject(error);
            }
            return resolve(data);
        })
    });
}

export default router;