/**
 * Module dependencies.
 */

const { Octokit } = require('@octokit/rest');

/**
 * `GithubClient` class.
 */

class GithubClient {
  /**
   * Constructor.
   */

  constructor({
    base = 'master', owner, repo, token,
  } = {}) {
    this.base = base;
    this.client = new Octokit({ auth: `token ${token}` });
    this.owner = owner;
    this.repo = repo;
  }

  /**
   * Get pull request by commit hash.
   */

  async getPullRequestByCommitHash(hash) {
    return this.client.repos.listPullRequestsAssociatedWithCommit({
      commit_sha: hash,
      owner: this.owner,
      repo: this.repo,
    });
  }
}

/**
 * Export `GithubClient`.
 */

module.exports = GithubClient;
