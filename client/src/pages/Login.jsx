import React from 'react';
import {Card, CardHeader, CardBody, CardFooter, Divider, Input, Button, Link} from "@nextui-org/react";
import loginAxiosInstance from '../api/login';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { MyContext } from '../Context';

function LoginPage() {
  const navigate = useNavigate();
  const {setToken, setUser} = React.useContext(MyContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginAxiosInstance.post(import.meta.env.VITE_ROUTE_LOGIN_USER , {email: e.target.email.value, password: e.target.password.value})
      .then((res) => {
        setToken(res.data);
        setUser(jwt_decode(res.data.access));
        localStorage.setItem('token', JSON.stringify(res.data));
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className='dark bg-zinc-800 h-screen flex items-center justify-center'>
      <Card className='w-96 max-w-[500px] p-2'>
        <CardHeader className="flex gap-3 flex-col items-start ">
          <h1 className="font-bold text-3xl">Login</h1>
          <small className="opacity-50">Enter your credentials below to login</small>
        </CardHeader>
        <Divider />
        <CardBody>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <Input
              type="email"
              label="Email"
              labelPlacement= 'outside'
              placeholder="Enter your email"
              autoComplete="off"
              id="email"
            />
            <Input
              type="password"
              label="Password"
              labelPlacement= 'outside'
              placeholder="Enter your password"
              autoComplete="off"
              id="password"
            />
            <Button type="submit">Login</Button>
          </form>
        </CardBody>
        <Divider/>
        <CardFooter>
          <p>Don't have an account? <Link href="/signup" className='text-emerald-500'>Sign up</Link></p>
        </CardFooter>
      </Card>
    </main>
  );
}

export default LoginPage;
