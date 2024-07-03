import React from "react";

const ListOfItems = () => {
    const items=[{name:"rice",price:"100Rs"},{name:"biryani",price:"200Rs"},{name:"Idly",price:"40Rs"}]
  return (
    <div>
        <h1>Available Items</h1>
         <ul>
            {
                items.map((item,index)=>{
                    return (
                        <li>{item.name} : {item.price}</li>
                    )
                })
            }

        </ul>
            
        
    </div>
     
  )
};

export default ListOfItems;
