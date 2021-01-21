import {ArrowRight as ArrowRightOutlined} from '@styled-icons/material-outlined';
import styled from 'styled-components';

interface Props {
   disabled?: boolean;
}
export const ArrowRight = styled(ArrowRightOutlined).attrs((props: Props) => ({
   className: props.disabled && 'disabled',
}))`
   height: 35px;
   fill: #000;
   &.disabled {
      fill: rgba(0, 0, 0, 0.26);
      opacity: 1;
   }
`;
