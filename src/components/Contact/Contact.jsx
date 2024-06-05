import React,{useReducer} from 'react';
import './Contact.css'
import { FaYoutube } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
const Bot_Token = "6409705996:AAH7HRsbbymTuGEK2h8joN7nQX0Eypu7MRg"
const Chat_ID = "-1002098227822"
const User_ID = "5125371890"
const intialState = {
    name:'',
    email:'',
    message:''
}

const reducer = (state,action) => {
    switch(action.type){
        case 'name':
            return {
               ...state,
                name:action.payload
            }
        case 'email':
            return {
               ...state,
                email:action.payload
            }
        case'message':
            return {
               ...state,
                message:action.payload
            }
        default:
            return state;
    }
}

const Contact = () => {
    const [state,dispatch] = useReducer(reducer,intialState)
    
const handelSubmit = (e) => {
    e.preventDefault();
    let text = "Buyurtma %0A%0A"
    text +=`Ismi:${state.name}%0A`
    text +=`Email:${state.email}%0A`
    text +=`Text:${state.message}%0A`
    
    let url = `https://api.telegram.org/bot${Bot_Token}/sendMessage?chat_id=${Chat_ID}&text=${text}`

    let api = new XMLHttpRequest()
    api.open("GET", url, true)
    api.send()
}

    return (
        <div>
           <section id='contact'>
            <h1 className='text'>Contact Me</h1>
            <p className="contac_link">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil harum <br /> reiciendis officiis, est perspiciatis.</p>
            <form action="" className="contacForm container "  onSubmit={handelSubmit}>
            <input
            required
            onChange={e => dispatch({type: 'name', payload: e.target.value})}
            type="text" placeholder='Your name' className='name' />
            <input
            required
             onChange={e => dispatch({type: 'email', payload: e.target.value})}
            type="email" placeholder='Your email' className='email' />
            <textarea
            required
            onChange={e => dispatch({type: 'message', payload: e.target.value})}
             className='msg' name="message"  rows="5"  placeholder='Your message '></textarea>
           <button type='submit' className="submitBtn">
            Submit
           </button>
           <div className="links">
           <FaInstagramSquare  className='link'/>
           <PiPaperPlaneTiltFill  className='link'/>
           <FaFacebookSquare  className='link'/>
           <FaYoutube  className='link'/>
           </div>
            </form>
           </section>
        </div>
    );
}

export default Contact;
