import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import HomeThreeMain from '../components/home-3';

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Three'} />
      <HomeThreeMain/>
    </Wrapper>
  );
};

export default Index;