

import React from 'react'
import Link from 'next/dist/client/link';

export default function index(props) {
	console.log(props);
	return (
		<div>
			<h1 className="text-center font-bold text-3xl my-10">Liste des utilisateurs du blog</h1>

			<div className="flex flex-wrap  mx-40">
				{props.liste.map(el => (
					<div key={el.id} className='border rounded-md  p-5 m-12'>
					<Link href={`/contact/${el.id.toString()}`}>
					<a className='text-blue-400'>{el.name}</a>
					</Link>
						
						<h3>{el.username}</h3>
						<h3 className="mb-10">{el.email}</h3>
					</div>
				))}
			</div>

		</div>
	)
}


export async function getStaticProps(){

	const data = await fetch("https://jsonplaceholder.typicode.com/users")
	const liste = await data.json()

	return {
		props : {
			liste
		}
	}
}