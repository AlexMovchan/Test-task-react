const url = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';

const myfetch = () => {
    return fetch(url, {
        method: "POST",
        headers: new Headers(),
    })
        .then( response => {
            console.log(response);
            try {
                return response.json()
            }catch(err){
                console.log(err)
            }
        });

};


export default myfetch;