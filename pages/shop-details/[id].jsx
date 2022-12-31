import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SEO from '../../components/seo';
import ShopDetailsArea from '../../components/shop-details/shop-details-area';
import productList from '../../data/products';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';


const ShopsDetails = () => {
    const router = useRouter();
    const id = router.query.id;
    const [shop, setShop] = useState({});


    useEffect(() => {
        if (!id) (<h1>Loading...</h1>)

        else (setShop(productList.find(item => item.id == id)))

        return () => {

        };
    }, [id]);

    return (
        <>
            <SEO pageTitle={'Shop Details'} />
            <HeaderOne />
            <main>
                <ShopDetailsArea item={shop} />
            </main>
            <FooterOne />
        </>
    );
};

export default ShopsDetails;