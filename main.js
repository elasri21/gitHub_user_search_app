const url = 'https://api.github.com/users'




const btn = document.querySelector(".btn");
const field = document.querySelector(".field");

btn.addEventListener("click", async function getData() {
    const username = field.value.trim();
    if (username != '') {
        const user = `${url}/${username}`
        const res = await fetch(user);

        const data = await res.json();

        console.log(data);
        if (res.status == 200) {
            const avatar  = document.querySelector(".avatar img")
            avatar.src = data['avatar_url']
            
            const userName = document.querySelector(".top-section h2")
            userName.innerHTML = data['login']
            
            const lightName = document.querySelector(".top-section p")
            lightName.innerHTML = data['name']
            
            const joinedDate = document.querySelector(".joined-date");
            joinedDate.innerHTML = data['created_at'];
            
            const bio = document.querySelector(".descreption p")
            bio.innerHTML = data['bio'] != null ? data['bio'] : 'This profile has no bio';
            
            const repos = document.querySelector(".repos h4")
            repos.innerHTML = data['public_repos']
            
            const followers = document.querySelector(".followers h4")
            followers.innerHTML = data['followers']
            
            const following = document.querySelector(".following h4")
            following.innerHTML = data['following']
            
            const located = document.querySelector(".location span");
            located.innerHTML = data['location'] != null ? data['location'] : "Somewhere on earth";

            const twitter = document.querySelector(".twitter span");
            twitter.innerHTML = data['twitter_username'] != null ? data['twitter_username'] : 'Not available'
            
            const blog = document.querySelector(".blog span");
            blog.innerHTML = data['blog'] != '' ? data['blog'] : "Has no blog!";

            const sgit = document.querySelector(".sgit span");
            sgit.innerHTML = data['login']
        }
        else {
            console.log("Uknown user");
        }
    }
});

