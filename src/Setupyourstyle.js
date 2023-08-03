import React from 'react'
import clsx from 'clsx';
import { useState } from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import MyTextArea from './CustomTextArea';



const initialValues={
    fashionid :"",
    dob:null,
    gender:"",
    city:"",
    area:"",
    whatsappnum:"",
    bio:"",
    term:"",
    textarea:"",
    terms: false,
    promomsg: false,

}

const onSubmit= values=>{
    console.log("Form Values",values)
}

const today = new Date();

const validationSchema = Yup.object({
    fashionid:Yup.string().required("Required"),
        dob: Yup.date()
        .required("Date of Birth is required")
        .max(today, "Future date not allowed"),
        city:Yup.string().required("Required"),
        area:Yup.string().required("Required"),
        whatsappnum:Yup.string()
        .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
        ,  'Phone number is not valid').min(10,'number must be atleast 10 digit').required(),
        bio:Yup.string().nullable(),
      
        terms: Yup.boolean().oneOf([true], 'You need to accept the terms and conditions'),
        promomsg: Yup.boolean()



})

    
function SetUpYourStyle() {
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);
    const [activeButtonLogin, setActiveButtonLogin] = useState(0);

    const SignupHandler = () =>{
        setActiveButtonIndex(1) ;
         setActiveButtonLogin(0);
    }

    const LoginHandler = () => {
        setActiveButtonLogin(1) ;
        setActiveButtonIndex(0);
    }

    const handleClick = (event, text) => {

      console.log(event)
      const { name } = event.currentTarget;
      console.log("current target",event.currentTarget)
      console.log("target",event.target)


      console.log("Button is clicked", name);
  
      if (name === "button1") alert(`Button1 is clicked : ${text}`);
      if (name === "button2") alert(`Button2 is clicked : ${text}`);
    };
  
 
   
  return (
    <div className="grid grid-cols-2 gap-[5.62rem] justify-items-center mt-[2.19rem]">


      <div  className="  max-w-[31.25rem] max-h-[50.625rem] ">
      <Formik
    initialValues={initialValues}
    validationSchema = {validationSchema}
    onSubmit = {onSubmit}>
        <Form  className="max-w-[31.25rem] max-h-[50.625rem] ">
        <div className='flex gap-x-[1.88rem]'>       

        <div onClick={SignupHandler}
        className={clsx(
            {  "text-white bg-[#484FA2]" : activeButtonIndex===1,
             "text-black" : activeButtonIndex===0
            } ,
            ' flex justify-center items-center w-[12.5rem] h-[3.125rem] rounded-[0.3125rem]  text-[#fff] text-[1.3125rem] border-[#484FA2] border-[1px] font-semibold leading-1.31 tracking-light ]'
            )}>Sign Up</div>
        <div onClick={LoginHandler}
        className={clsx(
            {  "text-white bg-[#484FA2]" : activeButtonLogin===1,
             "text-black" : activeButtonLogin===0
            } ,
            'flex justify-center items-center w-[12.5rem] h-[3.125rem] rounded-[0.3125rem] border-[1px] border-[#484FA2]  text-[1.3125rem] font-semibold leading-1.31 tracking-lighttext-black')}>Login</div>

        </div>
            
            
            

            <div className='flex flex-col mt-[2.25rem]'>
                        <Field className="border-[1px] border-[#8a8a8a] max-w-[28.125rem]  h-[3.125rem]  py-[1.06rem] pl-[1.56rem] rounded-[0.3125rem]" type="text" id="fashionid" name="fashionid " placeholder="Fashion ID *" />
                        <ErrorMessage name='fashionid' component="div" className="text-red-500 text-xs italic"/>
            </div>

            <div className='flex flex-col mt-[2.25rem]'>
                        <Field className="border-[1px] border-[#8a8a8a] max-w-[28.125rem]  h-[3.125rem]  py-[1.06rem] pl-[1.56rem] rounded-[0.3125rem] " type="date" id="dob" name="dob " placeholder="Date Of Birth *" />
                        <ErrorMessage name='dob' component="div" className="text-red-500 text-xs italic"/>
            </div>
            
         

            <div className="flex flex-col justify-start mt-[2.25rem]">    
                 <p className='text-[#8a8a8a] text-[1rem] font-medium leading-4 -tracking-tight'>Gender *</p>
                  <div className="flex justify-between mt-[0.75rem]">
                               <button type="button"
                                className='max-w-[38.1rem]  max-h-[55.8125rem] border-[#8a8a8a] border-[0.06rem] py-[1.06rem] px-[2.63rem] text-[1rem] font-normal leading-4 -tracking-tight rounded-[0.3125rem]'
                                name="Male"
                                // type="button"
                                onClick={(event) => handleClick(event, "Male")}
                              >
                                Male
                              </button> 

                               <button type="button"
                                className='max-w-[38.1rem]  max-h-[55.8125rem] border-[#8a8a8a] border-[0.06rem] py-[1.06rem] px-[2.63rem] text-[1rem] font-normal leading-4 -tracking-tight rounded-[0.3125rem]'

                                name="Female"
                                onClick={(event) => handleClick(event, "Female")}
                              >
                                Female
                              </button> 

                               <button type="button"
                                className='max-w-[38.1rem]  max-h-[55.8125rem] border-[#8a8a8a] border-[0.06rem] py-[1.06rem] px-[2.63rem] text-[1rem] font-normal leading-4 -tracking-tight rounded-[0.3125rem]'
                                name="Special"
                                onClick={(event) => handleClick(event, "Special")}

                              >
                                Special
                              </button>
                  </div>
           

            </div>
            
            <div className='flex justify-between mt-[2.25rem]'>
                    <div>
                    <Field className="text-[#8a8aa8] border-[0.06rem] border-[#8a8a8a] max-w-[13.125rem] max-h-[3.125rem] py-[1.03rem] pl-[1.56rem] rounded-[0.3125rem]"  type="text" id="city" name="city " placeholder="City *" />
                              <ErrorMessage name='city' component="div" className="text-red-500 text-xs italic"/>
                    </div>
                    <div>
                    <Field className="text-[#8a8aa8] border-[0.06rem] border-[#8a8a8a] max-w-[13.125rem] max-h-[3.125rem] py-[1.03rem] pl-[1.56rem] rounded-[0.3125rem]"  type="text" id="area" name="area " placeholder="Area *" />
                              <ErrorMessage name='area' component="div" className="text-red-500 text-xs italic"/>
                    </div>
            </div>

            <div className='flex flex-col mt-[2.25rem]'>
                  <Field className="text-[#8a8aa8] border-[0.06rem] border-[#8a8a8a] max-w-[28.125rem] max-h-[3.125rem] w-full py-[1.03rem] pl-[1.56rem] rounded-[0.3125rem]"  type="text" id="whatsappnum" name="whatsappnum " placeholder="Whatsapp number *" />
                  <ErrorMessage name='whatsappnum' component="div" className="text-red-500 text-xs italic"/>
            </div>

            <div className='flex flex-col mt-[2.44rem]'>
                    <MyTextArea
                    label=""
                    name="bio"
                    rows="4"
                    placeholder="Bio"
                  />
            </div>

            <div className='flex mt-[2rem]'>
            <Field type="checkbox" name="terms" value="terms"/>
                  
                  <label className=" ml-[0.75rem] font-medium text-xs leading-3 -tracking-widest text-[#484FA2] ">
                    Terms & Conditions *
                  </label>
            <ErrorMessage component="div" className="text-red-500 text-xs italic ml-2" name='terms'/>

            </div>


            <div className='flex mt-[2rem]'>
            <Field type="checkbox" name="promomsg" value="promomsg" className=""/>

                  <label className=" ml-[0.75rem] font-medium text-xs leading-3 -tracking-widest text-[#484FA2] ">
                  Get Promotional messages through whatsapp 
 
                  </label>

            </div>


            <button type="submit" className='p-4 mt-[1.19rem] max-w-[28.125rem] w-full h-[3.13rem] rounded-[2.5rem] bg-[#494DA2] text-white text-[1.3125rem] font-semibold leading-1.31 tracking-tight' >Continue</button>
            <button type='button' className='p-4 mt-[0.69rem] max-w-[28.125rem] w-full h-[3.13rem] rounded-[2.5rem] bg-[#494DA2] text-white text-[1.3125rem] font-semibold leading-1.31 tracking-tight' >Skip For Now</button>

        </Form>

    </Formik>

      </div>  

     
        
    </div>
   
  )
}
export default SetUpYourStyle