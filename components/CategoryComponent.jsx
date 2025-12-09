import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default async function CategoryComponent(){
    const res = await fetch('https://dummyjson.com/products', {
        cache: 'no-store'
    });
    const pos = await fetch('https://fakestoreapi.com/products', {
        cache: 'no-store'
    })
    const products = await res.json();
    const products2 = await pos.json();

    const categories = [...new Set(products.products.map(item => item.category)), ...new Set(products2.map(item => item.category))]
    return <div className="w-full flex gap-5 mb-10">
        <div className="border-r border-zinc-300 py-3 pr-5 flex flex-col gap-2">
            {categories.map(item => {
                return <div key={item}>
                    <Link href={`/categories/${item}`} className="capitalize flex items-center gap-2 justify-between text-[14px]">
                        {item} 
                        <ChevronRight size={18} />
                    </Link>
                </div>
            })}
        </div>
        <div className="flex-1 h-full pt-7 pl-3 flex">
            <div className="bg-black w-full h-[344px]">

            </div>
        </div>
    </div>
}