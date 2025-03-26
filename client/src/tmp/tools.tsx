import { useEffect, useState } from "react";

interface Iinfos{
    nazwa: String
}

const Tools = () => {
    const [ infos, setInfos ] = useState<Iinfos[]>([]);

    console.log('Tools render...');

    useEffect(() => {
        getInfos();
        getTools();
    },[]);

    const getTools = async() => {
        try{
            const request = await fetch('http://localhost:5000/tools');
            if(request.ok){
                const data = await request.json();
                console.log('tools data:',data);
            }
        }catch(error){
            console.log('error',error);
        }
    }

    const getInfos = async() => {
        try{
            const request = await fetch('http://localhost:5000/infos');
            if(request.ok){
              console.log('request',request);
                // const text = await request.text();
                const data = await request.json();
                // console.log('text',text);
                console.log('data',data);
                setInfos(data)
            }
        }catch(error){
            console.log('error',error);
        }
    }

    const content = infos.length > 0 ? infos.map(item => <li>{ item.nazwa }</li>) : '';

    return <div>
        <h1>Tools</h1>
        <ul>
            { content }
        </ul>
    </div>
}

export default Tools;