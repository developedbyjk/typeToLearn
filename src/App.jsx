import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import nanoid from 'nanoid'
import './App.css'

function App() {
  
  const [formdata, setFormdata] = useState({
    name:'',
   
  })
//trigger on onchane event
  const handleChange = (e) => {
    //exract name and value from event target
    const { name,value } = e.target

		function hijackResults() {

      //function work when name is name
			let string = ""
			if (name === "name") {
				string = `Whatever you type will not work🥺😂. because this is controlled by React⚛️. it takes length of all you type and return with predefine string as string.slice(0, value.length)! Awesome na!😉💖🎉`;
			}
      //replace whatever user type
      console.log(string.slice(0, value.length))
			return string.slice(0, value.length)

		}

    //store modified string based on condition 
    let dataToRecord

		if (name === "name") {
			dataToRecord = hijackResults()
		}

  

		setFormdata((prevFormData) => {
			return {
				...prevFormData,
				[name]: dataToRecord
			}
		})



  }


  return (
    <>
     
      <form >
         
        <textarea
         type="textarea"
          name="name"
           id="input" 
           className='input'
           placeholder='Type something to see magic'
           value={formdata.name}
           onChange={handleChange}
          
           />

           
           
      </form>
      

    </>
  )
}

export default App
