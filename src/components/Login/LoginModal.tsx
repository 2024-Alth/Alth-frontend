import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { UUid, User } from "../../atom/atom";
import { useNavigate } from "react-router-dom";

function LoginModal() {
  const setUserData = useSetRecoilState<User>(UUid);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isNullForm, setIsNullForm] = useState({
    email: false,
    password: false,
  });
  const [emailVal, setEmailVal] = useState<boolean | undefined>(true);

  const CheckEmail = (email: any) => {
    const emailRegEx =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    console.log(emailRegEx.test(email));
    return emailRegEx.test(email);
  };

  const ValidationEmail = (email: any) => {
    if (email === "") {
      setIsNullForm({ ...isNullForm, email: true });
      setEmailVal(true);
    } else {
      setIsNullForm({ ...isNullForm, email: false });
      setEmailVal(CheckEmail(email));
    }
  };

  const ValidationPassword = (password: any) => {
    if (password === "") {
      setIsNullForm({ ...isNullForm, password: true });
    } else {
      setIsNullForm({ ...isNullForm, password: false });
    }
  };

  const postLogin = async () => {
    console.log({
      email: form.email,
      password: form.password,
    });
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8080/login",
        data: {
          email: form.email,
          password: form.password,
        },
      });
      console.log(response.data);
      setUserData(response.data);
      alert("로그인 되었습니다!");
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Layout>
      <Text>로그인</Text>
      <IdDiv>
        <LoginInput
          type="email"
          value={form.email}
          placeholder="이메일"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          onBlur={(e) => ValidationEmail(e.target.value)}
        />
      </IdDiv>
      {isNullForm.email ? <div>* 이메일 : 필수정보입니다!</div> : <div></div>}
      {emailVal ? <div></div> : <div>* 이메일 : 이메일형식이 아닙니다!</div>}
      <IdDiv>
        <LoginInput
          type="password"
          value={form.password}
          placeholder="비밀번호"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          onBlur={(e) => ValidationPassword(e.target.value)}
        />
      </IdDiv>
      <Button onClick={postLogin}>로그인</Button>
    </Layout>
  );
}

export default LoginModal;

const Layout = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 24px;
`;
const Text = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const IdDiv = styled.div`
  font-size: 20px;
  margin-left: 24px;
  margin-right: 24px;
  width: 100%;
  margin: 4px;
  border-radius: 8px;
  border: 1px solid black;
  display: flex;
  padding: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  color: white;
  border-radius: 30px;
  background-color: #60d394;
  margin-bottom: 16px;
`;

const LoginInput = styled.input`
  width: 90%;
  border: none;
  font-size: 20px;
  :focus {
    border: none;
  }
`;
