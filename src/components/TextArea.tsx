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
    isRequired: Boolean,
    title: Path<iFormValue>,
    minLength?: number,
    errors?: { type: string }

}

const TextArea = ({ register, label, isRequired, title, minLength, errors }: propTypes) => {
    return <div className='input'>
        <div className='input-box'>
            <label>{label}</label>
            <div className='field-error'>
                <textarea id='textarea' placeholder={label}  {...register("info", { minLength: 30 })} ></textarea>
                {errors?.type == 'minLength' && <p> Minimum length should {minLength}</p>}
            </div>
        </div>
    </div>;
};

export default TextArea;
