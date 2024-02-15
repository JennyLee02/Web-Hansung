import React, {useState} from 'react';
import { IoClose } from "react-icons/io5";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import './email.css';

export const Email = () => {
    const [expandContact, setExpandContact] = useState(false);
    const toggleContact = (e) => {
        e && e.preventDefault(); // Prevent form submission
        setExpandContact(!expandContact);
    }

    const handleClosing = () => {
        // Assuming your widget has a reference or can be selected
        const widget = document.querySelector('.email-widget');
        if (widget) {
            widget.style.animation = 'collapseEmailWidget 0.5s ease forwards';
            // Set a timeout matching your animation duration before closing
            setTimeout(() => {
                setExpandContact(false);
            }, 500); // This duration should match your animation duration
        }
    };

  return (
    <div className='contact-us'>
        {!expandContact && (
                <BiSolidMessageRoundedDots onClick={toggleContact} className='toggle-btn'/>
        )}

        {expandContact && (
            <>
                <div className='backdrop' onClick={handleClosing}></div>
                <div className='email-widget'>
                    <form>
                        <button className='exit' type="button" onClick={handleClosing}><IoClose/></button>
                        <div className='heading'>
                            <h3>GET IN TOUCH</h3>
                            <h4>WITH US TODAY!</h4>
                        </div>

                        <label>TITLE</label>
                        <input
                            type="text"
                            name="title"
                            // value={formDetails.from_name}
                            // onChange={handleChange}
                            placeholder="제목"
                            required
                        />
                        <label>EMAIL</label>
                        <input
                            type="email"
                            name="email"
                            // value={formDetails.email}
                            // onChange={handleChange}
                            placeholder="ex) youremail@naver.com"
                            required
                        />
                        <label className='msg-label'>MESSAGE</label>
                        <textarea
                            name="message"
                            // value={formDetails.message}
                            // onChange={handleChange}
                            placeholder="Your Message"
                            required
                        />
                        <input className='submit-btn' type="submit" value="Send" />
                    </form>
                </div>
            </>
        )}
    </div>
    
  )
}
