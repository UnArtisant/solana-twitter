import TweetSearch from "../../components/TweetSearch";
import Tweets from "../../sections/Tweets";
import {useRouter} from "next/router";
import TweetForm from "../../components/TweetForm";
import {useWorkspace} from "../../hook/useWorkspace";
import {fetchTweet} from "../../utils/api/fetch/tweet";
import {useState, useEffect} from "react";
import {topicFilter} from "../../utils/filter/topics";

function Topics () {
    const router = useRouter()
    const {program} = useWorkspace()

    const {query} = router

    const [loading, setLoading] = useState(false)
    const [tweets, setTweets] = useState([])

    const handleTweet = async (program) => {
        setLoading(true)
        setTweets(await fetchTweet(program, [topicFilter(query?.topic?.[0])]))
        setLoading(false)
    }

    useEffect(() => {
        handleTweet(program)
    }, [])
    return <>
     <TweetSearch modelValue={query?.topic?.[0]} placeholder="topic" >
         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
             <path fillRule="evenodd"
                   d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
                   clipRule="evenodd"/>
         </svg>
     </TweetSearch>
        {query?.topic?.[0] && <TweetForm forcedTopic={query?.topic?.[0]} />}
        {tweets.length ? <Tweets tweets={tweets} /> : <div className="p-8 text-gray-500 text-center">
            No tweets were found in this topics...
        </div>}
    </>
}


export default Topics