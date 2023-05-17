import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import CreatableSelect from "react-select/creatable";
import { AuthContext } from './AuthProvider';

const Update = ({modalJob,index}) => {
    const [selectOption, setSelectOption] = useState(null);
    const {user}=useContext(AuthContext)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        data.skils = selectOption;
        fetch(`http://localhost:1000/uniquejob/${modalJob._id}`,{
          method:'PUT',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
        })
      };

      const options = [
        { value: "Javascript", label: "Javascript" },
        { value: "C++", label: "C++" },
        { value: "Python", label: "Python" },
        { value: "HTML", label: "HTML" },
        { value: "Css", label: "Css" },
        { value: "React", label: "React" },
        { value: "MongoDB", label: "MongoDB" },
        { value: "Firebase", label: "Firebase" },
      ];

    return (
        <>
        
        <div>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className='modal'>
        <div className="bg-gray-100 modal-box relative border-gray-200 border-2 p-10 rounded-xl my-10">
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className='text-2xl text-orange-500 font-bold text-center mb-10'>Update Your Post</h2>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="title">Title</label>
                <br />
                <input
                  className="h-12 border focus:outline-none w-full py-2 px-4"
                  type="text"
                  {...register("title")}
                  placeholder="Title"
                  defaultValue={modalJob?.title}
                />
              </div>

              <div>
                <label htmlFor="salary">Salary</label>
                <br />
                <input
                  className="h-12 border focus:outline-none w-full py-2 px-4"
                  {...register("salary", { required: true })}
                  placeholder="Salary"
                  type="text"
                  defaultValue={modalJob?.salary}
                />
              </div>

              <div>
                <label htmlFor="vacancy">Vacancy</label>
                <br />
                <input
                  className="h-12 py-2 px-4 focus:outline-none border w-full"
                  type="number"
                  {...register("vacancy", { required: true })}
                  placeholder="Vacancy"
                  defaultValue={modalJob?.vacancy}
                />
              </div>

              <div>
                <label htmlFor="category">Category</label>
                <br />
                <select
                  className="h-12 w-full border focus:outline-none py-2 px-4"
                  {...register("category")}
                  defaultValue={modalJob?.status}
                >
                  <option value="Editor">Editor</option>
                  <option value="Writer">Writer</option>
                  <option value="Developer">Developer</option>
                </select>
              </div>

              <div>
                <label htmlFor="status">Status</label>
                <br />
                <select
                  className="h-12 w-full border focus:outline-none py-2 px-4"
                  {...register("status")}
                >
                  <option value="Remote">Remote</option>
                  <option value="Offline">Offline</option>
                </select>
              </div>

              <div>
                <label htmlFor="photoURL">PhotoURL</label>
                <br />
                <input
                  className="h-12 border focus:outline-none w-full py-2 px-4"
                  type="url"
                  defaultValue="https://img.freepik.com/premium-photo/red-heart-shape-tree-landscape-with-sky-background-valentines-day-romance-concept-digital-art-illustration-generative-ai_10307-3058.jpg"
                  placeholder="photoURL"
                  {...register("photoURL")}
                />
              </div>

              <div>
                <label htmlFor="date">Date</label>
                <br />
                <input
                  className="h-12 border focus:outline-none w-full py-2 px-4"
                  type="date"
                  {...register("date")}
                  defaultValue={modalJob?.date}
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <br />
                <input
                  className="h-12 border focus:outline-none w-full py-2 px-4"
                  type="email"
                  placeholder="email"
                  {...register("email")}
                  value={user?.email}
                />
              </div>

              <div>
                <label htmlFor="skils">Skils</label>
                <CreatableSelect
                  onChange={setSelectOption}
                  defaultValue={selectOption}
                  options={options}
                  isMulti
                />
              </div>

              <div>
                <label htmlFor="decs">Description</label>
                <br />
                <input
                  className="h-12 border focus:outline-none w-full py-2 px-4"
                  {...register("desc")}
                  type="text"
                  placeholder="Description"
                />
              </div>
            </div>

            <input
              className="btn btn-block my-5"
              type="submit"
              value="Update Job"
            />
          </form>
        </div>
      </div>
    </div>
        </>
    );
};

export default Update;