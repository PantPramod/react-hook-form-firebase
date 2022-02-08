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

const Input = ({ details, register, isRequired, title, minLength, errors }: propTypes) => {


    const obj = {
        ...(isRequired && { required: `${details.label} is Required` }),
        ...(minLength && { minLength: minLength }),
        ...(details.type === "email" && { validate: handleEmailValidate })

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
                </div>

            </div>
        </div>)
}

export default Input;