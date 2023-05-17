import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import Update from "./Update";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const MyJob = () => {
  const { user } = useContext(AuthContext);
  const [myjobs, setMyjob] = useState([]);
  const [text, setText] = useState()
  const [modalJob,setModalJob]=useState({})

  useEffect(() => {
    fetch(`http://localhost:1000/myjob/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyjob(data);
      });
  }, [user?.email]);

  const searchPost = () => {
    fetch(`http://localhost:1000/searchByTitle/${text}`)
      .then(res => res.json())
      .then(data => {
        setMyjob(data)
      })
  }

  const handleModalId=(id)=>{
    fetch(`http://localhost:1000/uniquejob/${id}`)
      .then(res => res.json())
      .then(data => {
        setModalJob(data)
      })
  }

  const handleDelete=(id)=>{
    fetch(`http://localhost:1000/uniquejob/${id}`,{
      method:'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount>0){
          const remain=myjobs.filter(job=>job._id!==id)
          setMyjob(remain)
        }
      })
  }

  return (
    <div>
      <h1 className="text-black font-bold text-center text-xl my-6">
        Your Total Post : {myjobs.length}
      </h1>

      <div className="flex justify-between">
        <input
          onChange={(e) => setText(e.target.value)}
          className="focus:outline-none focus:border-2 flex-1 mr-2 border h-12 py-2 px-4 rounded-full"
          type="text"
          placeholder="Search Your Post"
          name=""
          id=""
        />
        <button onClick={searchPost} className="btn h-12 rounded-full w-36">Search</button>
      </div>

      <div className="w-full my-5">
        <table className="w-full table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Category</th>
              <th>Vacancy</th>
              <th>Salary</th>
              <th className="text-center">Edit</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {myjobs.map((myjob, index) => (
              <>
                <tr>
                  <td>{index + 1}</td>
                  <td>{myjob.title}</td>
                  <td>{myjob.category}</td>
                  <td>{myjob.vacancy}</td>
                  <td>{myjob.salary}</td>
                  <td className="text-center">
                    <label onClick={()=>handleModalId(myjob._id)}htmlFor="my-modal-3" ><FontAwesomeIcon className="text-blue-600" icon={faEdit}/></label >
                  </td>
                  <td className="text-center">
                    <button onClick={()=>handleDelete(myjob._id)}><FontAwesomeIcon className="text-red-500" icon={faTrash}/></button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <Update
         modalJob={modalJob}
        ></Update>
      </div>
    </div>
  );
};

export default MyJob;
