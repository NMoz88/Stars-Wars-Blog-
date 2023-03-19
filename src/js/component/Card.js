import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const LongCard = (props)=>{
    return  (
        <div className="card">
          <div className="card-header" style={{width: "18"}}>
          
          </div>
          <div className="card-body">
            <h5 className="card-title">For this adventure to start, a character must be selected{props.title1}</h5>
            <div className="card-img">
              <img src="https://i.blogs.es/1da08b/1366_2000-9-/1366_2000.jpeg" style={{"width":"400px","height":"250px"}} />
            </div>
              <Link to={props.path}>
                <a href="#" className="btn btn-primary my-3">{props.title}</a>
              </Link>
          </div>
        </div>
      )
}

export const LongCard2 = (props)=>{
  return  (
      <div className="card">
  <div className="card-header">
   
  </div>
  <div className="card-body" style={{width: "18"}}>
    <h5 className="card-title">For this adventure to start, a planets must be selected</h5>

    <div className="card-img">
        <img src="https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2019/11/planetas_fallen_order.jpg?w=1280&ssl=1" style={{"width":"400px","height":"250px"}} />
    </div>
   
    <Link to={props.path}>
      <a href="#" className="btn btn-primary">{props.title}</a>
    </Link>
      
  </div>
</div>)
}

export const Card = ({title, path, description})=>{
  const {actions} = useContext(Context)

  return <div className="card" style={{width: "18rem"}}>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1920px-Star_Wars_Logo.svg.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <div className="row">
      <div className="col-8">
        <Link to={path}>
          <a href="#" className="btn btn-primary">Go details</a>
        </Link>
      </div>
      <div className="col-4">
        <button className="btn btn-warning" onClick={()=>{
          actions.addFav(title, id)
          }}>🧡</button>
      </div>
      
      
    </div>
    
  </div>
</div>
}