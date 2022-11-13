import { client } from "../lib/client";
import HeroBanner from "../components/HeroBanner";
export default function Home({ products, bannerData }) {
  console.log(products, bannerData);
  return (
    <div>
      <HeroBanner heroBanner={bannerData?.length && bannerData[0]} />
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
