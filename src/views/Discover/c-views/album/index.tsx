import React from 'react';
import { ReactNode, FC, memo } from 'react'

interface IProps {
    children?: ReactNode;
}
const album:FC<IProps> = (props) => {
    return (
        <div>
            album
        </div>
    );
};

export default memo(album);