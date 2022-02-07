import React from 'react';
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";

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
const Select = ({ label, title, register, list }: propTypes) => {
    return <div className='input'>
        <div className='input-box'>
            <label>{label}</label>
            <div className='field-error'>
                <select {...register(title)}>
                    {list.map((item, id) => <option value={item} key={id}>{item}</option>)}
                </select>
            </div>
        </div>
    </div>;
};

export default Select;
