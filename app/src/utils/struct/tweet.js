import dayjs from "dayjs";

export class Tweet {
  constructor(publicKey, account) {
      this.publicKey = publicKey
      this.author = account.author
      this.timestamp = account.timestamp.toString()
      this.topic = account.topic
      this.content = account.content
  }

    get key () {
        return this.publicKey.toBase58()
    }

    get author_display () {
        const author = this.author.toBase58()
        return author.slice(0,4) + '..' + author.slice(-4)
    }

    get created_at () {
        return dayjs.unix(this.timestamp).format('lll')
    }

    get created_ago () {
        return dayjs.unix(this.timestamp).fromNow()
    }

}