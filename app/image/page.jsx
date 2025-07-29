"use client"
import React, { useState } from 'react'

const UploadImage = () => {
    const[image,setImage]=useState(null)
    const onChangeHandler=(e)=>{
        if(e.target.files){

            setImage(e.target.files[0])
        }
    }
    const onSubmitHandler=async(e)=>{
        e.preventDefault()
        try{
            if(!image)return;
            const formData = new FormData();
            formData.append("image",image)

            const res = await fetch("/api/test",{
                method:'POST',
                body:formData
            })
            const data = await res.json();
            console.log(data)
  
        }catch(err){
     console.log(err)
        }
    }
  return (
<form onSubmit={onSubmitHandler}>
        <input type="file" name="" id="" className='border' onChange={onChangeHandler}/>
        <button className='bg-black text-white py-2 px-4'>Upload</button>
    </form>
  )
}

export default UploadImage