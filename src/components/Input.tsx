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
    isRequired?: Boolean,
    title: Path<iFormValue>,
    minLength?: number,
    errors?: { type: string },
    details: { type: string, label: string },
    pattern?: any
}




const Input = ({ details, register, isRequired, title, minLength, errors, pattern }: propTypes) => {


    const obj = {
        ...(isRequired && { required: `${details.label} is Required` }),
        ...(minLength && { minLength: minLength }),
        ...(pattern && { pattern })
    }

    return (
        <div className='input'>
            <div className='input-box'>
                <label>
                    {details.label}
                    {isRequired && <span>*</span>}
                </label>
                <div className='field-error'>
                    <input type={details.type} {...register(title, obj)} />
                    {errors?.type == 'required' && <p>{details.label} is required</p>}
                    {errors?.type == 'minLength' && <p> Minimum length should {minLength}</p>}
                    {errors?.type == 'validate' && <p> Enter Correct {details.label}</p>}
                    {errors?.type == 'pattern' && <p> Enter Correct {details.label}</p>}
                </div>

            </div>
        </div>)
}

export default Input;