import React from "react";
import { Controller } from "react-hook-form";

export default function DataLists({
  name,
  control,
  errors,
  title,
  options,
  onChange,
  defaultValue,
  disabled,
  handleOnchange,
  ...others
}) {
  const id = new Date().getTime()
  return (
    <div {...others}>
      <label className="form-label">{title}</label>
      <Controller
        defaultValue={defaultValue || ""}
        control={control}
        name={name}
        render={({ field}) => (
          <div className="col-md-12">
            <input
              className="form-control"
              
              list={id}
              placeholder={title}
              //  onChange={handleOnchange}
              // name={name}
              {...field}
              // value={value}
              // name={name}
           
            />


            <datalist id={id}>
              <option>انتخاب</option>
              {options.map((item) => (
                <option key={item.id} value={item.title}/>
              ))}
            </datalist>
          </div>
        )}
      />
      {errors ? (
        <label className="text-danger text-xs">{errors.message}</label>
      ) : null}
    </div>
  );
}
