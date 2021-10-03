import React from "react";
import Link from "next/dist/client/link";

export default function contact(props) {
	console.log(props);
    return (
        <div className=" text-center mt-20">           
				
					<h1 className="mb-5 text-xl font-bold">{props.liste.name}</h1>
					<h3 className="mb-4">{props.liste.username}</h3>
					<h2 className='mb-4'>{props.liste.email}</h2>
					

					<Link href="/contact">
						<a className='text-blue-400'>Retour aux contacts</a>
					</Link>
        </div>
    );
	 
	}

		export async function getStaticPaths(){

			const data = await fetch('https://jsonplaceholder.typicode.com/users')
			const users = await data.json()

			const paths = users.map(item => ({
				params : {contact : item.id.toString()}
			}))

			return {
				paths,
				fallback : false
			}
		}


	 export async function getStaticProps(context){


		const id = context.params.contact
		const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
		const liste = await data.json()
	

		if (!liste) {
			return {
				notFound : true
			}
		}

		return {
			props : {
				liste
			}
		}
	}

