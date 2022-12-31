import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import HomeFiveMain from '../components/home-5';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Five'} />
      <HomeFiveMain />
    </Wrapper>
  );
};

export default index;