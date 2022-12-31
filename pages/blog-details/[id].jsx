import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BlogDetailsArea from '../../components/blogdetails/blog-details-area';
import SEO from '../../components/seo';
import blogItemsList from '../../data/blogs';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';

const BlogsDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const [blog, setBlog] = useState({});


  useEffect(() => {
    if (!id) (<h1>Loading...</h1>)

    else (setBlog(blogItemsList.find(item => item.id == id)))

    return () => {

    };
  }, [id]);

  return (
    <>
      <SEO pageTitle={'Blog Details'} />
      <HeaderOne />
      <main>
        <BlogDetailsArea item={blog} />
      </main>
      <FooterOne />
    </>
  );
};

export default BlogsDetails;