import { client } from "../lib/client";
import HeroBanner from "../components/HeroBanner";
import FooterBanner from "../components/FooterBanner";
import Product from "../components/Product";
export default function Home({ products, bannerData }) {
  console.log(products, bannerData);
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroBanner heroBanner={bannerData?.length && bannerData[0]} />
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-indigo-600 text-center text-2xl font-bold mt-12">
          Best selling Products
        </h2>
        <p>Speakers of many varaitions </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 items-center justify-center px-3">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
