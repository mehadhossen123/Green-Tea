// All id is here 
const categoryParent = document.getElementById("categoriesParen");
const allComponentParent = document.getElementById("allComponentParent");




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
       showAllCategoryByName(e.target.id);

        
    })
    

}
// fetch all default component
const fetchAllComponent=()=>{
    const url = "https://openapi.programming-hero.com/api/plants"
    fetch(url)
    .then(res=>res.json())
    .then(data=>showAllComponent(data)
    )
   .catch(err=>{
    // console.log(err);
   })
}

const showAllComponent=(data)=>{
    allComponentParent.innerHTML="";
    data.plants.forEach(element=>{
        // console.log(element);
        allComponentParent.innerHTML += `

        <div class="shadow-lg  rounded-xl py-5 px-5" >
          <img class="h-[300px]  rounded-t-xl w-full" src="${element.image}" alt="">
          <h1 class="font-bold mt-5">${element.name}</h1>
          <p class="">${element.description}</p>
          <div class="flex justify-between mt-4">
            <button class="border-2 border-green-400 px-4 rounded-xl  text-green-400">${element.category}</button>
            <p>$ <span>${element.price}</span></p>
          </div>
          <button class="w-full mt-4 bg-green-700 py-2 rounded-xl">Add to Cart</button>
        </div>
        
        `;
        
    })
}
// fetch different types by category 
const showAllCategoryByName=(id)=>{
    const url =`https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayByNameCategory(data));
     
   
}



const displayByNameCategory=(card)=>{
    allComponentParent.innerHTML="";

    // console.log(card);
    card.plants.forEach(element=>{
        console.log(element);
         allComponentParent.innerHTML += `
          <div class="shadow-lg  rounded-xl py-5 px-5" >
          <img class="h-[300px]  rounded-t-xl w-full" src="${element.image}" alt="">
          <h1 class="font-bold mt-5">${element.name}</h1>
          <p class="">${element.description}</p>
          <div class="flex justify-between mt-4">
            <button class="border-2 border-green-400 px-4 rounded-xl  text-green-400">${element.category}</button>
            <p>$ <span>${element.price}</span></p>
          </div>
          <button class="w-full mt-4 bg-green-700 py-2 rounded-xl">Add to Cart</button>
        </div>


         `;
        
    })

}
fetchAllComponent();

fetchCategory();









