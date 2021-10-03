
import React from 'react'
import Link from 'next/dist/client/link'

export default function Navbar() {
	return (
		<div className='bg-blue-400 py-8 flex justify-center'>
			<Link href="/">
				<a className="mx-10 text-xl ">Accueil</a>				
			</Link>
			<Link href="/blog">
				<a className="mx-10 text-xl">Blog</a>				
			</Link>
			<Link href="/contact">
				<a className="mx-10 text-xl">Liste</a>				
			</Link>
		</div>
	)
}
