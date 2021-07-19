import React from 'react'
import classnames from 'classnames'
export default function InputGroup(props) {
    return (
 
            
            <div class="form-group">
               <label for="">{props.label}</label>
                 <input 
                 type={props.type} 
                 // classenames est une fonction (key ;value )
                className={classnames('form-control',
                    {"is-invalid":props.error}
                )}

                 name={props.name} 
                 value={props.value}
                 onChange={props.onChange} 
             />
                           <div className="invalid-feedback">{props.error}</div>
             </div>
       
    )
}
