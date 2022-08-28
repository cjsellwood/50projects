const searchForm = document.getElementById("search-form")! as HTMLFormElement;
const searchInput = document.getElementById(
  "search-input"
)! as HTMLInputElement;

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = searchInput.value;
  searchInput.value = "";

  hideError();
  try {
    const user = await fetchUser(query);
    const repos = await fetchRepos(user.repos_url);

    displayUser({
      avatar_url: user.avatar_url as string,
      name: user.name ?? ("null" as string),
      bio: user.bio ?? ("null" as string),
      followers: user.followers as number,
      following: user.following as number,
      public_repos: user.public_repos as number,
      repos: repos
        .map((repo: any) => ({ name: repo.name, url: repo.url }))
        .slice(0, 5),
    });
  } catch (error) {
    showError("No profile with this username");
  }
});

const fetchUser = async (query: string) => {
  const res = await fetch(`https://api.github.com/users/${query}`);
  const data = await res.json();
  return data;
};

const fetchRepos = async (url: string) => {
  const res = await fetch(url + "?sort=created");
  const data = await res.json();
  return data;
};

interface User {
  avatar_url: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  repos: { name: string; url: string }[];
}

const displayUser = (user: User) => {
  const { avatar_url, name, bio, followers, following, public_repos, repos } =
    user;
    
  const userContainer = document.getElementById(
    "user-container"
  )! as HTMLDivElement;
  userContainer.classList.remove("hide");

  const avatar = document.getElementById("avatar")! as HTMLImageElement;
  avatar.src = avatar_url;

  const userName = document.getElementById("user-name")! as HTMLHeadingElement;
  userName.textContent = name;

  const userBio = document.getElementById("user-bio")! as HTMLHeadingElement;
  userBio.textContent = bio;

  const userFollowers = document.getElementById(
    "user-followers"
  )! as HTMLSpanElement;
  userFollowers.textContent = followers.toString();

  const userFollowing = document.getElementById(
    "user-following"
  )! as HTMLSpanElement;
  userFollowing.textContent = following.toString();

  const userRepos = document.getElementById("user-repos")! as HTMLSpanElement;
  userRepos.textContent = public_repos.toString();

  const reposContainer = document.getElementById(
    "repos-container"
  )! as HTMLDivElement;
  reposContainer.replaceChildren();
  repos.forEach((repo) => {
    const repoElement = document.createElement("a");
    repoElement.textContent = repo.name;
    repoElement.href = repo.url;
    reposContainer.append(repoElement);
  });
};

const hideError = () => {
  const errorContainer = document.getElementById(
    "error-container"
  )! as HTMLDivElement;
  errorContainer.classList.add("hide");
}

const showError = (error: string) => {
  const userContainer = document.getElementById(
    "user-container"
  )! as HTMLDivElement;
  userContainer.classList.add("hide");

  const errorContainer = document.getElementById(
    "error-container"
  )! as HTMLDivElement;
  errorContainer.classList.remove("hide");
  errorContainer.textContent = error;
};
