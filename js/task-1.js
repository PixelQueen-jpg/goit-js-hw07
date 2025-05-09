const ul = document.querySelectorAll("ul li.item")
console.log("Kategori sayısı:", ul.length)

ul.forEach(element => {
    console.log(element.firstElementChild.textContent);
    const li = element.querySelectorAll('li');
    console.log("Elements:", li.length)
});