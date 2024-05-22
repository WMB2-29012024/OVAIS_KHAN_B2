import "./table.css"
import Edit from "./edit";
import Delete from "./delete";

const Table = ({data}) => {
  return (
  <>
    {data.map((list,idx)=>{
     return(
              <tbody>
                <tr key={(idx)}>
                  <div className="flex-box">
                    <td>{list.id}</td>
                    <td>{list.name}</td>
                    <td>{list.username}</td>
                    <td>{list.address.zipcode}</td>
                    <td>{list.phone}</td>
                    <td>{list.address.city}</td>
                    <td>{list.address.suite}</td>
                    <td>

                   
                      <div className="flex">
                      <Edit/>
                     <Delete data={data} idx={idx}/>
                     </div>
                     
                    </td>
                    </div>
                </tr>
              </tbody>
     )
    })}
   
    </>
  )
}
export default Table;
