const axios = require('axios');

const host = 'https://api.github.com';

class GitHubApi {
  getCommitHistory({ owner, repo }, queryString) {
    console.log({ owner, repo }, queryString)
    return axios.get(`${host}/repos/${owner}/${repo}/commits`, queryString);
    // return axios.get('https://www.naver.com/')
  }
}

module.exports = new GitHubApi();