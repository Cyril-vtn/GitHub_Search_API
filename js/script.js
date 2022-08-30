"Strict Mode";
const btnSearch = document.querySelector(".search_btn");
const input = document.querySelector(".input");

// focus input
input.focus(input);

async function callData() {
  const resultSection = document.querySelector(".result");
  const links = document.querySelectorAll(".links");
  const errorMessage = document.querySelector(".error_message");
  console.log(input);
  try {
    // Call the API
    const res = await fetch(`https://api.github.com/users/${input.value}`);
    const data = await res.json();
    const date = new Date(data.created_at);
    const dateSplit = date.toDateString().split(" ");
    console.log(data);
    // render APi to the html
    input.value = "";
    if (data.message === "Not Found") {
      errorMessage.innerHTML = `<span class="no-results bold font_15px">No results</span>`;
    } else {
      const html = `
        <div class="result-container">
          <div>
            <img src="${data.avatar_url}" alt="" class="profile_img" />
          </div>
          <div class="result-container-content">
            <div class="result-title font_15px">
              <h2 class="font_26px bold">${data.login}</h2>
              <p>Joined ${dateSplit[2]} ${dateSplit[1]} ${dateSplit[3]}</p>
            </div>
            <p class="twitter-text">${
              data.twitter_username ? data.twitter_username : "Not available"
            }</p>
            <p class="bio-text font_15px">${
              data.bio ? data.bio : "This profile has no bio"
            }</p>
            <div class="stats-content">
              <div class="Repos-content">
                <p class="repos-text">Repos</p>
                <p class="repos-number bold">${
                  data.public_repos ? data.public_repos : "0"
                }</p>
              </div>
              <div class="follower-content">
                <p class="follower-text">Follower</p>
                <p class="follower-number bold">${
                  data.followers ? data.followers : "0"
                }</p>
              </div>
              <div class="following-content">
                <p class="following-text">Following</p>
                <p class="following-number bold">${
                  data.following ? data.following : "0"
                }</p>
              </div>
            </div>
            <div class="links-container-1">
              <div class="location-content">
                <img
                  src="/assets/icon-location.svg"
                  alt=""
                  class="location-icon"
                />
                <p class="location-text font_15px links-text">${
                  data.location ? data.location : "Not available"
                }</p>
              </div>
              <div class="twitter-content ">
                <img
                  src="/assets/icon-twitter.svg"
                  alt=""
                  class="twitter-icon"
                />
                <a href="${
                  data.twitter_username
                    ? `https://twitter.com/${data.twitter_username}`
                    : "#"
                }" class="twitter-content-text link_hover cursor_pointer links-text" target="_blank" >
                 ${
                   data.twitter_username
                     ? `https://twitter.com/${data.twitter_username}`
                     : "Not available"
                 } 
                </a>
              </div>
            </div>
            <div class="links-container-2">
              <div class="website-content">
                <img
                  src="/assets/icon-website.svg"
                  alt=""
                  class="website-icon"
                />
                <a target="_blank"  href="${
                  data.html_url
                }" class="website-text link_hover cursor_pointer links-text">${
        data.html_url ? data.html_url : "Not available"
      }  
                  </a>
              </div>
              <div class="company-content">
                <img
                  src="/assets/icon-company.svg"
                  alt=""
                  class="company-icon"
                />
                <p class="company-text links-text">${
                  data.company ? data.company : "Not available"
                }</p>
              </div>
            </div>
          </div>
        </div>
  `;

      // clear section and focus
      resultSection.innerHTML = "";
      input.focus(input);
      // delete error message
      errorMessage.innerHTML = "";
      // display result

      resultSection.innerHTML += html;
    }
  } catch (err) {
    // display error in html
    errorMessage.innerHTML = `<span class="no-results bold font_15px">Error</span>`;
    console.error(err);
  }
}

// event listener
btnSearch.addEventListener("click", callData);
input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    btnSearch.click();
  }
});

// avatar_url: "https://avatars.githubusercontent.com/u/108680561?v=4"
// bio: null
// blog: ""
// company: null
// created_at: "2022-07-04T14:15:35Z"
// email: null
// events_url: "https://api.github.com/users/Drakomar/events{/privacy}"
// followers: 0
// followers_url: "https://api.github.com/users/Drakomar/followers"
// following: 0
// following_url: "https://api.github.com/users/Drakomar/following{/other_user}"
// gists_url: "https://api.github.com/users/Drakomar/gists{/gist_id}"
// gravatar_id: ""
// hireable: null
// html_url: "https://github.com/Drakomar"
// id: 108680561
// location: null
// login: "Drakomar"
// name: null
// node_id: "U_kgDOBnpVcQ"
// organizations_url: "https://api.github.com/users/Drakomar/orgs"
// public_gists: 0
// public_repos: 0
// received_events_url: "https://api.github.com/users/Drakomar/received_events"
// repos_url: "https://api.github.com/users/Drakomar/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/Drakomar/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/Drakomar/subscriptions"
// twitter_username: null
// type: "User"
// updated_at: "2022-08-26T13:00:37Z"
// url: "https://api.github.com/users/Drakomar"
