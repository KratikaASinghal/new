
import emailjs from '@emailjs/browser';
//import Nav from './Nav';
import { useRef } from 'react';
//import Hero from './Hero';
//import Footer from './Footer';
//import  Contactus from './Contactus';

const Contact=()=>{
    const form=useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_pekxvff', 'template_6dwf6d7', form.current, 'fTW8nxo_BOOe8N6Is')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    return(
        <div>
        <div className="container border"
            style={{marginTop:"130px",
            width:'50%',
            backgroundImage:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2gOp_o0HxgwsnD2iyj3XXC2eFq5Q8KyYD6A&usqp=CAU')`,
            backgroundPosition:"center",
            backgroundSize:"cover",

            }}>
           {/* <Nav /> */}
        {/* <Hero  */}
        {/* cName ="hero" */}
        {/* heroimg={require('./img/nature3.jpg')}   */}
        {/* title="lorem" */}
        {/* /> */}
        {/* <Contactus /> */}
         

        <h1 style={{marginLeft:"190px",
                    marginTop:"25px"}}>Contact Form</h1>
        <form ref={form} className="row" style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" className="form-control" />

            <label>Email</label>
            <input type="text" name="user_email" className="form-control" />

            <label>Message</label>
            <textarea name="message" rows="4" className="form-control" />
            <input type="submit"  value="Send" className="form-control btn btn-primary" style={{marginTop:"30px"}}/>

        </form>
        
        </div>
       
        {/* <Footer/> */}
            </div>
        )
        }

export default Contact;