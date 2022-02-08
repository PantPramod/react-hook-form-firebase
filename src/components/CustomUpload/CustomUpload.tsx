import React, { useState, useRef, useEffect } from 'react';

type propstype = {
    getValue: (resume: FileList | undefined) => void,
    reset: Boolean
}


const CustomUpload = ({ getValue, reset }: propstype) => {
    const [resume, setResume] = useState<FileList | undefined>(undefined);

    const resumeRef = useRef<HTMLInputElement>(null);

    const chooseFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setResume(e.target.files)
            getValue(e.target.files);
        }

    }
    useEffect(() => {
        setResume(undefined)
    }, [reset])

    return <div className='input'>
        <div className='input-box'>
            <label>Resume/CV <span>*</span> </label>
            <div className='fileinput'>
                <button className='custom-btn' type='button' onClick={() => resumeRef.current?.click()} ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paperclip" className="attach svg-inline--fa fa-paperclip" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M184.1 512C98.27 512 28 441.8 28 354.1c0-41.93 16.33-81.36 45.98-111l210.8-210.9C306.9 11.03 337.1 0 367.3 0C442.4 0 484 60.87 484 115.6c0 31.18-12.13 60.48-34.18 82.52l-193.6 193.7c-14.43 14.44-34.23 21.66-54.03 21.66c-60.72 0-76.37-54.18-76.37-75.69c0-19.57 7.448-39.13 22.34-54.03l142.4-142.4c5.479-5.481 12.66-8.222 19.83-8.222c14.98 0 28.05 12.07 28.05 28.06c0 7.18-2.74 14.36-8.219 19.84l-142.4 142.4c-3.953 3.954-5.93 9.152-5.93 14.35c0 11.71 9.559 20.29 20.29 20.29c5.197 0 10.39-1.981 14.36-5.943l193.6-193.7c11.44-11.45 17.74-26.67 17.74-42.84c0-28.36-21.55-60.03-60.56-60.03c-15.7 0-31.41 5.727-42.86 17.17L113.6 283.6c-19.05 19.06-29.54 44.39-29.54 71.34c0 47.27 35.91 99.93 100.9 99.93c26.13 0 52.28-9.52 71.34-28.57l159.5-159.6c5.479-5.481 12.66-8.221 19.83-8.221c14.98 0 28.05 12.07 28.05 28.06c0 7.18-2.74 14.36-8.219 19.84l-159.5 159.6C266.3 495.7 226.9 512 184.1 512z"></path></svg>ATTACH RESUME CV</button>
                <input type='file' accept="application/pdf" ref={resumeRef} onChange={chooseFile} />
                {(resume && resume[0].size < 5000000) && <span>{resume[0].name}</span>}
            </div>
        </div>
    </div>;
};

export default CustomUpload;