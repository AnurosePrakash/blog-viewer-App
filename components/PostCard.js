import Link from "next/link"
import Image from "next/image"
import useSWR from 'swr';
import Loader from './child/Loader'
import Error from './child/Error';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function PostCard() {
    
    const { data, error, isLoading } = useSWR(
        "https://jsonplaceholder.typicode.com/posts",
        fetcher
      );
    if(isLoading) return <Loader/>
    if(error) return <Error/>

    return (
        <section className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-4xl py-12 text-center">Posts</h1>

        {/* grid columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {
            data.map((value, index) => (
                <Post data={value} key={index}></Post>
            ))
        }
        </div>
        </section>
    )
}

function Post( { data } ){
    const { id, title } = data;
    return (
        <div className="item">
            <div className="info flex justify-center flex-col py-4">
                <span className="text-orange-600 hover:text-orange-800">Business  </span>
                <span className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "Title"}</span>
                <p className="text-gray-500 py-3">
                    Even the mighty Quillmaster had no sway over the elusive words; it was a nearly anarchic existence. Yet, on a fateful dawn, a tiny dot of prose, known as Quirksworth, embarked on a quest to reach the distant Kingdom of Syntax.
                </p>
                <span className="text-xs text-gray-800 hover:text-gray-600">September 23, 2023</span>
                <div className="text-center mt-8">
                    <Link href={`/posts/${id}`}>
                        <span className="inline-block bg-pink-600 text-lg font-small rounded-full text-white px-8 py-2 cursor-pointer">Continue Reading</span>
                    </Link>
                </div>                
            </div>
        </div>
    )
}