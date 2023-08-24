import axios from "axios";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { addUser } from "../store/slice/UserSlice";
import { useDispatch } from "react-redux";
import "./login.css"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { Alert } from "@material-tailwind/react";
import LoginImg from "../assets/loginLeftImg.png";
import Meta from "../assets/META.png";
import { API_HOST } from "../http/http"

const Loginmt = () => {
  useEffect(() => {

  }, [])

  const uri = API_HOST;
  console.log(uri,"url")
  const dispatch = useDispatch();
  const [errorAlertVisible, setErrorAlertVisible] = useState(false);
  const [customErrorMessage, setCustomErrorMessage] = useState("");
  const [color, setColor] = useState("");
  const [formData, setFormData] = useState({
    emp_id: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setFormData((preValue) => ({ ...preValue, [name]: value }));
  };

  function AlertDefault(data) {
    return <Alert>{data}</Alert>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((preValue) => ({ ...preValue, [name]: value }));
    console.log("Form Submit", formData);
    console.log("uri :", `${uri}/users/login/`);

    try {
      const response = await axios.post(`${uri}/users/login/`, {
        emp_id: formData.emp_id,
        password: formData.password,
      });
      const { User_Id, token, user_role, message } = response.data;
      dispatch(addUser({ User_Id, token, user_role, message }));
      navigate("/");
      localStorage.setItem("User_Id", User_Id);
      localStorage.setItem("token", token);
      localStorage.setItem("user_role", user_role);
    } catch (error) {
      setColor("red")
      setCustomErrorMessage(error.response.data.error)
      setErrorAlertVisible(true)
      setTimeout(() => {
        setErrorAlertVisible(false);
      }, 3000);
      console.error("Error:", error);
      console.log(error.response.data.error)

      // Handle the error if needed
    }
  };

  return (
    <>
    <div >
    <div >
      <div className="">
        {errorAlertVisible && (
          <div className="flex  justify-center items-center">
            <Alert color={color}>{customErrorMessage}</Alert>
          </div>

        )}
      </div>
      <div className="grid grid-cols-2 gap-4 items-center justify-center h-screen ">
      <div className="grid grid-cols-1 bg-gredient items-center justify-center">
      <img src={ LoginImg } alt="" he />
        </div>
      <div className="grid grid-cols-1">



        <form className="flex justify-center" onSubmit={(e) => handleSubmit(e)}>
        <div className="w-full sm:w-auto max-w-md">
     
          <Card className="">

            <CardHeader
              className="mb-4 grid h-30 place-items-center scale-90 "
            >

              <img src={Meta} className="p-5"  style={{width:"100%"}} />
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input
                label="Employee ID"
                size="lg"
                id="emp_id"
                name="emp_id"
                type="text"
                autoComplete="emp_id"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                label="Password"
                size="lg"
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" fullWidth type="submit">
                Sign In
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Don&apos;t have an account?
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Typography>
            </CardFooter>
          </Card>
          </div>
        </form>

        </div>

      </div>
      </div>
      </div>
    </>
  );
};

export default Loginmt;
