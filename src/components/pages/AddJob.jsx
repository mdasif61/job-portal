import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CreatableSelect from "react-select/creatable";
import '../css/AddJob.css';

const AddJob = () => {
    const [selectOption,setSelectOption]=useState(null)
    const {watch,handleSubmit, register, formState:{errors}}=useForm();
    const onSubmit=(data)=>{
        data.skils=selectOption
        console.log(data)
    }

    const options=[
        {value:'Javascript', label:'Javascript'},
        {value:'C++', label:'C++'},
        {value:'Python', label:'Python'},
        {value:'HTML', label:'HTML'},
        {value:'Css', label:'Css'},
        {value:'React', label:'React'},
        {value:'MongoDB', label:'MongoDB'},
        {value:'Firebase', label:'Firebase'},
    ]

    return (
        <div>
            <div>
                <div>

                </div>
                <div className='bg-gray-100 border-gray-200 border-2 p-10 rounded-xl my-10'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    
                        <div className='grid grid-cols-2 gap-6'>
                        <div>
                        <label htmlFor="title">Title</label><br/>
                        <input className='h-12 border focus:outline-none w-full py-2 px-4' type="text" {...register("title")} placeholder='Title' name="" id="" />
                        </div>

                        <div>
                        <label htmlFor="salary">Salary</label><br/>
                        <input className='h-12 border focus:outline-none w-full py-2 px-4' {...register("salary", {required:true})} placeholder='Salary' name="" id="" />
                        </div>

                        <div>
                        <label htmlFor="vacancy">Vacancy</label><br/>
                        <input className='h-12 py-2 px-4 border w-full' type="number" {...register("vacancy", {required: true})} placeholder='Vacancy' name="" id="" />
                        </div>

                        <div>
                            <label htmlFor="category">Category</label><br/>
                            <select className='h-12 w-full border focus:outline-none py-2 px-4' {...register("category")}>
                            <option value="Editor">Editor</option>
                            <option value="Writer">Writer</option>
                            <option value="Developer">Developer</option>
                        </select>
                        </div>

                        <div>
                            <label htmlFor="status">Status</label><br/>
                        <select className='h-12 w-full border focus:outline-none py-2 px-4' {...register("status")}>
                            <option value="Editor">Remote</option>
                            <option value="Offline">Offline</option>
                        </select>
                        </div>

                        <div>
                            <label htmlFor="photoURL">PhotoURL</label><br/>
                            <input className='h-12 border focus:outline-none w-full py-2 px-4' type="url" placeholder='photoURL' {...register("photoURL")} name="" id="" />
                        </div>

                        <div>
                            <label htmlFor="date">Date</label><br/>
                            <input className='h-12 border focus:outline-none w-full py-2 px-4' type="date" {...register("date")} name="" id="" />
                        </div>

                        <div>
                            <label htmlFor="email">Email</label><br/>
                            <input className='h-12 border focus:outline-none w-full py-2 px-4' type="email" placeholder='email' {...register("email")} name="" id="" />
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
                            <label htmlFor="decs">Description</label><br/>
                            <input className='h-12 border focus:outline-none w-full py-2 px-4' {...register("desc")} type="text" placeholder='Description' name="" id="" />
                        </div>
                        </div>

                        <input className='btn btn-block my-5' type="submit" value="Post Job" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddJob;