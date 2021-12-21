import React from 'react';


interface Props {
  size?: size;
  type?: 'primary' | 'warnning'
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

type size = 'small' | 'large';

export {Props,size}