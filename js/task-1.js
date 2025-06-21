const categoriesList = document.querySelector("#categories");

const categoryItem = categoriesList.querySelectorAll(".item");
console.log(`Number of categories: ${categoryItem.length}`);

categoryItem.forEach((item) => {
  const categoryItemTitle = item.querySelector("h2").textContent;

  const categoryInnerItem = item.querySelectorAll("ul li");

  console.log(`Category: ${categoryItemTitle}`);
  console.log(`Elements: ${categoryInnerItem.length}`);
});
