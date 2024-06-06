// import React from "react";

// const EditComponent = ({ data, setData }) => {
// const formSubmit =(e) => {
//   e.preventDefault();
//   console.log(data)
// }
//   return (
//     <form onSubmit={formSubmit} id="flex1">
  
//         <label htmlFor="Id">USER ID</label>
//         <input id="Id" type="text" />

//         <label htmlFor="Id">NAME</label>
//         <input id="Id" type="text" />

//         <label htmlFor="Id">USER NAME</label>
//         <input id="Id" type="text" />

//         <label htmlFor="Id">ZIP CODE</label>
//         <input id="Id" type="text" />

//         <label htmlFor="Id">PHONE</label>
//         <input id="Id" type="text" />

//         <label htmlFor="Id">CITY</label>
//         <input id="Id" type="text" />

//         <label htmlFor="Id">SUIT</label>
//         <input id="Id" type="text" />

//         <button type="submit">Submit</button>
  
//     </form>
//   );
// };
// export default EditComponent;


import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UserForm = ({ data, setData }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { idx } = location.state || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = [...data];
    const [mainProp, subProp] = name.split(".");

    if (subProp) {
      updatedData[idx][mainProp][subProp] = value;
    } else {
      updatedData[idx][name] = value;
    }
    setData(updatedData);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", data[idx]);
    navigate("/");
  };

  return (
    <div className="userform">
      <div className="container">
        <h1>User Information Form</h1>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="id">ID</label>
            <input
              type="number"
              id="id"
              name="id"
              value={data[idx].id}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={data[idx].name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={data[idx].username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={data[idx].email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="suits">Suits</label>
            <input
              type="text"
              id="suits"
              name="address.suite"
              value={data[idx].address.suite}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={data[idx].phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              value={data[idx].website}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company.name"
              value={data[idx].company.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;