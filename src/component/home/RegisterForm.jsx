import { Card, Col, Form, Row } from "reactstrap";
import React, { useState } from "react";
import Controls from "../controls/Control";
import { GENDER } from "./constant/Gender";
import styles from "./style/Register.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BlOOD_GROUP } from "./constant/BloodGroup";
import { checkNationalCode } from "./util/checkNationalCode";
import { checkMobile } from "./util/checkMobile";

export default function RegisterForm({ handleClose }) {
  const [alert, setAlert] = useState(false);
  const [checkAlert, setCheckAlert] = useState(false);
  const [labelAlert, setLabelAlert] = useState("");
  const [severity, setSeverity] = useState("success");

  const schema = yup
    .object({
      gender: yup.string().required("لطفا جنسیت را انتخاب کنید"),
      lastName: yup.string().required("لطفا نام خانوادگی را وارد کنید"),
      firstName: yup.string().required("لطفا نام را وارد کنید"),
      nationalCode: yup
        .string()
        .required("کد ملی را وارد نمایید")
        .test("nationlaCode", "کد ملی اشتباه است", (value) =>
          checkNationalCode(value)
        ),
      mobile: yup
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

    setSeverity("success");
    setAlert(true);
    setLabelAlert("عملیات با موفقیت انجام شد");
    setCheckAlert((prev) => !prev);
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  const inputListGeneratorArray = [
    { title: "نام", name: "firstName" },
    {
      title: "نام خانوادگی",
      name: "lastName",
    },
    {
      title: "کدملی",
      name: "nationalCode",
      type: "number",
    },
    {
      title: "شماره موبایل",
      name: "mobile",
      type: "number",
    },
    { title: "تابعیت", name: "nationality" },
    {
      title: "قد",
      name: "height",
    },
    {
      title: "موقعیت جغرافیایی عرض",
      name: "latitude",
    },
    {
      title: "موقعیت جغرافیایی طول",
      name: "longitude",
    },
  ];

  const selectListGeneratorArray = [
    { title: "جنسیت", options: GENDER, name: "gender" },
    { title: "گروه خونی", options: BlOOD_GROUP, name: "bloodGroup" },
  ];

  console.log("errors", errors);

  return (
    <>
      <Form onSubmit={handleSubmit(formHandleSubmit)}>
        <Card>
          <Row>
            <Col lg={12} className={"pt-3"}>
              {inputListGeneratorArray.map((itm, idx) => {
                return (
                  <>
                    <Row item xs={6}>
                      <Controls.Input
                        control={control}
                        label={itm.title}
                        name={itm.name}
                        errors={errors[itm.name]}
                      />
                    </Row>
                  </>
                );
              })}

              {selectListGeneratorArray.map((itm, idx) => {
                return (
                  <>
                    <Row item xs={6}>
                      <Controls.Select
                        options={itm.options}
                        name={itm.name}
                        label={itm.title}
                        control={control}
                        errors={errors[itm.name]}
                      />
                    </Row>
                  </>
                );
              })}
              <Row>
                <Col className={"mt-4 d-flex justify-content-end"}>
                  <Button type="submit" color="primary">
                    ذخیره
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Form>

      
    </>
  );
}
