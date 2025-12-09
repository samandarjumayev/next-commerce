'use client'
import { useParams } from "next/navigation"

export default function CategoryDetails(){
    const {category} = useParams()

    return <div>
        <p>{category}</p>
    </div>
}