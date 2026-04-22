import Product from '../types';
import ProductCard from 'components/ProductCard'

export default function ProductList() {
    const products: Product[] = [
        {
            id: "1",
            name: "Classic Tech",
            description: "Beef patty & secret sauce"
            price: "12.50",
            image: "kuva1",
            category: "burgers",
        },
        {
            id: "2",
            name: "React Royal",
            description: "Double beef & bacon",
            price: "14.90",
            image: "kuva2",
            category: "burgers",
        },
        {
            id: "3",
            name: "Binary Fries",
            description: "Precision salted fries",
            price: "4.50",
            image: "kuva3",
            category: "sides",
        },
        {
            id: "4",
            name: "I/O Cola",
            description: "Cold refreshing soda",
            price: "3.50",
            image: "kuva4",
            category: "drinks",
        },
    ];
    
return (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {products.map((product) => (
       <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

}


