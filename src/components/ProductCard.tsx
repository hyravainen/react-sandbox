import type { Product } from "../types";

interface ProductCardProps{
    product: Product;
}

export default function ProductCard({product}: ProductCardProps){
    return(
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all size-90">
            <img
             src={product.image}
             alt={product.name}
            className="h-48 w-full object-cover"/>
            
            <div className="p-4 flex flex-col gap-2 items-center">
                <span>Product name</span>
                <span>Price</span>
                <span>Description</span>
            <button className="px-3 py-1 text-xs font-bold text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors shadow-sm active:scale-95">
  Add to Cart
</button>
            
                
            </div>
        </div>
    )
}