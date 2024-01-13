import React from 'react';

const Contact = () => { 
  
   
    return (
        <div id='contact'>
            <h1>CONTACT US</h1>
            <form method='post'>
                <input  type="text" name='name' placeholder='Full Name' />
                <input  type="email" name='email' placeholder='Type Your E-Mail' />
                <textarea  name="message" placeholder='Write Here.......'>
                </textarea>
                    <input type="Submit" value='send'/>
            </form>
        </div>
    );
}

export default Contact;
