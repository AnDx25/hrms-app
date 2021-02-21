import React from 'react'

const defaultClasses={
    inputClassName:"",
    labelClassName:"",
    iconClassName:"",
    inputComponentClassName:"",
    inputIconContainer:""
}
const Input=({type="text",value,name="",label="",id="",icon="",classes={...defaultClasses},placeholder,onChange})=>{
    const {inputClassName,labelClassName,iconClassName,inputComponentClassName,inputIconContainer}=classes
    return(
        <div className={`input-component ${inputComponentClassName}`}>
            {
                label &&( <label className={`label ${labelClassName}`}>{label}</label>)
            }
           <div className={`input-icon-container ${inputIconContainer}`}>
            <input id={id} onChange={onChange} className={`input ${inputClassName}`} type={type} value={value} name={name} placeholder={placeholder}/>
            {/* id={id} onChange={onChange} className={`input ${inputClassName}`} type={type} value={value} name={name} placeholder={placeholder} */}
            {icon}
            </div>
        </div>
    )
}
export default Input;