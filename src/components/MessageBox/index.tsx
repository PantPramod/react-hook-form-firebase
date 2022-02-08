import React from 'react';
import MessageBox from './MessageBox';

type closeProps = {
    OnClose: () => void
}

const index = ({ OnClose }: closeProps) => {
    return <MessageBox OnClose={OnClose} />;
};

export default index;
