import React from 'react';
import Select from './Select';
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
    title: Path<iFormValue>,
    list: string[]
}


const index = ({ label, title, register, list }: propTypes) => {
    return <Select
        register={register}
        label={label}
        title={title}
        list={list}
    />;
};

export default index;
