const list = document.querySelector("#categories");
const categoryItems = list.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryItems.length}`);
categoryItems.forEach((item) => {
  const categoriesTitle = item.querySelector("h2").textContent;
  const categoriesElement = item.querySelectorAll("ul > li");
  console.log(`Category: ${categoriesTitle}`);
  console.log(`Elements: ${categoriesElement.length}`);
});
