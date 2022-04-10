import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import {nanoid} from 'nanoid';
import data from './MOCK-DATA.json';
import 'bootstrap/dist/css/bootstrap.min.css';


const Form = () => {

const[contacts,setContacts]=useState(data);
const { register} = useForm(); 

const[addFormData, setAddFormData]=useState({
    fullName:"",
    address:"",
    phoneNumber:"",
    email:""
});


const handleAddFormChange=(event)=>{
    event.preventDefault();

    const fieldName=event.target.getAttribute('name');
    const fieldValue=event.target.value;

    const newFormData={...addFormData};
    newFormData[fieldName]=fieldValue;

    setAddFormData(newFormData);
};

const handleAddFormSubmit=(event)=>{
    event.preventDefault();

    const newContact={
        id:nanoid(),
        fullName:addFormData.fullName,
        address:addFormData.address,
        phoneNumber:addFormData.phoneNumber,
        email:addFormData.email,
    };

    const newContacts=[...contacts,newContact];
    setContacts(newContacts);
};


const Input = ({ label,register,onChange,required}) => (
    <input {...register(label, { required })} 
    component="input"
    placeholder={`Enter a ${label}`} 
    autoComplete='off' 
    className="form-control"
    required={required}
    onChange={handleAddFormChange}
    // onChange={onChange}
   />  
);



  return (
      <>
    <div>
        <h2>Add a new contact : </h2>

        <form onSubmit={handleAddFormSubmit}>
       

        <Input label="Name" name="fullName" type= "text" register={register} required/>
        <Input label="Address" name="address" type= "text" register={register} required/>
        <Input label="Phone Number" name="phoneNumber" type="number" register={register} required/>
        <Input label="Email" name="email" type="email" register={register} required/>
        <button type="submit">ADD</button>

        </form>
    </div>
    </>
  );
};

export default Form;