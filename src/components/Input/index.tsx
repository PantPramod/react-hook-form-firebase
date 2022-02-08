import React from 'react';
import Input from './Input';
import { Path, UseFormRegister } from "react-hook-form";

interface iFormValue {

    fullName: string,
    email: string,
    company: string,
    phone: string,
    cC: string,
    link: string,
    info: string,
    gender: string,
}

type propTypes = {

    register: UseFormRegister<iFormValue>,
    label: string,
    isRequired: Boolean,
    title: Path<iFormValue>,
    minLength?: number,
    type: string,
    errors?: { type: string }
}

const index = ({ register, label, isRequired, title, minLength, type, errors }: propTypes) => {
    return <Input
        type={type}
        register={register}
        label={label}
        isRequired={isRequired}
        title={title}
        minLength={minLength}
        errors={errors}
    />;
};

export default index;
