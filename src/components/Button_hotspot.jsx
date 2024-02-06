import React, {useState} from 'react';
import './hotspot.css';

export const Button_hotspot = ({title, description, image}) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility= () => {
        setIsVisible(!isVisible);
    }

  return (
    <div>
        <button 
             className='hotspot-button'
            onClick={toggleVisibility} 
        />
        {isVisible && (
            <div className='hotspot-content'>
                <h2>{title}</h2>
                <p>{description}</p>
                <img src={image} alt={title}/>
            </div>
        )}
    </div>
  )
}




// 다음 해야할일:
// - 핫스팟 버튼 만들기
// 자동 움짤 페이지 만들기
// 스냅스크롤 적용