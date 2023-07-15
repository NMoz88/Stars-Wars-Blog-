import React, {useContext} from "react";
import { Card } from "../component/Card";
import { Context } from "../store/appContext";


export const Characters = ()=>{
    const {store, actions} = useContext(Context);
    return <div className="container">
        <h1>Characters</h1>
        <div className="row">
            {store.name.map((elm, index)=>{
                return <Card title={elm.name} id={elm.uid} path={"/details/characters/" + elm.uid}/>
            })}
            
        </div>

    </div>
}
