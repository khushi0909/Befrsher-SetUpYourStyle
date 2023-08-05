import React from 'react'
import formgirlimage from "../src/formgirlimage.jpg"
import clsx from 'clsx';
import { useState } from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import MyTextArea from './CustomTextArea';
import { date, object } from "yup"



const initialValues={
  fashionid:"",
  dob:"",
  city:"",
  area:"",
  whatsappnum:"",
  bio:"",
  terms:false,
  promomsg:false,

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
      promomsg: Yup.boolean(),
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
  <div className="grid justify-between  grid-cols-2 sm:grid-cols-1 4xl:h-vh 2xl:text-[1.3125rem] 4xl:text-[2.3125rem] ">
        <div className="shadow-my_shadow rounded-[2rem]  max-w-full  md:max-h-full  2xl:max-h-[62.625rem] 4xl:max-h-full sm:block 4xl:hidden" >
        <img className=" h-full rounded-[2rem]" src={formgirlimage} alt="girlimg"/>
      </div>

    <div  className=" 2xl:max-h-[62.625rem] flex sm:mt-4 md:max-h-full  4xl:max-h-full 4xl:max-w-full ">
    <Formik
  initialValues={initialValues}
  validationSchema = {validationSchema}
  onSubmit = {onSubmit}>  
      <Form  className="p-8 xl:p-4 xl:mx-4 lg:mx-1 2xl:ml-[6.5rem] 4xl:ml-[5rem] sm:w-full lg:max-w-full 2xl:max-w-[40.25rem] 4xl:max-w-full  max-h-[62.625rem] 4xl:max-h-full 4xl:mr-[6.56rem] ">
      <div className='flex justify-between sm:flex-col  '>       

      <div onClick={SignupHandler}
      className={clsx(
          {  "text-white bg-[#484FA2]" : activeButtonIndex===1,
           "text-black" : activeButtonIndex===0
          } ,
          ' flex justify-center items-center sm:max-w-full p-4 2xl:max-w-[12.5rem] 2xl:max-h-[3.125rem] w-full 4xl:max-w-[16.5rem] 4xl:max-h-[6.125rem] rounded-[0.3125rem]  text-[#fff] 2xl:text-[1.3125rem] 4xl:text-[2.3125rem] border-[#484FA2] border-[1px] font-semibold leading-1.31 tracking-light ]'
          )}>Sign Up</div>
      <div onClick={LoginHandler}
      className={clsx(
          {  "text-white bg-[#484FA2]" : activeButtonLogin===1,
           "text-black" : activeButtonLogin===0
          } ,
          'flex justify-center sm:max-w-full items-center sm:mt-2 2xl:max-w-[12.5rem] 2xl:max-h-[3.125rem] 4xl:max-h-[6.125rem] 4xl:max-w-[16.25rem] w-full rounded-[0.3125rem] border-[1px] border-[#484FA2]  2xl:text-[1.3125rem] 4xl:text-[2.3125rem] p-4 font-semibold leading-1.31 tracking-lighttext-black')}>Login</div>

      </div>
          
          
          

          <div className='flex flex-col mt-[2.25rem]'>
                      <Field className="border-[1px] border-[#8a8a8a] sm:max-w-full  4xl:max-w-full  2xl:max-h-[3.125rem] 4xl:max-h-[6.125rem] py-[1.06rem] pl-[1.56rem] rounded-[0.3125rem]" type="text" id="fashionid" name="fashionid" placeholder="Fashion ID *" />
                      <ErrorMessage name='fashionid' component="div" className="text-red-500 2xl:text-xs italic 4xl:text-2xl"/>
          </div>

          <div className='flex flex-col mt-[2.25rem] sm1:mt-4 '>
                      <Field className=" flex justify-center items-center  border-[1px] border-[#8a8a8a]  4xl:max-w-full 2xl:max-h-[3.125rem]  4xl:max-h-[6.125rem] 4xl:h-full  py-[1.06rem] pl-[1.56rem] rounded-[0.3125rem] 4xl:text-[1.5rem] 2xl:text-[1.3125rem]" type="date" id="dob" name="dob" placeholder="Date Of Birth *" />
                      <ErrorMessage name='dob' component="div" className="text-red-500 2xl:text-xs italic 4xl:text-2xl"/>
          </div>
          
       

          <div className="flex flex-col justify-start mt-[2.25rem] sm1:mt-4">    
               <p className='text-[#8a8a8a] 2xl:text-[1rem] font-medium leading-4 -tracking-tight 4xl:text-[2rem] 2xl:mb-1 4xl:mb-2'>Gender *</p>
                <div className="flex  2xl:justify-between 4xl:gap-14 md:gap-0 4xl:items-center  mt-[0.75rem] md:flex-col">
                            <button type="button"
                              className=' flex justify-center items-center  md:mt-1 4xl:text-[2.5rem] 4xl:py-[2rem] 4xl:px-[2rem]  lg:px-2 2xl:max-w-full md:w-full 4xl:max-w-[10rem] max-h-[55.8125rem] border-[#8a8a8a] border-[0.06rem] 2xl:py-[1.06rem] px-[2.63rem] 2xl:text-[1rem] font-normal leading-4 -tracking-tight rounded-[0.3125rem]'
                              name="Male"
                              // type="button"
                              onClick={(event) => handleClick(event, "Male")}
                            >
                              Male
                            </button> 

                             <button type="button"
                              className= 'lg:px-2 md:w-full flex justify-center items-center md:mt-1 4xl:text-[2.5rem] 4xl:py-[2rem] 4xl:px-[2rem]   2xl:max-w-full 4xl:max-w-[10rem] max-h-[55.8125rem] border-[#8a8a8a] border-[0.06rem] 2xl:py-[1.06rem] px-[2.63rem] 2xl:text-[1rem] font-normal leading-4 -tracking-tight rounded-[0.3125rem]'

                              name="Female"
                            >
                              Female
                            </button>
                             <button type="button"
                              className='md:w-full  flex justify-center items-center md:mt-1 4xl:text-[2.5rem] 4xl:py-[2rem] 4xl:px-[2rem]  lg:px-2 2xl:max-w-full 4xl:max-w-[10rem] max-h-[55.8125rem] border-[#8a8a8a] border-[0.06rem] 2xl:py-[1.06rem] px-[2.63rem] 2xl:text-[1rem] font-normal leading-4 -tracking-tight rounded-[0.3125rem]'
                              name="Special"
                            >
                              Special
                            </button>
                </div>
         

          </div>
          
          <div className='flex 4xl:flex-row 4xl:justify-between  md:flex-col mt-[2.25rem] md:mt-5'>
                  <div className='flex flex-col   '>
                  <Field className="flex text-[#8a8aa8] border-[0.06rem] border-[#8a8a8a] md:max-w-full lg:max-w-[10rem] 4xl:max-w-[16rem] 2xl:max-w-[13.125rem] 2xl:max-h-[3.125rem] 4xl:max-h-[6.125rem] py-[1.03rem]  pl-[1.56rem] rounded-[0.3125rem]"  type="text" id="city" name="city" placeholder="City *" />
                  <ErrorMessage name='city' component="div" className="text-red-500 2xl:text-xs italic 4xl:text-2xl"/>
                  </div>
                  <div className='flex flex-col '>
                  <Field className=" md:mt-1 flex text-[#8a8aa8] border-[0.06rem] border-[#8a8a8a] md:max-w-full lg:max-w-[10rem] 4xl:max-w-[16rem] 2xl:max-w-[13.125rem]  2xl:max-h-[3.125rem] 4xl:max-h-[6.125rem] py-[1.03rem] pl-[1.56rem] rounded-[0.3125rem]"  type="text" id="area" name="area" placeholder="Area *" />
                            <ErrorMessage name='area' component="div" className="text-red-500 2xl:text-xs italic 4xl:text-2xl"/>
                  </div>
          </div>

          <div className='flex flex-col mt-[2.25rem] md:mt-5'>
                <Field className="text-[#8a8aa8]  border-[0.06rem] border-[#8a8a8a] lg:max-w-full 4xl:max-w-full  2xl:max-h-[3.125rem] 4xl:max-h-[6.125rem] w-full py-[1.03rem] pl-[1.56rem] rounded-[0.3125rem]"  type="text" id="whatsappnum" name="whatsappnum" placeholder="Whatsapp &#10; number *" />
                <ErrorMessage name='whatsappnum' component="div" className="text-red-500 2xl:text-xs italic 4xl:text-2xl"/>
          </div>

          <div className='flex flex-col mt-[2.44rem] md:mt-5 4xl:max-w-full'>
                  <MyTextArea
                  label=""
                  name="bio"
                  rows="4"
                  placeholder="Bio"
                />
          </div>

          <div className='flex md:flex-col mt-[2rem] md:mt-2'>
            <div> 
            <Field type="checkbox" name="terms" />
                
                <label className=" ml-[0.75rem] font-medium 2xl:text-xs leading-3 -tracking-widest text-[#484FA2] 4xl:text-2xl">
                  Terms & Conditions *
                </label>

            </div>
          
          <ErrorMessage component="div" className="text-red-500 2xl:text-xs italic ml-2 4xl:text-2xl" name='terms' />

          </div>


          <div className='flex mt-[2rem] md:mt-2'>
          <Field type="checkbox" name="promomsg"  />

                <label className=" ml-[0.75rem] font-medium 2xl:text-xs leading-3 -tracking-widest text-[#484FA2] 4xl:text-2xl ">
                Get Promotional messages through whatsapp 
                </label>

          </div>


          <button type="submit" className=' flex justify-center items-center sm:max-w-full 2xl:p-4 mt-[1.19rem]  4xl:max-w-full    w-full 2xl:max-h-[3.13rem] rounded-[2.5rem] 4xl:max-h-[6.13rem] bg-[#494DA2] text-white 2xl:text-[1.3125rem] 4xl:text-[3.3125rem] 4xl:p-8 font-semibold leading-1.31 tracking-tight' >Continue</button>
          <button type='button' className='flex justify-center items-center sm:max-w-full 2xl:p-4 mt-[0.69rem]   4xl:max-w-full w-full 2xl:max-h-[3.13rem] 4xl:max-h-[6.13rem] rounded-[2.5rem] bg-[#494DA2] text-white 2xl:text-[1.3125rem]  4xl:text-[3.3125rem] 4xl:p-8 font-semibold leading-1.31 tracking-tight' >Skip For Now</button>

      </Form>

  </Formik>

    </div>  

       <div className="shadow-my_shadow rounded-[2rem]  max-w-full sm:hidden 4xl:block md:max-h-full  2xl:max-h-[62.625rem] 4xl:max-h-full" >
        <img className=" h-full rounded-[2rem]" src={formgirlimage} alt="girlimg"/>
      </div> 
      
  </div>
 
)
}
export default SetUpYourStyle