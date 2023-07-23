import styled from 'styled-components';

type Props = {
  src: string;
  alt: string;
}

const ProductCard = ({src, alt}:Props) => {
  return(
    <Card>
      <Image src={src} alt={alt}/>
      <CardDetails>
          <h3>$5,000/mo</h3>
          <h5>3883 Mississauga, ON, Canada</h5>
          <p>4 Bed | 2 bath | Fully Furnished</p>
      </CardDetails>
    </Card>
  )
}

const useCard = (src:string, alt:string) => {
      return (
         <ProductCard src={src} alt={alt}/>
      ) 
};

const Card = styled.div`
  display: inline-flex;
  padding: 1rem;
  background: papayawhip;
  height: 132px;
  width: 300px;
  box-shadow: -3px 4px 16px -1px rgba(0,0,0,0.75);
  -webkit-box-shadow: -3px 4px 16px -1px rgba(0,0,0,0.75);
  -moz-box-shadow: -3px 4px 16px -1px rgba(0,0,0,0.75);
  border-radius: 10px;
`;

const Image = styled.img`
  height: 132px;
  width: 132px;
  margin-right: 16px;
  border-radius: 10px;
`;

const CardDetails = styled.div`
  display:flex;
  flex-direction:column;
  p {
    font-size: 11px;
  }
`

export default useCard;