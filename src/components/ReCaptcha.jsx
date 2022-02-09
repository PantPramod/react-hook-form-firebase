import React, {useRef, useEffect} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

// const TEST_SITE_KEY = "6LdcpVUeAAAAAHbo-xCNnccQ_vRGxWbESr7r4zg_";

const TEST_SITE_KEY="6Leitl0eAAAAAIHt4ONecWJB5qWYbcpxbb1essxb"



const ReCaptcha = ({OnClick , reset }) => {
    
    const recaptchaRef = useRef();



  const onChange=(value)=>{
    OnClick(true);
  }

  useEffect(()=>{
    recaptchaRef.current.reset();
	  OnClick(false);
       },[reset])

    return <div className='input'>
                    <div className='input-box'>
                        <label></label>
                        <div className='recaptcha'>
                            <div className='center'>
                                <ReCAPTCHA 
                                sitekey={TEST_SITE_KEY} 
                                ref={recaptchaRef} 
                                onChange={onChange}
                                onErrored={()=>OnClick(false)}
                                onExpired={()=>OnClick(false)}
                                />         
                             </div>
                        </div>
                    </div>
                </div>;
};

export default ReCaptcha;
