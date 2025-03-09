import { DataRepoInterface } from "./interfaces/list-repo.interface";
import { ListUserInterface } from "./interfaces/list-user.interface";

export const mockUsers: ListUserInterface[] = [
  {
    login: "john_doe",
    id: 1,
    node_id: "MDQ6VXNlcjE=",
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/john_doe",
    html_url: "https://github.com/john_doe",
    followers_url: "https://api.github.com/users/john_doe/followers",
    following_url:
      "https://api.github.com/users/john_doe/following{/other_user}",
    gists_url: "https://api.github.com/users/john_doe/gists{/gist_id}",
    starred_url: "https://api.github.com/users/john_doe/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/john_doe/subscriptions",
    organizations_url: "https://api.github.com/users/john_doe/orgs",
    repos_url: "https://api.github.com/users/john_doe/repos",
    events_url: "https://api.github.com/users/john_doe/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/john_doe/received_events",
    type: "User",
    user_view_type: "default",
    site_admin: false,
    score: 99.5,
  },
];

export const mockRepos: DataRepoInterface[] = [
  {
    id: 1,
    node_id: "MDEwOlJlcG9zaXRvcnkx",
    name: "mock-repo",
    full_name: "mock-user/mock-repo",
    private: false,
    owner: {
      login: "mock-user",
      id: 123,
      node_id: "MDQ6VXNlcjEyMw==",
      avatar_url: "https://avatars.githubusercontent.com/u/123?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/mock-user",
      html_url: "https://github.com/mock-user",
      followers_url: "https://api.github.com/users/mock-user/followers",
      following_url:
        "https://api.github.com/users/mock-user/following{/other_user}",
      gists_url: "https://api.github.com/users/mock-user/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/mock-user/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/mock-user/subscriptions",
      organizations_url: "https://api.github.com/users/mock-user/orgs",
      repos_url: "https://api.github.com/users/mock-user/repos",
      events_url: "https://api.github.com/users/mock-user/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/mock-user/received_events",
      type: "User",
      user_view_type: "public",
      site_admin: false,
    },
    html_url: "https://github.com/mock-user/mock-repo",
    description: "This is a mock repository for testing.",
    fork: false,
    url: "https://api.github.com/repos/mock-user/mock-repo",
    forks_url: "https://api.github.com/repos/mock-user/mock-repo/forks",
    keys_url: "https://api.github.com/repos/mock-user/mock-repo/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/mock-user/mock-repo/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/mock-user/mock-repo/teams",
    hooks_url: "https://api.github.com/repos/mock-user/mock-repo/hooks",
    issue_events_url:
      "https://api.github.com/repos/mock-user/mock-repo/issues/events{/number}",
    events_url: "https://api.github.com/repos/mock-user/mock-repo/events",
    assignees_url:
      "https://api.github.com/repos/mock-user/mock-repo/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/mock-user/mock-repo/branches{/branch}",
    tags_url: "https://api.github.com/repos/mock-user/mock-repo/tags",
    blobs_url:
      "https://api.github.com/repos/mock-user/mock-repo/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/mock-user/mock-repo/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/mock-user/mock-repo/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/mock-user/mock-repo/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/mock-user/mock-repo/statuses/{sha}",
    languages_url: "https://api.github.com/repos/mock-user/mock-repo/languages",
    stargazers_url:
      "https://api.github.com/repos/mock-user/mock-repo/stargazers",
    contributors_url:
      "https://api.github.com/repos/mock-user/mock-repo/contributors",
    subscribers_url:
      "https://api.github.com/repos/mock-user/mock-repo/subscribers",
    subscription_url:
      "https://api.github.com/repos/mock-user/mock-repo/subscription",
    commits_url:
      "https://api.github.com/repos/mock-user/mock-repo/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/mock-user/mock-repo/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/mock-user/mock-repo/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/mock-user/mock-repo/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/mock-user/mock-repo/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/mock-user/mock-repo/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/mock-user/mock-repo/merges",
    archive_url:
      "https://api.github.com/repos/mock-user/mock-repo/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/mock-user/mock-repo/downloads",
    issues_url:
      "https://api.github.com/repos/mock-user/mock-repo/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/mock-user/mock-repo/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/mock-user/mock-repo/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/mock-user/mock-repo/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/mock-user/mock-repo/labels{/name}",
    releases_url:
      "https://api.github.com/repos/mock-user/mock-repo/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/mock-user/mock-repo/deployments",
    created_at: "2024-03-01T12:00:00Z",
    updated_at: "2024-03-05T14:00:00Z",
    pushed_at: "2024-03-06T10:00:00Z",
    git_url: "git://github.com/mock-user/mock-repo.git",
    ssh_url: "git@github.com:mock-user/mock-repo.git",
    clone_url: "https://github.com/mock-user/mock-repo.git",
    svn_url: "https://github.com/mock-user/mock-repo",
    homepage: null,
    size: 12345,
    stargazers_count: 100,
    watchers_count: 50,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 10,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 5,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["mock", "testing", "vitest"],
    visibility: "public",
    forks: 10,
    open_issues: 5,
    watchers: 50,
    default_branch: "main",
    permissions: {
      admin: true,
      maintain: true,
      push: true,
      triage: false,
      pull: true,
    },
  },
];
