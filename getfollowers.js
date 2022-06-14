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
  const { username, password } = process.env 
const client = new Instagram({
  username: username,
  password: password,
});
exports.instagram = async (username1) => {
  await client.login();
  const user = await client.getUserByUsername({ username: username1 });
  // first: user.edge_followed_by.count
  let followers = [];
  try {
  let after = null, has_next = true, id = user.id
  while (has_next) {
    console.log(id)
   const res = await client.getFollowers({
    userId: id,
    first: 50,
    after: after,	   
  });
  console.log("res: ", res)
  //  has_next = res.data.user.edge_followed_by.page_info.has_next_page
  //  after = res.data.user.edge_followed_by.page_info.end_cursor
  //  followers = followers.concat(res.data.user.edge_followed_by.edges.map(({node}) => {
  //       return {
  //         username: node.username
  //       }	
	//    }))
  }
  }catch (err){
	  console.log(err)
	  
  }
	  
  
//   I should probably set a timer saying if followers did not get, rerun the shit using recursive 
//   setInterval(()=>{
//     instagram(username1); // or something else
// }, 80000 - Math.random()*10000)
  const data = followers

//   t = data.map((follower) => {
//     return(follower.username)
//    });
   console.log(data.length)
   return(data)
};

