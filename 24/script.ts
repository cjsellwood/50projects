interface Post {
  image: string;
  title: string;
  text: string;
  avatar: string;
  author: string;
  date: string;
}

async function fetchContent(): Promise<Post> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        image:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
        title: "Lorem ipsum dolor sit amet",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        author: "John Doe",
        date: "Oct 08, 2020",
      });
    }, 2500);
  });
}

async function loadPost() {
  const data = await fetchContent();
  console.log(data);

  toggleLoading();

  renderPost(data);
}

function toggleLoading() {
  const placeholder = document.querySelector(".placeholder")! as HTMLDivElement;
  const content = document.querySelector(".content")! as HTMLDivElement;

  placeholder.classList.add("hide");
  content.classList.remove("hide");
}

function renderPost(data: Post) {
  const img = document.getElementById("image")! as HTMLImageElement;
  img.src = data.image;
  img.alt = data.title;

  const title = document.getElementById("title")! as HTMLHeadingElement;
  title.textContent = data.title;

  const text = document.getElementById("text")! as HTMLParagraphElement;
  text.textContent = data.text;

  const avatar = document.getElementById("avatar")! as HTMLImageElement;
  avatar.src = data.avatar;
  avatar.alt = "avatar";

  const author = document.getElementById("author")! as HTMLHeadingElement;
  author.textContent = data.author;

  const date = document.getElementById("date")! as HTMLParagraphElement;
  date.textContent = data.date;
}

window.addEventListener("load", loadPost);
