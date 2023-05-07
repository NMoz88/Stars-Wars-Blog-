import React, {useContext} from "react";
import { Card } from "../component/Card";
import { Context } from "../store/appContext";


export const Planets = ()=>{

    const {store} = useContext(Context);
    return <div className="container">
        <h1>Planets</h1>
        <div className="row">
           {store.planets.map((elm, index)=>{
            return <Card title={elm.name} id={elm.uid} path={"/detail/planet/" + elm.uid}/>
           })}
            
        </div>

    </div>
}