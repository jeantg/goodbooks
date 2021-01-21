import styled from 'styled-components';

const SkeletonEffect = styled.div`
   background: #f6f7f8;
   background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #dadada 20%,
      #dadada 60%,
      #f6f7f8 100%
   );
   background-size: 400% 400%;
   animation: shimmer 1.9s linear infinite;
   @keyframes shimmer {
      0% {
         background-position: 0% 0%;
      }
      100% {
         background-position: -135% 0%;
      }
   }
`;
export default SkeletonEffect;
