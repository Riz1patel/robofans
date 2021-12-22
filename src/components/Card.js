import React from "react";

const Card = (props) =>{      //Using also Destructuring instead of props like {id,name,email}
    return(
    <React.Fragment>
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
    <img src = {`https://robohash.org/${props.id}`} alt="roboImage" />
     <h2>{props.name}</h2> {/*{name} */}
    <p>{props.email}</p> {/*{email} */}
    </div>
    </React.Fragment>
    )
}

export default Card;