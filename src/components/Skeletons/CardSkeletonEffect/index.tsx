import React from 'react';

import {Container} from './styles';
import SkeletonEffect from '../index';
const CardSkeletonEffect: React.FC = () => {
   return (
      <Container>
         <SkeletonEffect className="card" />
         <SkeletonEffect className="title" />
      </Container>
   );
};

export default CardSkeletonEffect;
