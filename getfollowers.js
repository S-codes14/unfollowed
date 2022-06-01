const axios = require('axios').default;
let Instagram = require("instagram-web-api");

exports.github = async (username) => {
    let followers = [];
	let page = 1;
	try {
		while (true) {
			const options = {
				method: 'GET',
				url: `https://api.github.com/users/${username}/followers?page=${page}&per_page=100`
			};

			const { data } = await axios(options);
			if (data.length === 0) break;

			data.map(follower => {
				followers.push(follower.login);
			});
			page++;
		}
        return followers
	} catch (error) {
		console.log(error)
	}
}

// const instagram = async () => {
const client = new Instagram({
  username: "randollyapp",
  password: "MoonLight22",
});
exports.instagram = async (username1) => {
  await client.login();
  const user = await client.getUserByUsername({ username: username1 });
  // first: user.edge_followed_by.count
  const followers = await client.getFollowers({
    userId: user.id,
    first: user.edge_followed_by.count,
  });
//   I should probably set a timer saying if followers did not get, rerun the shit using recursive 
//   setInterval(()=>{
//     instagram(username1); // or something else
// }, 80000 - Math.random()*10000)
  const data = followers.data

  t = data.map((follower) => {
    return(follower.username)
   });
   console.log(t.length)
   return(t)
};

