import React from 'react';
import { ReactNode, FC, memo } from 'react'

interface IProps {
    children?: ReactNode;
}
const songs:FC<IProps> = (props) => {
    return (
        <div>
            songs
        </div>
    );
};

export default memo(songs);