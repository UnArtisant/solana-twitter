import Link from "next/link";

function TweetCard ({tweet}) {
 return <div className="px-8 py-4">
     <div>
         <h3 className="inline font-semibold">
             <Link href="/">
                 <a className="hover:underline">{tweet.author_display }</a>
             </Link>
         </h3>
    <span className="text-gray-500"> • </span>
    <time className="text-gray-500 text-sm">
        <Link href="/">
            <a className="hover:underline">{ tweet.created_ago }</a>
        </Link>
    </time>
</div>
    <p className="whitespace-pre-wrap">{tweet.content}</p>
     {tweet.topic && <Link href="/">
         <a className="inline-block mt-2 text-pink-500 hover:underline">
             #{ tweet.topic }
         </a>
     </Link> }
</div>
}

export default TweetCard