import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
// const TEST_SITE_KEY = "6LdcpVUeAAAAAHbo-xCNnccQ_vRGxWbESr7r4zg_";
const sitekey="6LfaqlUeAAAAAGgUEVFTD3c0C1T6p4mdqBJDtpak"

function onChange(value) {
    console.log("Captcha value:", value);
}

const ReCaptcha = () => {
    return <>
   <div className='center'>
    <ReCAPTCHA
    sitekey={sitekey}
    onChange={onChange}
  />
  </div>
    </>;
};

export default ReCaptcha;
