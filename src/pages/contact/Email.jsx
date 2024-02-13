import React from 'react';
import './email.css';

export const Email = () => {
  return (
    <div className='email-widget'>
        <form>
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
            <label>MESSAGE</label>
            <textarea
                name="message"
                // value={formDetails.message}
                // onChange={handleChange}
                placeholder="Your Message"
                required
            />
            <input type="submit" value="Send" />
        </form>
        
    </div>
  )
}
