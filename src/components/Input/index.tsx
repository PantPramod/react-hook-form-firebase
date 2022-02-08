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
    isRequired: Boolean,
    title: Path<iFormValue>,
    minLength?: number,
    errors?: { type: string },
    details: { type: string, label: string }
}

const index = ({ details, register, isRequired, title, minLength, errors }: propTypes) => {
    return <Input
        details={details}
        register={register}
        isRequired={isRequired}
        title={title}
        minLength={minLength}
        errors={errors}
    />;
};

export default index;
