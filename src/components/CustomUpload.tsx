import { Path, UseFormRegister } from "react-hook-form";
import { useState } from 'react'

interface iFormValue {

    fullName: string,
    email: string,
    resume: any,
    company: string,
    phone: string,
    cC: string,
    link: string,
    info: string,
    gender: string,
}

type propTypes = {

    register: UseFormRegister<iFormValue>,
    isRequired?: Boolean,
    title: Path<iFormValue>,
    minLength?: number,
    errors?: { type: string },
    details: { type: string, label: string },
    pattern?: RegExp,
    file?: any
}




const CustomUpload = ({ details, register, isRequired, title, minLength, errors, pattern, file }: propTypes) => {


    const obj = {
        ...(isRequired && { required: `${details.label} is Required` }),
        ...(minLength && { minLength: minLength }),
        ...(pattern && { pattern }),
        ...({
            validate: {
                lessThan5Mb: (file: { size: number }[]) => file[0].size < 5e6,
                acceptedFormat: (file: { type: string }[]) =>
                    file[0].type === "application/pdf",

            }
        })
    }

    return (

        <div className='input'>
            <div className='input-box'>
                <label>{details.label} <span>*</span> </label>


                <div className="file-input field-error">
                    <div className="file-container ">
                        <span className="button-clip">
                            <svg width="16px" height="16px" viewBox="0 0 16 16">
                                <path d="M5 5V9C5 10.7 6.3 12 8 12C9.7 12 11 10.7 11 9V4.5C11 2 9 0 6.5 0C4 0 2 2 2 4.5V10C2 13.3 4.7 16 8 16C11.3 16 14 13.3 14 10V4H12V10C12 12.2 10.2 14 8 14C5.8 14 4 12.2 4 10V4.5C4 3.1 5.1 2 6.5 2C7.9 2 9 3.1 9 4.5V9C9 9.6 8.6 10 8 10C7.4 10 7 9.6 7 9V5H5Z" />
                            </svg>
                        </span>
                        <span className="text">Attach Resume/CV</span>
                        <input type={details.type}{...register(title, obj)} accept="application/pdf" />

                    </div>
                    <span className="success"> {file ? file[0]?.name : ""} </span>
                    {errors?.type == 'required' && <p>{details.label} is required</p>}
                    {errors?.type == 'lessThan5Mb' && <p>{details.label} is large than 5 MB</p>}
                    {errors?.type == 'acceptedFormat' && <p>{details.label} is of invalid format</p>}
                </div>
            </div>
        </div>
    )
}

export default CustomUpload;