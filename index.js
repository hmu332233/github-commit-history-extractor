const githubApi = require('./modules/api/GitHubApi');

const remainMessage = (commits) => {
  return commits.map(commit => commit.commit.message);
}

(async () => {
  try {
    const commitHistory = await githubApi.getCommitHistory(
      {
        owner: 'facebook',
        repo: 'react'
      },
      { per_page: 100 }
    );

    console.log(remainMessage(commitHistory.data));
  } catch (e) {
    // Deal with the fact the chain failed
  }
})();
