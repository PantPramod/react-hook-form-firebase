import ReCaptcha from './ReCaptcha.jsx';

type propstypes = {
    OnClick: (isVarified: Boolean) => void,
    reset: boolean
}
const index = ({ OnClick, reset }: propstypes) => {
    return <ReCaptcha
        OnClick={(isVarified: Boolean) => OnClick(isVarified)}
        reset={reset}
    />;
};

export default index;
