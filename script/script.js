// All id is here 
const categoryParent = document.getElementById("categoriesParen");
const allComponentParent = document.getElementById("allComponentParent");
const newsModalDetails = document.getElementById("news_modal_details");
const eachModal = document.getElementById("modalId");
const cartParent = document.getElementById("cartParent");
const allPrice=[];





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
       
        allComponentParent.innerHTML += `

        <div id="modalId" class="shadow-lg  rounded-xl py-5 px-5" >
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

    //  console.log(card.name);
    card.plants.forEach(element=>{
        
        
        //  console.log(element);
         allComponentParent.innerHTML += `
          <div  class="shadow-lg  rounded-xl py-5 px-5" >
          <img class="h-[300px]  rounded-t-xl w-full" src="${element.image}" alt="">
          <h1  onclick="showLoadDetails(${element.id})" class="font-bold mt-5 cursor-pointer">${element.name}</h1>
          <p class="">${element.description}</p>
          <div class="flex justify-between mt-4">
            <button class="border-2 border-green-400 px-4 rounded-xl  text-green-400">${element.category}</button>
            <p>$<span>${element.price}</span></p>
          </div>
          <button    class="w-full mt-4 bg-green-700 py-2 rounded-xl">Add to Cart</button>
        </div>


         `;
        
    })

}
 let total = 0;
     
   allComponentParent.addEventListener('click',(e)=>{
   
    if(e.target.innerText==="Add to Cart"){
      
        const title=e.target.parentNode.children[3].children[0].innerText;
        const treePrice=e.target.parentNode.children[3].children[1].innerText;
      
        let price = parseInt(treePrice.replace(/[^\d]/g, "")); 
      
     
        
        
        total=total+price;
       document.getElementById("totalPrice").innerText = total;


      
       cartParent.innerHTML += `
       <div class="flex justify-between items-center mt-4">
   <div> <h1>${title}</h1>
  <p>${treePrice}</p>
  </div>
  <div class=""><button class="btn btn-outline btn-error text-red-700">Delete</button></div>

</div>

       `;
         
    }
   
   });
   cartParent.addEventListener("click", (e) => {
     if (e.target.innerText === "Delete") {
       e.target.parentElement.parentElement.remove();
     }
   });


const showLoadDetails=(id)=>{
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayModals(data.plants));
    

}
const displayModals=(element)=>{
    eachModal.innerHTML="";
    console.log(element);
    eachModal.innerHTML += `
    <div  class="shadow-xl  rounded-xl py-5 px-5" >
     <h1  onclick="showLoadDetails(${element.id})" class="font-bold mb-5 cursor-pointer text-2xl">${element.name}</h1>
    
          <img class="h-[200px]  rounded-t-xl w-full" src="${element.image}" alt="">
          <h1 class=""> <span class="font-bold">Category:</span> ${element.category}</h1>
            <p> <span class="font-bold">Price:</span>$ <span>${element.price}</span></p>
          <p class=""><span class="font-bold">Description: </span> ${element.description}</p>
         
         
          <div class="flex justify-between mt-4">
           
          
          </div>
         
        </div>

    `;
     newsModalDetails.showModal();
}


fetchAllComponent();

fetchCategory();









