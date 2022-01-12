import Link from "next/link";
import {useWorkspace} from "../hook/useWorkspace";

function TweetCard({tweet}) {
    const {wallet} = useWorkspace()
    return <div className="px-8 py-4">
        <div>
            <h3 className="inline font-semibold">
                <Link
                    href={wallet?.publicKey.toBase58() === tweet?.author.toBase58() ? "/profile" : `/users/${tweet.author.toBase58()}`}>
                    <a className="hover:underline">{tweet.author_display}</a>
                </Link>
            </h3>
            <span className="text-gray-500"> • </span>
            <time className="text-gray-500 text-sm">
                <Link href={`/tweet/${tweet.publicKey.toBase58()}`} >
                    <a className="hover:underline">{tweet.created_ago}</a>
                </Link>
            </time>
        </div>
        <p className="whitespace-pre-wrap">{tweet.content}</p>
        {tweet.topic && <Link href={`/topics/${tweet.topic}`}>
            <a className="inline-block mt-2 text-pink-500 hover:underline">
                #{tweet.topic}
            </a>
        </Link>}
    </div>
}

export default TweetCard