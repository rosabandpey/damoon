import React from 'react'
import { Controller  } from 'react-hook-form'


export default function Select({
  name,
  control,
  errors,
  title,
  options,
  onChange,
  defaultValue,
  disabled,
  ...others
}) {
  return (
    
    <div {...others}>
      
      <label className="form-label">{title}</label>
        <Controller
            defaultValue = {defaultValue || ''}
          control={control}
          name={name}
          render={({ field: { onChange, value, name } }) => (
            <select
              // defaultValue={defaultValue}
              selected={value}
              style={{fontFamily: 'iranSans'}}
              className="form-control"
              name={name}
              onChange={onChange}
              value={value}
              placeholder={title}
              disabled={disabled}
            >
               <option style={{fontFamily: 'iranSans'}}>انتخاب</option>
              {options.map((item) => (
                
                <option key={item.id} value={item.id}   style={{fontFamily: 'iranSans'}}>{item.title}</option>
              ))}
            </select>
          )}
        />
         {errors ? (
                        <label className="text-danger text-xs">{errors.message}</label>
                      ) : null}
     
    </div>
  )
}
