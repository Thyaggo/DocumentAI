import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Input,} from "@nextui-org/react";

export default function Signup() {
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
                />
                <Input
                    type="text"
                    label="Lastname"
                    labelPlacement= 'outside'
                    placeholder="Enter your username"
                    autoComplete="off"
                />
                <Input
                    type="email"
                    label="Email"
                    labelPlacement= 'outside'
                    placeholder="Enter your email"
                    className="col-span-2"
                    autoComplete="off"
                />
                <Input
                    type="password"
                    label="Password"
                    labelPlacement= 'outside'
                    placeholder="Enter your password"
                    className="col-span-2"
                    autoComplete="off"
                />
            </CardBody>
            <Divider/>
            <CardFooter>
                <p>Already have an account?</p>
            </CardFooter>
        </Card>
    </main>
  );
}
