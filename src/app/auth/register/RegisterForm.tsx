"use client";
import React from "react";
import { InputField } from "../../components/InputField";
import { AuthForm } from "@/app/components/AuthForm";

export default function RegisterForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        alert("Submitted from register");
        e.preventDefault();
    }
    
    return (
        <AuthForm formType="register" onSubmit={handleSubmit} />
    );
}