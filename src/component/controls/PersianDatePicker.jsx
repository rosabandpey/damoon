import DatePicker from "react-multi-date-picker";
import React from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import InputIcon from "react-multi-date-picker/components/input_icon";
import transition from "react-element-popper/animations/transition";
import { Controller } from "react-hook-form";
import { digitsFaToEn } from "persian-tools2";
import Input from "./Input";

export default function PersianDatePicker({
  currentDate,
  name,
  control,
  title,
}) {
  return (
    <>
      <div className="d-flex flex-column">
        <label className="form-label">{title}</label>

        <Controller
          control={control}
          name={name}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              style={{
                height: "5%",
                display: "block",
                width: "100%",
                padding: "0.47rem 0.75rem",
                fontSize: "0.8125rem",
                fontWeight: 400,
                lineHeight: 1.5,
                backgroundClip: "padding-box",
                appearance: "none",
              }}
              value={value}
              onChange={(val) =>
                onChange(digitsFaToEn(val.format?.("YYYY/MM/DD")))
              }
              currentDate={currentDate}
              // render={<InputIcon />}
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-right"
              animations={[transition({ duration: 800, from: 35 })]}
              title={title}
            />
          )}
        />
        {/* </div> */}
      </div>
    </>
  );
}

function InputMask() {
  return <input locale={persian_fa} className="form-control" />;
}
