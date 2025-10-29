
import Main_Product_Card from '../../../components/Main_Product_Card'
import { useProducts } from "../../../hooks/useProducts";









export default function Top_selling() {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load products.</p>;




const product = products || [];


  return (
    <div className='grid lg:grid-cols-3 grid-cols-2 md:grid-cols-3 gap-4 lg:gap-y-15 gap-y-9 lg:justify-center items-center '>
               {
                  product.slice(0,6).map((products, idx) => <Main_Product_Card key={idx} products={products}></Main_Product_Card>)
               }
    </div>
  )
}
