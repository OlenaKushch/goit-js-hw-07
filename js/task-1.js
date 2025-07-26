const categoriesList = document.querySelector('#categories');
const liItems = categoriesList.querySelectorAll('.item'); 


console.log(`Number of categories: ${liItems.length}`);

liItems.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const elNumber = item.querySelectorAll('ul li').length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${elNumber}`);
});