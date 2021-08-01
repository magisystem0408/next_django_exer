import {useRouter} from "next/router";
import {getAllPostIds, getAllPostsData, getPostData} from "../../lib/posts";


export default function PostData({post}){
    const router =useRouter();

    if(router.isFallback || !post){
        return <div>ロード中</div>
    }

    return(
        <div className="space-y-5 w-full">
            <div className="flex justify-center flex-col items-center mb-5">
                <h1 className="text-3xl mb-3 font-bold">{post.title}</h1>
                <p className="mb-3">{post.created_at}</p>
                <div className="border w-14"></div>
            </div>
            <p className="whitespace-pre-wrap">{post.content}</p>
        </div>
    )
}

// SSG用のやーつ

export async function getStaticPaths(){
    const paths =await getAllPostIds();
    return{
        paths,
        fallback:true
    }
}

// 詳細データを取得

export async function getStaticProps({params}){
    const post =await getPostData(params.id);
    console.log(post)
    return{
        props:{
            post,
        },
        revalidate:3,
    }
}