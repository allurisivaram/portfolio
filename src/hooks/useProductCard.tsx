import {forwardRef} from 'react'
import styled from 'styled-components';


type Props = {
  ref1: any;
}

const ProductCard = forwardRef<HTMLDivElement, Props>(({}, ref) => {
      return <Card ref={ref} />
      
});

const Card = styled.section`
  padding: 4em;
  background: papayawhip;
  height: 200px;
  width: 200px;
`;

export default ProductCard;