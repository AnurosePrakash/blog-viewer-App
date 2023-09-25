import Format from "@/layout/Format"
import Image from 'next/image'

export const getStaticProps = async (req_param) => {

	const { params  } = req_param;
	const id = params.id;
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${id}`
	);
	const postData = await res.json();
	return {
		props: {
			post: postData,
		},
	};
};

export const getStaticPaths = () => {
	return {
		paths: [
			{ params: { id: "1" } },
			{ params: { id: "2" } },
			{ params: { id: "3" } },
			{ params: { id: "4" } },
			{ params: { id: "5" } }
		],
		fallback: false,
	};
};

const Post = ({ post }) => {
	return (
		<Format>
			<section className='container mx-auto md:px-2 py-16 w-1/2'>
				<div className="post py-10">
					<h1 className='font-bold text-4xl text-center pb-5'>{post.title || "No Title"}</h1>
					<p>
						Even the mighty Quillmaster had no sway over the elusive words; it was a nearly anarchic existence. Yet, on a fateful dawn, a tiny dot of prose, known as Quirksworth, embarked on a quest to reach the distant Kingdom of Syntax.
					</p>

					<div className="py-10">
						<Image alt="" src={"/images/plant.jpg"} width={900} height={600} priority></Image>
					</div>

					<div className="content text-gray-600 text-lg flex flex-col gap-4">
						<p>
							Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
						</p>
						<p>
							Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
						</p>
					</div>

				</div>  
			</section>
    	</Format>
	);
};

export default Post;
