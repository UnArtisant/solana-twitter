import {fetchApi} from "../utils/api/fetch";
import TweetForm from "../components/TweetForm";
import Tweets from "../sections/Tweets";

function Home({tweets}) {
    return (
        <div>
            <TweetForm />
            <Tweets tweets={tweets} />
        </div>
    )
}

export async function getServerSideProps() {
    const tweets = await fetchApi("http://localhost:3000/api/tweets")
    return {
        props: {
            tweets
        }
    }
}

export default Home
