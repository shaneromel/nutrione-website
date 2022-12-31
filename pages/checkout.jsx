import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import CheckoutMain from '../components/checkout';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Checkout'} />
      <CheckoutMain/>
    </Wrapper>
  );
};

export default index;