const axios = require('axios').default;

exports.github = async () => {
    var response = await axios.get('https://api.github.com/users/s-codes14/followers');
    if (response.status === 200) { 
        var d = response.data
        var t = d.map(item => {
            return(item.login)
           });
        console.log(t.length) 
        console.log(d.length) 
        return d
     
    } 
}
