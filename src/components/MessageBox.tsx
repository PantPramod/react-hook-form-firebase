import React from 'react';
import './MessageBox.css';

type closeProps = {
    OnClose: () => void
}

const MessageBox = (props: closeProps) => {
    return <div className='messagebox'>

        <h3>Successfully Added Record</h3>
        <button onClick={() => props.OnClose()}>Close</button>
    </div>;
}
export default MessageBox;

