import React from 'react';
import ReCaptcha from './ReCaptcha.jsx';
type propstypes = {
    OnClick: (isVarified: Boolean) => void
}
const index = ({ OnClick }: propstypes) => {
    return <ReCaptcha OnClick={(isVarified: Boolean) => OnClick(isVarified)} />;
};

export default index;
