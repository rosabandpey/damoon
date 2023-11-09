import React, { useState } from "react";
import user from "../../../assets/img/user.png";
import Image from "next/image";
import styles from "./style/Login.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Card, Col, Form, Label, Row } from "reactstrap";
import Input from "../controls/Input";

export default function Login() {
  const [alert, setAlert] = useState(false);
  const [checkAlert, setCheckAlert] = useState(false);
  const [labelAlert, setLabelAlert] = useState("");
  const [severity, setSeverity] = useState("success");

  const schema = yup
    .object({
     
      username: yup.string().required("لطفا نام کاربری را وارد کنید"),
    })
    .required();

  const {
    handleSubmit,
    watch,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formHandleSubmit = (data) => {
    console.log(data);

    // setSeverity("success");
    // setAlert(true);
    // setLabelAlert("ورود با موفقیت انجام شد");
    // setCheckAlert((prev) => !prev);
    reset("");
  };

  const inputListGeneratorArray = [
    { title: "موبایل", name: "username" },
    
  ];

  return (
    <>
      <div className={styles.container}>
        <Image src={user} alt="user" className={styles.cardImg} />

    

        {inputListGeneratorArray.map((itm, idx) => {
          return (
            <>
              <Input
                control={control}
                title={itm.title}
                name={itm.name}
                errors={errors[itm.name]}
              />
            </>
          );
        })}

        <div className={"mt-4 d-flex justify-content-start"}>
          <Button
            type="submit"
            color="primary"
            onClick={handleSubmit(formHandleSubmit)}
          >
            ورود
          </Button>
        </div>

        <a className={styles.aButton} href="#">
          فراموشی رمز عبور
        </a>
      </div>
    </>
  );
}
