import React from "react";
import "./table.css"

const Table = ({data}) => {
    console.log(data)
  return (
  <>
    {data.map((list)=>{
     return(
        <div>
              <tbody>
                <tr>
                    <td>{list.id}</td>
                    <td>{list.name}</td>
                    <td>{list.username}</td>
                    <td>{list.address.zipcode}</td>
                    <td>{list.phone}</td>
                    <td>{list.address.city}</td>
                    <td>{list.address.suite}</td>
                    <td><img src="./images/Frame 14.svg" alt="" /></td>

                </tr>
              </tbody>
      </div>
     )
    })}
   
    </>
  )
}
export default Table;
