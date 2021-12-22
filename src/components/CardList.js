import React from "react";
import Card from "./Card";

export const CardList = ({robos}) =>{

    //Using a map function we can get all arraylist and return the 'Card' Component
    const cardArray = robos.map(function(userList,i) {      
        return <Card  id={robos[i].id} name={robos[i].name} email={robos[i].email} key={i}/>
    })
    
    return(
            <div>
            {cardArray}

            {/* <Card id={robos[1].id} name={robos[1].name} email={robos[1].email}/>
            <Card id={robos[2].id} name={robos[2].name} email={robos[2].email}/> */}
           
            </div>
    )
}

