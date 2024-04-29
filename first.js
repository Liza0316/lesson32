document.addEventListener('DOMContentLoaded', function() {
    const categoriesList = document.querySelectorAll('#categories .item');
    console.log('Number of Categories:', categoriesList.length);
    console.log('---');
    categoriesList.forEach(category => {
        const categoryName = category.querySelector('h2').textContent.trim();
        const elements = category.querySelectorAll('ul .list-cat li');
        const elementsCount = elements.length;
        let longestElement = '';
        elements.forEach(element => {
            if (element.textContent.length > longestElement.length) {
                longestElement = element.textContent;
            }
        });
        console.log("Category:" + categoryName);
        console.log("Elements:" + elementsCount);
        console.log("Longest Element:" + longestElement);
        console.log('---');
    });
});
