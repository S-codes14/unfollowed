const axios = require('axios').default;

exports.github = async (username) => {
    // var response = await axios.get('https://api.github.com/users/s-codes14/followers');
    // if (response.status === 200) { 
    //     var d = response.data
    //     var t = d.map(item => {
    //         return(item.login)
    //        });
    //     console.log(t.length) 
    //     console.log(d.length) 
    //     return d
     
    // } 
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
