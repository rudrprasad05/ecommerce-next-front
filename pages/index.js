import Featured from "@/components/Featured";
import Nav from "@/components/Nav";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";


export default function Home({featurdProduct, recentProducts}) {

  return (

    <>

      <Nav />
      <Featured product={featurdProduct}/>
      <NewProducts product={recentProducts} />
      
    </>

  )
}

export async function getServerSideProps(){
  await mongooseConnect()

  const featuredProductId = "64e9fb185a99a94915cf1edc" 
  const featurdProduct = await Product.findById(featuredProductId)
  const recentProducts = await Product.find({}, null, {sort: {"_id": -1}, limit: 10})

  return{
    props: {
      featurdProduct: JSON.parse(JSON.stringify(featurdProduct)),
      recentProducts: JSON.parse(JSON.stringify(recentProducts))
    },
  }
}
