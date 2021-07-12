import React,{useState} from 'react';

const Form = ({div,setDiv}) => {

	const [input,setInput] = useState({})
	const handleChange = e =>{
		e.preventDefault();
		const {name,value} = e.target;
		setInput({...input,[name]:value})
	}


	const handleSubmit = e =>{
		e.preventDefault();
		setDiv([...div,input])
	}
  return (
    <form onSubmit={handleSubmit} class="form">
    	<p>Color 
    		<input onChange={handleChange} name="background" type="color"/><br/>
    		<input onChange={handleChange} name="width" type="number"/><br/>
    		<input onChange={handleChange} name="height" type="number"/><br/>
    		<input className="btn btn-primary" type="submit" value="add"/>
    	</p>
    </form>
  )
}

export default Form;