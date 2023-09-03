import Link from 'next/link'
import React from 'react'

export default function NavMenu() {
    return (
        <div style={{ display: "flex", gap: "100px", marginBottom: "20px" }}>
            <ul style={{ display: "flex", gap: "20px" }}>
                <li>
                    <Link href="/" >Ana Sayfa</Link>
                </li>
                <li>
                    <Link href="/hakkimizda" >Hakkımızda</Link>
                </li>
                <li>
                    <Link href="/bloglar" >Bloglar</Link>
                </li>
            </ul>
        </div>
    )
}
