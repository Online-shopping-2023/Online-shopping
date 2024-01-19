import { useEffect } from "react";
import { useParams } from 'react-router-dom';

function ItemDesk() {
    const params = useParams();
    useEffect(()=> {console.log(params)},[])
    return(
    <div>
        <h1>i am item description</h1>
    </div>
    )
};

export default ItemDesk;