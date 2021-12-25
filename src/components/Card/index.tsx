import { FC } from 'react';

import { CardProps } from './type';
import { CardContainer, CardH4 } from './style';

const Card: FC<CardProps> = ({ title = '' }) => {
    return (
        <CardContainer>
            <CardH4>{title}</CardH4>
        </CardContainer>
    );
};

export default Card;
