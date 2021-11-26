import React from 'react'

function WithRef<T,P>(component:React.ForwardRefRenderFunction<T,P>) {

  return React.forwardRef<T,P>(component)
}
export default WithRef;