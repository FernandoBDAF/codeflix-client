"use client";

import React, { FormEvent, useState } from "react";
import { AuthForm } from "@/app/components/AuthForm";
import { useRouter } from "next/navigation";

type ServerError = {
    message: string;
}

export default function LoginForm() {
    const [errors, setErrors] = useState<string[]>([]);
    const router = useRouter();

    console.log(errors)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        

        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ email, password }),
            });
            console.log(JSON.stringify({ email, password }))
            console.log(typeof response)
            console.log(response)

            if (response.ok) {
                router.push("/");
                return;
            }

            const payload: ServerError[] = await response.json();
            setErrors(payload.map((error) => error.message));
        } catch (error) {
            console.log("hi")
            console.log(error)
            console.log(errors)
            console.error(error);
            setErrors(["An unknown error occurred."]);
        }
    }

    return (<AuthForm formType="login" onSubmit={handleSubmit} />)
}