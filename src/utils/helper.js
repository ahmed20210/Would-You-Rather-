export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}
// export function formatTweet (question, author, authedUser ) {
//   const { id, votes, option1 ,option2, timestamp } = question
//   const { name, avatarURL } = author

//   return {
//     name,
//     id,
//     timestamp,
//     option1,
//     option2,
//     avatar: avatarURL,
//     votes: votes.length,
//     hasLiked: likes.includes(authedUser),
//     parent: !parentTweet ? null : {
//       author: parentTweet.author,
      
//     }
//   }
// }