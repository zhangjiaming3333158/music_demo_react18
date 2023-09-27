import React from 'react';
import { ReactNode, FC, memo } from 'react'

interface IProps {
    children?: ReactNode;
}
const recommend:FC<IProps> = (props) => {
    return (
        <div>
            recommend
        </div>
    );
};

export default memo(recommend);