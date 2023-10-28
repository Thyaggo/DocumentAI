import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Input, Link, Button} from "@nextui-org/react";
import { registerUser, loginUser } from "../api/api";

export default function Signup() {
    const [register, setRegister] = React.useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: '',
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        registerUser(register)
            .then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            });
    }

    return (
        <main className="h-screen flex items-center justify-center dark bg-zinc-800">
            <Card className="max-w-[500px] p-2">
                <CardHeader className="flex gap-3 flex-col items-start ">
                    <h1 className="font-bold text-3xl">Create an Account</h1>
                    <small className="opacity-50">Enter your email below to create your account</small>
                </CardHeader>
                <Divider />
                <CardBody className="grid grid-cols-2 gap-4">
                    <Input
                        type="text"
                        label="Name"
                        labelPlacement= 'outside'
                        placeholder="Enter your name"
                        autoComplete="off"
                        onChange={(e) => setRegister({...register, first_name: e.target.value})}
                    />
                    <Input
                        type="text"
                        label="Lastname"
                        labelPlacement= 'outside'
                        placeholder="Enter your username"
                        autoComplete="off"
                        onChange={(e) => setRegister({...register, last_name: e.target.value})}
                    />
                    <Input
                        type="email"
                        label="Email"
                        labelPlacement= 'outside'
                        placeholder="Enter your email"
                        className="col-span-2"
                        autoComplete="off"
                        onChange={(e) => setRegister({...register, email: e.target.value})}
                    />
                    <Input
                        type="password"
                        label="Password"
                        labelPlacement= 'outside'
                        placeholder="Enter your password"
                        className="col-span-2"
                        autoComplete="off"
                        onChange={(e) => setRegister({...register, password: e.target.value})}
                    />
                    <Input
                        type="password"
                        label="Confirm Password"
                        labelPlacement= 'outside'
                        placeholder="Confirm your password"
                        className="col-span-2"
                        autoComplete="off"
                        onChange={(e) => setRegister({...register, re_password: e.target.value})}
                    />
                </CardBody>
                <Divider/>
                <CardFooter className="flex justify-between">
                    <Button type="submit" onClick={handleSubmit}>Sign up</Button>
                    <p>Already have an account? <Link href="/login" className='text-emerald-500'> Login</Link></p> 
                </CardFooter>
            </Card>
        </main>
    );
}
