
const categories = document.querySelectorAll('.item');
console.log('Number of categories:',categories.length);

for (let item of categories) {
    const categoriesName = item.children[0].textContent
    console.log('Category:',categoriesName)
    const categoriesElement = item.children[1].children.length;
    console.log('Elements:',categoriesElement)
 }






