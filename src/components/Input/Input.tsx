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

function isValidEmail(mail: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    return (false)
}

const handleEmailValidate = (email: string) => {

    const isValid = isValidEmail(email);

    return isValid;
};

const Input = ({ register, label, isRequired, title, minLength, type, errors }: propTypes) => {


    const obj = {
        ...(isRequired && { required: `${label} is Required` }),
        ...(minLength && { minLength: minLength }),
        ...(type === "email" && { validate: handleEmailValidate })

    }
    return (
        <div className='input'>
            <div className='input-box'>
                <label>
                    {label}
                    {isRequired && <span>*</span>}
                </label>
                <div className='field-error'>
                    <input type={type} {...register(title, obj)} />
                    {errors?.type == 'required' && <p>{label} is required</p>}
                    {errors?.type == 'minLength' && <p> Minimum length should {minLength}</p>}
                    {errors?.type == 'validate' && <p> Enter Correct {label}</p>}
                </div>

            </div>
        </div>)
}

export default Input;