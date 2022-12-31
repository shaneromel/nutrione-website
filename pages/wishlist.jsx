import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import WishlistMain from '../components/wishlist';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Wishlist'} />
      <WishlistMain/>
    </Wrapper>
  );
};

export default index;