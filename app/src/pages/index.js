import {fetchApi} from "../utils/api/fetch";
import TweetForm from "../components/TweetForm";

function Home({tweets}) {
    return (
        <TweetForm />
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
