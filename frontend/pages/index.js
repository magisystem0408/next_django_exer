import Head from 'next/head'
import Post from "../components/post/post";
import {getAllPostsData} from "../lib/posts";
import Image from "next/image";

export default function Home({posts}) {
  return (
    <div className="">
      <Head>
          <title>ようこそ</title>
      </Head>
        <h1 className="flex justify-center h-screen items-center">
            <Image
                src="/top.jpg"
                className="object-cover rounded"
                alt="top"
                width={1280}
                height={500}
                />
        </h1>
        <div className="flex justify-center flex-col items-center mb-10">
            <div className="text-lg mb-3">記事投稿</div>
                <div className="text-lg mb-3">ブログ投稿</div>
            <div className="border w-14"></div>
                <div className="flex flex-wrap -m-4 mb-5">
                    {/*postが存在すれば表示する*/}
                    {
                        posts && posts.map((post) =><Post key={post.id} post={post} /> )
                    }

                </div>
        </div>

    </div>
  )
}

export async function getStaticProps(){
    const posts =await getAllPostsData();
    return{
        props:{posts},
        revalidate:3,
    }
}