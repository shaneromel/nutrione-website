import BlogDetailsMain from '../../components/blogdetails';
import SEO from '../../components/seo';

const index = () => {
  return (
    <>
    <SEO pageTitle={'Blog Details'} />
      <BlogDetailsMain />
    </>
  );
};

export default index;