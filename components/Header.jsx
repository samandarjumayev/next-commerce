import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return <div className="w-full flex items-center justify-between flex-col border-b border-zinc-300">
        <div className="bg-black w-full h-[50px] text-[14px] text-white flex items-center justify-center gap-3">
            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%</p>
            <Link href={``} className="font-semibold underline">Shop now</Link>
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
                {/* nima */}
            </div>

            <div className="h-full flex items-center gap-2">
                <div className="bg-[#F5F5F5] rounded py-1 px-2 flex items-center gap-2">
                    <input type="text" name="" id="" placeholder="What are you looking for?" className="outline-none text-[15px]" />
                    <Link href={``}><Search size={16} /></Link>
                </div>
                <Link href={``}><ShoppingCart /></Link>
            </div>
        </div>
    </div>
}