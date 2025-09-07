// All id is here 
const categoryParent = document.getElementById("categoriesParen");
const allCategoryParent = document.getElementById("allCategoryParent");




// fetch category 
const fetchCategory=()=>{
    const url= "https://openapi.programming-hero.com/api/categories"
    fetch(url)
      .then((res) => res.json())
      .then((data) => showCategory(data));
    
   
    
}
const showCategory=(category)=>{
    categoryParent.innerHTML="";
    // console.log(category.categories);
    category.categories.forEach((element) => {
    //  console.log(element);
    categoryParent.innerHTML += `
    <li id="${element.id}" class="list-none text-center hover:bg-green-700 cursor-pointer font-bold hover:text-white  hover:rounded-lg ">${element.category_name}
    </li>
    
    `;

    });
    categoryParent.addEventListener('click',(e)=>{
        const allLi=document.querySelectorAll('li');
       allLi.forEach(li=>{
        li.classList.remove("bg-green-700");
       })
        
        // console.log(e.target);
        const target = e.target;
        if(target.localName==="li"){
            target.classList.add("bg-green-700");
        }

        
    })
    

}

fetchCategory();









