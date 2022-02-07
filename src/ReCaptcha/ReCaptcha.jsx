import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
// const TEST_SITE_KEY = "6LdcpVUeAAAAAHbo-xCNnccQ_vRGxWbESr7r4zg_";
const sitekey="6Leitl0eAAAAAIHt4ONecWJB5qWYbcpxbb1essxb"



const ReCaptcha = ({OnClick}) => {
  const onChange=(value)=>{
       console.log(value);
       OnClick(true);
  }
    return <>
                <div className='input'>
                    <div className='input-box'>
                        <label></label>
                        <div className='recaptcha'>
                            <div className='center'>
                                <ReCAPTCHA sitekey={sitekey} onChange={onChange}/>
                             </div>
                        </div>
                    </div>
                </div>

   
    </>;
};

export default ReCaptcha;
