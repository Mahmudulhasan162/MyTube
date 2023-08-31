const handleTab = async() =>{
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data= await response.json()
    // console.log(data.data);
    const categoriesArray= data.data;


    const tabContainer= document.getElementById('tab-container');

    categoriesArray.forEach((category) => {
        const div= document.createElement('div');
        div.innerHTML=`
        <a class=" tab px-4  py-1 text-black bg-gray-300 hover:text-white hover:bg-redColor rounded-lg mx-4"onclick="handleCards(${category.category_id})">${category.category}</a>
        `;
    tabContainer.appendChild(div);
    });
};

const handleCards =async(cards) => {
    // console.log(cards);
    const response= await fetch(`https://openapi.programming-hero.com/api/videos/category/${cards}`)
    const data = await response.json();

    const cardContainer= document.getElementById('card-container ');

    const cardsArray =data.data;

    cardContainer.innerHTML="";

    const noCard= document.getElementById('no-card')
    noCard.innerHTML='';

    if(cardsArray.length==0){
        
        const section= document.createElement('div');
        section.innerHTML=`
        <div class="container mx-auto text-center w-[400px] space-y-6 ">
        <img class="mx-auto" src="./images/Icon.png" alt="">
          <h2 class="text-3xl font-bold">Oops!! Sorry, There is no content here</h2>
        </div>
        `;
        noCard.appendChild(section)
    }
    else{
        
        cardsArray.forEach(element => {
            // console.log(element);
            const div= document.createElement('div');
        div.innerHTML=`
        <div class="card w-full h-[350px] ">
              <figure><img class="w-full max-h-[150px]"  src=${element.thumbnail} /></figure>
              <div class="card-body">
              
              <div class="flex flex-row space-x-4">
              <figure><img class="w-10 h-10 rounded-full" src="${element.authors[0].profile_picture}" alt=""></figure>
            <h2 class="card-title">${element.title}</h2>
          </div>
                <div class="flex flex-row gap-3">
                <div><p class="text-sm font-normal text-gray-400 ">${element.authors[0].profile_name
                } </p></div>
                <div>${element.authors[0].verified?'<img src="./images/fi_10629607.svg" alt="">': '' }
                </div>
    
                </div>
                <p class="text-sm font-normal text-gray-400">${element.others.views} views</p>
              </div>
            </div>
        `;
        cardContainer.appendChild(div)
        });
    }
    // console.log(cardsArray);

    

    
}

handleTab();
handleCards(1000)
