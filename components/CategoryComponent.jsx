import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function CategoryComponent(){
    let products = { products: [] };
    let products2 = [];

    try {
    const res = await fetch('https://dummyjson.com/products', { cache: 'no-store' });
    products = await res.json();
    } catch (err) {
    console.error('DummyJSON fetch error:', err);
    }

    try {
    const pos = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' });
    products2 = await pos.json();
    } catch (err) {
    console.error('FakeStore fetch error:', err);
    }

    const categories = [
        ...new Set(products?.products?.map(item => item.category)), 
        ...new Set(products2?.map(item => item.category))
    ]
    
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
            <div className="bg-black w-full h-[344px] flex items-center gap-3 px-15 relative">

                <div className="flex-1 text-white">
                    <h2 className="text-[16px] flex items-center mb-3 gap-3">
                        <Image src={'/iphoneLogo.png'} alt="iphone logo" width={40} height={49} />
                        iPhone 14 Series
                    </h2>
                    <h1 className="text-[48px] leading-[60px] font-semibold">Up to 10% off Vaucher</h1>
                    <Link href={'/'} className="flex items-center gap-1 mt-5">
                        <p className="border-b font-medium">Shop Now</p> 
                        <ArrowRight size={24} />
                    </Link>
                </div>

                <div className="flex-1">
                    <Image src={'/home-phone.jpg'} width={496} height={344} alt="Home Phone image"  />
                </div>

                <div className="absolute bottom-3 w-full flex items-center justify-center gap-2">
                    <div className="w-[11px] h-[11px] rounded-full bg-zinc-400"></div>
                    <div className="w-[11px] h-[11px] rounded-full bg-zinc-400"></div>
                    <div className="w-[11px] h-[11px] rounded-full bg-orange-400 outline-2 outline-white"></div>
                    <div className="w-[11px] h-[11px] rounded-full bg-zinc-400"></div>
                    <div className="w-[11px] h-[11px] rounded-full bg-zinc-400"></div>
                </div>

            </div>
        </div>
    </div>
}