class GitHubApi {
  async getFollowers() {
    let res = await fetch("https://api.github.com/users/virmerson/followers");
    let json = await res.json();
    return json;
  }
}

class Controller {
  constructor() {
    this.gitHubApi = new GitHubApi();
  }

  async listarNaTela() {
    let followers = await this.gitHubApi.getFollowers();
    console.log(followers);

    let div = "";
    followers.forEach((e) => {
      div += `<div><a target='_blank' href='${e.html_url}'> <img width='50' src='${e.avatar_url}'>   ${e.login}  </a></div> `;
    });

    document.getElementById("resultado").innerHTML = div;
  }
}
