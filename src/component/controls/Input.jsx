import React from "react";
import { Controller } from "react-hook-form";

export default function Input({
  name,
  errors,
  control,
  defaultValue,
  title,
  type,
  className,
  disabled,
  labalClassName,
  placeholder,
}) {
  return (
    <div>
      <label className={labalClassName || "form-label"}>{title}</label>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue || ""}
        render={({ field }) => (
          <input
            className={className}
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
