import Link from "next/link"
import React from "react"

export default function Error(){
  return <div className="container max-w-[1100px] mx-auto">
    <div className="mt-20">
      <Link href="/">Home</Link>
      <p>/</p>
      <p className="text-black text-[14px]">404 Error</p>
    </div>
  </div>
}