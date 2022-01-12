import TweetForm from "../components/TweetForm";
import {useEffect, useState} from "react";
import {useWorkspace} from "../hook/useWorkspace";
import Tweets from "../sections/Tweets";
import {fetchTweet} from "../utils/api/fetch/tweet";


function Home() {

    const {program} = useWorkspace()

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
            <TweetForm/>
            {loading ? <div className="p-8 text-gray-500 text-center">
                Loading...
            </div> : <Tweets tweets={tweets}/>}
        </div>
    )
}


export default Home
