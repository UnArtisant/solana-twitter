import TweetForm from "../components/TweetForm";
import Tweets from "../sections/Tweets";
import {useWorkspace} from "../hook/useWorkspace";
import {fetchTweet} from "../utils/api/fetch/tweet";
import {useState, useEffect} from "react";

function Profile() {

    const {program, wallet} = useWorkspace()

    const [loading, setLoading] = useState(false)
    const [tweets, setTweets] = useState([])

    const handleTweet = async (program) => {
        setLoading(true)
        setTweets(await fetchTweet(program))
        setLoading(false)
    }

    useEffect(() => {
        handleTweet(program)
    }, [])

    return (
        <div>
            <div className="border-b px-8 py-4 bg-gray-50">
                {wallet?.publicKey?.toBase58()}
            </div>
            <TweetForm/>
            <Tweets tweets={tweets}/>
        </div>
    )
}


export default Profile