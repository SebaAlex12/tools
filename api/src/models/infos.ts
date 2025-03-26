import { pool } from "../config/mysql";

/* get all infos */
export const getInfos = () => {
    const sql = "SELECT * from strony";
    return new Promise((resolve, reject) => {
        pool.query(sql, (error, data) => {
            if(error){
                return reject(error);
            }
            return resolve(data);
        })
    });
}