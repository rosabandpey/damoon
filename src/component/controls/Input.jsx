import React from "react";
import { Controller } from "react-hook-form";

export default function Input({
  name,
  value,
  errors,
  control,
  defaultValue,
  title,
  type,
  className,
  disabled,
  labalClassName,
  placeholder,
  rows,
}) {
  return (
    <div>
      <label className={labalClassName || "form-label"}>{title}</label>
      <Controller
        name={name}
        value={value}
        control={control}
        defaultValue={defaultValue === 0 ? 0 : defaultValue || ""}
        render={({ field }) => (
          <input
            rows={rows}
            className= "form-control"
            disabled={disabled}
            {...field}
            label={title}
            type={type}
            placeholder={placeholder}
          />
        )}
      />
      {errors ? (
        <label className="text-danger text-xs">{errors.message}</label>
      ) : null}
    </div>
  );
}
