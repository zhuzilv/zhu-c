import React from 'react';

function WithSubComponent<T,P>(component:T,subComponent:P) {
  return Object.assign(component,subComponent);
}
export default WithSubComponent;