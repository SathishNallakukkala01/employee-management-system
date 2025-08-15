import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

const EmployeeComponent = () => {

    const[name,setName] =useState('')
    const[email,setEmail]=useState('')

    const[errors,setErrors]=useState({
        name:'',
        email:''
    })

    const navigator = useNavigate()

    const {id} = useParams()

    useEffect(()=>{
        if(id){
            getEmployee(id)
                .then((res)=>{
                    setName(res.data.name)
                    setEmail(res.data.email)
                })
                .catch((e)=>console.error(e))
        }
    },[])

    function saveOrUpdateEmployee(e){
        e.preventDefault()
        const employee = {name,email}
        if(validateForm()){
            if(id){
                updateEmployee(id,employee)
                    .then(res=>{
                        res.data
                        navigator('/employees')
                    })
                    .catch(e=>console.error(e))
            }
            else{
                createEmployee(employee)
                    .then(res=>{
                        res.data
                        navigator('/employees')
                    })
                    .catch(e=>console.error(e))
                
            }
        }
        
    }

    function validateForm(){
        let valid = true

        const errorsCopy = {...errors}

        if(name.trim()){
            errorsCopy.name=''
        }
        else{
            errorsCopy.name='Name is required'
            valid = false
        }

        if(email.trim()){
            errorsCopy.email=''
        }
        else{
            errorsCopy.email='Email is required'
            valid = false
        }

        setErrors(errorsCopy)
        return valid
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Employee Details</h2>
        }
        else{
            return <h2 className='text-center'>Add Employee Details</h2>
        }
    }

  return (
    <div className='container mt-3 pt-4'>
        <br /> <br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {pageTitle()}
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Employee Name:</label>
                            <input 
                                type="text"
                                placeholder='Enter Employee Name'
                                name='name'
                                value={name}
                                className={`form-control ${errors.name ? 'is-invalid':'' }`}
                                onChange={(e)=>setName(e.target.value)}
                             />
                             {
                                errors.name && <div className='invalid-feedback'>{errors.name}</div>
                             }
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Employee Email Id:</label>
                            <input 
                                type="email"
                                placeholder='Enter Employee Email Id'
                                name='email'
                                value={email}
                                className={`form-control ${errors.email ? 'is-invalid':'' }`}
                                onChange={(e)=>setEmail(e.target.value)}
                             />
                             {
                                errors.email && <div className='invalid-feedback'>{errors.email}</div>
                             }
                        </div>

                        <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeComponent