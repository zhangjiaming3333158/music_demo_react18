import React from 'react';
import { ReactNode, FC, memo } from 'react'

interface IProps {
    children?: ReactNode;
}
const artist:FC<IProps> = (props) => {
    return (
        <div>
            artist
        </div>
    );
};

export default memo(artist);