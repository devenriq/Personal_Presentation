import data from "./data.js";

const $name = document.querySelector("h1");
const $nickname = document.querySelector("h2");
const $description = document.querySelector("#description");
const $social = document.querySelector("#social");
const $links = document.querySelector("#links");

const main = () => {
  let name = document.createTextNode(data?.name);
  let nickname = document.createTextNode(data?.nickname);
  let description = document.createTextNode(data?.description);

  let social = data?.social
    ?.map((link) => {
      return `
    <a href="${link.url}" target="_blank">
      ${link.svg}
    </a>
    `;
    })
    .join("");

  let links = data?.links
    ?.map((link) => {
      return `
        <div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
          <a
            class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
            href="${link.url}"
            target="_blank"
          >
            ${link.name}
          </a>
          <span>${link.emoji}</span>
        </div>`;
    })
    .join("");
  let newItem = document.createElement("section");
  newItem.innerHTML = links;

  $name.append(name);
  $nickname.append(nickname);
  $description.append(description);
  $social.innerHTML = social;
  $links.append(newItem);
};

main();
