import {Tweet} from "../../struct/tweet";

export const fetchTweet = async (program, filters = []) => {
    const tweet = await program.account.tweet.all(filters)
    return tweet.map(tweet => new Tweet(tweet.publicKey, tweet.account))
}