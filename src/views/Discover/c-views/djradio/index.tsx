import React from 'react';
import { ReactNode, FC, memo } from 'react'

interface IProps {
    children?: ReactNode;
}
const djradio:FC<IProps> = (props) => {
    return (
        <div>
            djradio
        </div>
    );
};

export default memo(djradio);