import React from 'react'
import classNames from 'classnames';
// import './style';
import { Props } from './interface';

// & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
export const Button = function (props: Props ){
  
  const { size = 'small', type = 'primary', style, children } = props;
  const classPrefix='gio-button'
  // small big  

  const ButtonClass = classNames(classPrefix ,{
    [`${classPrefix}-${size}`]: ['small','large'].includes(size ),
    [`${classPrefix}-${type}`]: ['primary', 'warnning'].includes(type)
  })

  return <button className={ButtonClass} style={style} >
    {children}
    </button>

}



// Button.display = 'gio-button';


export default Button;



// <Button type='1234'>
//   <img></img>  
// </Button>