import "./table.css";
import Delete from "./delete";
import { Link, useNavigate } from "react-router-dom";

const Table = ({ data, setData }) => {
  const navigate = useNavigate();
  return (
    <>
      {data.map((list, idx) => {
        return (
          <tbody>
            <tr key={idx}>
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
                    <Link to={`edit`} idx={idx}><img src="./images/Frame 14.svg" alt="" /></Link>
                    <Delete data={data} idx={idx} setData={setData} />
                  </div>
                </td>
              </div>
            </tr>
          </tbody>
        );
      })}
    </>
  );
};
export default Table;
