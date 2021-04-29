# release-manager
Utils to manage unconformities between multiple branches on the same repository.

## Requirements
This modules needs Github access to the repositories you want to manage. You can use environment variables to achieve this:

```sh
GITHUB_TOKEN=<github-token>
```

## Usage

### `sync-branches`

Produces an output with a list of:
- PRs merged on the base branch that are missing in the given branch;
- Merged commits on the base branch that are picked on the given branch but are not covered in this step;
- Unmerged commits on the base branch that are picked on the given branch;

```
Options:
  -b, --branch <branch>  [required] Branch to sync with base branch
  -l, --base <base>      Base branch (default: "master")
  -o, --owner <owner>    [required] Repository owner
  -r, --repo <repo>      [required] Repository name
  -s, --step <step>      Base branch commit to sync to
  -h, --help             display help for command
```

#### Example

```sh
./bin/sync-branches -b <branch-name> -o <owner> -r <repository-name> -s <target-commit-hash>
```

#### Output

```sh
## Unmerged Cherry-picks

- commithash - Commit message 1 <Commit Author>
- commithash - Commit message 2 <Commit Author>

## Merged Cherry-picks

- commithash - Commit message 3 <Commit Author>
- commithash - Commit message 4 <Commit Author>
- commithash - Commit message 5 <Commit Author>

## Changelog

- Pull Request title 1 <link-to-pull-request> <link-to-author-github-profile>
- Pull Request title 2 <link-to-pull-request> <link-to-author-github-profile>
- Pull Request title 3 <link-to-pull-request> <link-to-author-github-profile>
- Pull Request title 4 <link-to-pull-request> <link-to-author-github-profile>
```
