import {useEffect, useState} from "react";
import TweetCard from "../components/TweetCard";

function Tweets ({tweets}) {
   const [orderedTweets, setOrderedTweets] = useState(tweets)

   useEffect(() => {
      setOrderedTweets(tweets.slice().sort((a, b) => b.timestamp - a.timestamp))
   },[tweets])

   return <div className="divide-y ">
      {orderedTweets.map((tweet,i) => (
          <TweetCard tweet={tweet} key={i} />
      ))}
   </div>
}

export default Tweets