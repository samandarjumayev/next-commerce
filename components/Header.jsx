import { Heart, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Header(){
    return <div className="w-full flex items-center justify-between flex-col border-b border-zinc-300">

        <div className="bg-black w-full h-[50px]">
            <div className="container h-full mx-auto text-[14px] text-white flex items-center justify-center gap-3">
                <div className="flex-1 flex items-center justify-center gap-3">
                    <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%</p>
                    <Link href={``} className="font-semibold underline">Shop now</Link>
                </div>
                <select className="outline-none">
                    <option value={'en'} className="text-black">English</option>
                    <option value={'uz'} className="text-black">Uzbek</option>
                    <option value={'ru'} className="text-black">Russian</option>
                </select>
            </div>
        </div>

        <div className="container mx-auto flex items-center justify-between h-[70px]">
            <div>
                <p className="text-2xl font-semibold">Exclusive</p>
            </div>

            <div className="h-full flex items-center gap-3">
                <Link href={`/`}>Home</Link>
                <Link href={`/contact`}>Contact</Link>
                <Link href={`/about`}>About</Link>
                <Link href={`/signup`}>Sign Up</Link>
            </div>

            {/*  */}

            <div className="h-full flex items-center gap-4">
                <div className="bg-[#F5F5F5] rounded py-1.5 shadow px-3 flex items-center gap-3">
                    <input type="text" name="" id="" placeholder="What are you looking for?" className="outline-none text-[13px] flex-1" />
                    <button className="cursor-pointer"><Search size={16} /></button>
                </div>
                <Link href={'/likes'}><Heart size={21} /></Link>
                <Link href={`/cart`}><ShoppingCart size={21} /></Link>
            </div>
        </div>
    </div>
}