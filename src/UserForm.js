import React,{ useState} from 'react'

const UserForm = () => {
  const initialState={
    username:"",
    email:"",
    password:""
  }

  const [formData,setFormData]=useState(initialState)

  // const handleUsernameChange =(e)=>{
  //  setUsername(e.target.value)
  // }

  // const handleEmailChange =(e)=>{
  //   setEmail(e.target.value)
  // }
  const handleChange=(e)=>{
    const {name,value}=e.target;
   
    setFormData(data =>({
      ...data,
      [e.target.name]:e.target.value
    }))

  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    const {username,email,password}=formData
    alert(`Created user,${username} with email ${email} and password ${password}`)
    setFormData("")
   
  }
  return (
    // onSubmit on form or onClick on button
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'>Enter Username</label>
      <input 
      id='username' 
      name="username"
      placeholder='username'
      value={formData.username} 
      onChange={handleChange}/>

      <label htmlFor='email'>Email</label>
      <input 
      type="email" 
      placeholder='email' 
      name='email'
      id='email' 
      value={formData.email} 
      onChange={handleChange}/>

      <label htmlFor='password'>Password</label>
      <input
      type="password"
      placeholder='password'
      name='password'
      id='password'
      value={formData.password}
      onChange={handleChange}
      
      />

      <button >Add me to List!</button>
    </form>
  )
}

export default UserForm