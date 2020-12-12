import React, { useState } from "react";
import { setCookie } from "../../utils/cookie";
import { auth } from "../../services";
import { ImgHero } from "../../assets";

import styled from "styled-components";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLoginLoading, setLoginLoading] = useState(false);

  const onSubmitLogin = () => {
    setLoginLoading(true);
    auth
      .login(username, password)
      .then((res) => {
        console.log(res);
        const cookieToken = res.token;
        const cookieUser = {
          userId: res.userId,
          username: res.username,
        };
        setCookie("userData", JSON.stringify(cookieUser), 10000);
        setCookie("token", JSON.stringify(cookieToken), 10000);
        window.location.replace("/product");
      })
      .catch((err) => {
        alert(err.data.message);
      })
      .finally(() => {
        setLoginLoading(false);
      });
  };

  return (
    <Pages>
      <Form>
        <Title>
          Silahkan <br /> Login Disini
        </Title>
        <form
          className="login_form"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitLogin();
          }}
        >
          <label htmlFor="username">
            <Label>Username :</Label>
            <InputField
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </label>
          <label htmlFor="password">
            <Label>Password :</Label>
            <InputField
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <br />
          <SubmitButton
            type="submit"
            value="Submit"
            disabled={isLoginLoading}
          />
        </form>
      </Form>
      <div>
        <Image src={ImgHero} />
      </div>
    </Pages>
  );
};

export default Login;

const Pages = styled.div`
  padding: 10px 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: #045762;
`;

const Label = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #34626c;
`;

const InputField = styled.input`
  border: none;
  border-bottom: 2px solid #839b97;
  padding: 10px;
  font-size: 21px;
`;

const SubmitButton = styled.input`
  text-decoration: none;
  border: none;
  margin-top: 40px;
  background-color: #d35d6e;
  padding: 20px;
  width: 100%;
  font-size: 21px;
  border-radius: 10px;
  color: #fff;
  &:hover {
    background-color: #f05454;
  }
`;

const Image = styled.img`
  height: 500px;
`;
// Login

// form => post ke server => waiting for response (loading state) =>
// receive response from server => success -> success statement to user
//                              => error -> error statement to user  -> next ngapain user?

// if success - get token from be - save Token to cookie -> redirect ??

// Loading state treatment
// race condition -> unstable connection

// Action A -> Response A  ->  Action B ->  Response B -> success
