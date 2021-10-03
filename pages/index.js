import "tailwindcss/tailwind.css";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="text-center my-40">
                <h1 className="text-5xl font-semibold">
                    Bienvenue sur Code.io
                </h1>
                <p className="my-6 text-xl">
                    Le blog communautaire des afficionados de développement web.
                </p>
            </div>

            <div className="flex justify-center m-10">
                <div className="m-20 p-4 border w-96 rounded-md border-black ">
                    <h2 className='my-2'>Lisez les articles</h2>
                    <h3  className='my-2'>Maximisez votre culture web</h3>
                    <p  className='my-2'>
                        Chaque auteur tente de vous apporter le plus de valeur
                        possible par article.
                    </p>

                    <Link href="/blog">
                        <a className=' text-blue-400'>Visitez le blog</a>
                    </Link>
                </div>

                <div  className="m-20 p-4 border w-96 rounded-md border-black ">
                    <h2  className='my-2'>Faites un tour vers la liste de membres.</h2>
                    <h3  className='my-2'>Faites-vous des amis.</h3>
                    <p  className='my-2'>
                        Ajoutez, invitez et dicustez avec les différents membres.
                    </p>

                    <Link href="/contact">
                        <a className="text-blue-400">Visitez la liste d'utilisateurs</a>
                    </Link>
                </div>
            </div>
        </>
    );
}
