import CustomUpload from './CustomUpload';

type propstype = {
    getValue: (resume: FileList | undefined) => void,
    reset: Boolean
}

const index = ({ getValue, reset }: propstype) => {
    return <CustomUpload getValue={getValue} reset={reset} />;
};

export default index;
