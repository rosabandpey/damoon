import { Button, Card, Col, Form, Row } from "reactstrap";
import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { checkNationalCode } from "./util/checkNationalCode";
import { checkMobile } from "./util/checkMobile";
import { GENDER } from "./constant/Gender";
import { BlOOD_GROUP } from "./constant/BloodGroup";
import Select from "../controls/Select";
import Input from "../controls/Input";
import { Nationality } from "./constant/Nationality";
import { register } from "@/services/api";
import { Marriage } from "./constant/Marriage";
import { Education } from "./constant/Education";




export default function RegisterForm(props) {

 

  const schema = yup
    .object({
      Gender: yup.string().required("لطفا جنسیت را انتخاب کنید"),
      Family: yup.string().required("لطفا نام خانوادگی را وارد کنید"),
      Name: yup.string().required("لطفا نام را وارد کنید"),
      BirthYear: yup.string().required("لطفا سال تولد را وارد کنید"),
      BirthMonth: yup.string().required("لطفا ماه تولد را وارد کنید"),
      BirthDay: yup.string().required("لطفا روز تولد را وارد کنید"),
      Nationality: yup.string().required("لطفا تابعیت را انتخاب کنید"),
      City: yup.string().required("لطفا شهر را وارد کنید"),
      EmergencyName: yup.string().required("لطفا نام فرد اظطراری را وارد کنید"),
      EmergencyPhone: yup.string().required("لطفا شماره تماس فرد اظطراری را وارد کنید"),
      Region: yup.string().required("لطفا منطقه راانتخاب کنید"),

      
      NationalCode: yup
        .string()
        .required("کد ملی را وارد نمایید")
        .test("nationlaCode", "کد ملی اشتباه است", (value) =>
          checkNationalCode(value)
        ),
      Telephone: yup
        .string()
        .required("موبایل را وارد نمایید")
        .matches(checkMobile, "فرمت موبایل اشتباه است"),
    })
    .required();

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formHandleSubmit = (data) => {
    console.log(data);
    const myData={id:41,...data}
    register(myData).then((res)=>{
      console.log('res',res)
    })

  };

  const inputListGeneratorArray = [
    { title: "نام", name: "Name" },
    {
      title: "نام خانوادگی",
      name: "Family",
    },
    {
      title: "کدملی",
      name: "NationalCode",
      type: "number",
    },
    {
      title: "شماره موبایل",
      name: "Telephone",
      type: "number",
    },

  

    {
      title: "سال تولد",
      name: "BirthYear",
    },
    {
      title: "ماه",
      name: "BirthMonth",
    },
    {
      title: "روز",
      name: "BirthDay",
    },
  
   
   
    {
      title: "شهر",
      name: "City",
    },

 

    {
      title: "نام",
      name: "EmergencyName",
    },

    {
      title: "شماره تلفن",
      name: "EmergencyPhone",
    },

    {
      title: "قد",
      name: "Height",
    },
    {
      title: "وزن",
      name: "Weight",
    },
    {
      title: "موقعیت جغرافیایی عرض",
      name: "Latitude",
    },
    {
      title: "موقعیت جغرافیایی طول",
      name: "Longitude",
    },
  ];

  const selectListGeneratorArray = [
    { title: "جنسیت", options: GENDER, name: "Gender" },
    { title: "گروه خونی", options: BlOOD_GROUP, name: "BloodType" },
    { title: "تابعیت", options: Nationality,name: "Nationality" },
    { title: "منطقه", options: Nationality,name: "Region" },
    { title: "وضعیت تاهل", options: Marriage,name: "marriage" },
    { title: "تحصیلات", options: Education,name: "education" },
  ];


  
  console.log("errors", errors);

  return (
    <>
      <Form onSubmit={handleSubmit(formHandleSubmit)}>
      
          <Row style={{background:'#fff'}} lg={12} className='d-flex flex-row justify-content-start' >
           
              {inputListGeneratorArray.map((itm, idx) => {
                return (
               
                    <Col lg={6}  className="py-2 pt-3">
                      <Input
                        control={control}
                        title={itm.title}
                        name={itm.name}
                        errors={errors[itm.name]}
                      />
                    </Col>
                
                );
              })}

              {selectListGeneratorArray.map((itm, idx) => {
                return (
               
                    <Col lg={6}  className="py-2 pt-3">
                      <Select
                        options={itm.options}
                        name={itm.name}
                        title={itm.title}
                        control={control}
                        errors={errors[itm.name]}
                      />
                    </Col>
                  
                );
              })}
           
          
          </Row>

          <Row  style={{background:'#fff'}} className='d-flex flex-row justify-content-end'>
                <Col >
                  <Button type="submit" color="primary">
                    ذخیره
                  </Button>
                </Col>
              </Row>
        
      </Form>

      
    </>
  );
}
