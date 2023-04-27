
import React, { useState } from "react";
import user from "../../../assets/img/user.png";
import Image from "next/image";
import styles from "./style/Login.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Card, Col, Form, Label, Row } from "reactstrap";
import Input from "../controls/Input";


export default function Login (){
  const [alert, setAlert] = useState(false);
  const [checkAlert, setCheckAlert] = useState(false);
  const [labelAlert, setLabelAlert] = useState("");
  const [severity, setSeverity] = useState("success");

  const schema = yup
    .object({
      password: yup.string().required("لطفا پسورد را وارد کنید"),
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
    { title: "نام کاربری", name: "username" },
    {
      title: "کلمه عبور",
      name: "password",
    },
  ];

  return(

    <>

    
    <div className={styles.container}>

    <Image
                    src={user}
                    alt='user'
                    className={styles.cardImg}
                />

                
        <Label id="modal-modal-title" variant="h6" component="h2"  sx={{
            mb: 1,
            fontFamily: "IRANSans",
            color: "#3F4756",
            fontSize:23
          }}>
     ورود 
    </Label>
   
     
      
          
            {inputListGeneratorArray.map((itm, idx) => {
                return (
                  <>
                  
                      <Input
                        control={control}
                        label={itm.title}
                        name={itm.name}
                        errors={errors[itm.name]}
                      />
                  
                  </>
                );
              })}

              <Row>
                <Col className={"mt-4 d-flex justify-content-end"}>
                  <Button type="submit" color="primary"  onClick={handleSubmit(formHandleSubmit)}>
                    ورود
                  </Button>
                </Col>
              </Row>

              <a  className={styles.aButton} href="#">
  فراموشی رمز عبور
      </a>
          
         
     
 </div>
  </>

  
  )

}