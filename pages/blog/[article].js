
import React from 'react'

export default function article(props) {
	console.log(props);
	return (
		<div key={props.id} className="
		border border-solid border-gray-900 rounded-lg mx-96 mt-20 p-20">

			<h1 className='text-center mt-10  font-bold text-xl'>{props.article.title}</h1>
			
			<p className='text-center mt-20'>{props.article.body}</p>
		</div>
	)
}

export async function getStaticPaths() {

	const data = await fetch('https://jsonplaceholder.typicode.com/posts')
	const articles = await data.json()

	const paths = articles.map(item => ({
		params : {article : item.id.toString()}
	}))

	return {
		paths,
		fallback : false
	}

}

export  async function getStaticProps(context){

	const id = context.params.article

	const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

	const article = await data.json()

	if (!article) {
		return {
			notFound : true
		}
	}

	return {
		props : {
			article
		}
	}
}

// https://jsonplaceholder.typicode.com/posts

       