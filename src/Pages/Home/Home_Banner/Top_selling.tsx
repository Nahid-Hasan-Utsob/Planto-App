import React from 'react'
import Main_Product_Card from '../../../components/Main_Product_Card'
import img from "../../../assets/product.png";
export default function Top_selling() {



const products = [
  {
    id: 1,
    title: "Calathea Plant",
    rating: 4.5,
    price: 359,
    description: "A tropical indoor plant with beautiful patterned leaves, perfect for low light.",
    image: img
  },
  {
    id: 2,
    title: "Monstera Deliciosa",
    rating: 4.8,
    price: 499,
    description: "Known as the Swiss Cheese Plant, this adds a lush jungle vibe to your room.",
    image: "https://images.unsplash.com/photo-1620912189860-1e54df3b2c13"
  },
  {
    id: 3,
    title: "Snake Plant",
    rating: 4.6,
    price: 279,
    description: "Low-maintenance and air-purifying — ideal for bedrooms and offices.",
    image: "https://images.unsplash.com/photo-1608221927037-3bdb28b9d9a4"
  },
  {
    id: 4,
    title: "Aloe Vera",
    rating: 4.4,
    price: 249,
    description: "A healing succulent that thrives on neglect and sunlight.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },
  {
    id: 5,
    title: "Peace Lily",
    rating: 4.7,
    price: 399,
    description: "Elegant white flowers that bloom throughout the year with little care.",
    image: "https://images.unsplash.com/photo-1622202228973-8f4c961f9a9c"
  },
  {
    id: 6,
    title: "Fiddle Leaf Fig",
    rating: 4.3,
    price: 699,
    description: "A bold, sculptural plant that brings instant tropical energy.",
    image: "https://images.unsplash.com/photo-1600508770371-21726e6b0e7f"
  },
  {
    id: 7,
    title: "Pothos (Money Plant)",
    rating: 4.9,
    price: 199,
    description: "Fast-growing and easy to propagate — symbol of prosperity and luck.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b1b9b49"
  },
  {
    id: 8,
    title: "Spider Plant",
    rating: 4.5,
    price: 229,
    description: "Cute hanging plant with striped leaves, great for beginners.",
    image: "https://images.unsplash.com/photo-1618519761973-d84d9b3b5cfa"
  },
  {
    id: 9,
    title: "ZZ Plant",
    rating: 4.6,
    price: 449,
    description: "Hardy and stylish plant that thrives in low light and dry conditions.",
    image: "https://images.unsplash.com/photo-1595433707802-6b2626ef91db"
  },
  {
    id: 10,
    title: "Areca Palm",
    rating: 4.8,
    price: 599,
    description: "A tall, graceful palm perfect for bright corners and air purification.",
    image: "https://images.unsplash.com/photo-1589241057393-008460d7a636"
  }
];







  return (
    <div className='grid grid-cols-3 gap-5'>
               {
                  products.slice(0,6).map((products, idx) => <Main_Product_Card key={idx} products={products}></Main_Product_Card>)
               }
    </div>
  )
}
