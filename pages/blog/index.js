import React from "react";
import Link from "next/dist/client/link";

export default function index(props) {
    console.log(props);
    return (
        <div>
            <h1 className="text-center font-bold text-3xl mt-10">
                {" "}
                Liste des articles du blog :
            </h1>

            <div className="text-center">
                {props.articles.map((art) => (
                    <div
                        key={art.id}
                        className="inline-flex flex-wrap  m-8 p-10 border w-96 h-64 rounded-md border-black"
                    >
                        <h2 className="font-bold">{art.title}</h2>
                        {/* <p>{art.body}</p> */}
                        <p>{`${art.body.slice(0, 60)} ...`}</p>
                        <Link href={`/blog/${art.id.toString()}`}>
                            <a className="text-blue-400 pt-2 m-auto">
                                {" "}
                                Lire l'article
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const articles = await data.json();

    if (!articles) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            articles,
        },
    };
}

// https://jsonplaceholder.typicode.com/posts
