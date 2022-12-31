import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import CartMain from '../components/cart';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Cart'} />
      <CartMain/>
    </Wrapper>
  );
};

export default index;