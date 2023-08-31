const handleTab = async() =>{
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data= await response.json()
    console.log(data.data);
    const categoriesArray= data.data;


    const tabContainer= document.getElementById('tab-container');

    categoriesArray.forEach((category) => {
        const div= document.createElement('div');
        div.innerHTML=`
        <a class="tab" onclick="handleCards(${category.category_id})">${category.category}</a>
        `;
    tabContainer.appendChild(div);
    });
};

const handleCards =async(cards) => {
    console.log(cards);
    const response= await fetch(`https://openapi.programming-hero.com/api/videos/category/${cards}`)
    const data = await response.json();

    const cardContainer= document.getElementById('card-container ');

    const cardsArray =data.data;

    cardContainer.innerHTML="";

    console.log(cardsArray);

    cardsArray.forEach(element => {
        console.log(element);
        const div= document.createElement('div');
    div.innerHTML=`
    <div class="card bg-base-100 shadow-xl">
          <figure><img src=${element.thumbnail} /></figure>
          <div class="card-body">
          
          <div class="flex flex-row space-x-1">
          <figure><img class="w-10 rounded-full" src="${element.authors[0].profile_picture}" alt=""></figure>
        <h2 class="card-title">${element.title}</h2>
      </div>
            <p class="text-sm font-normal text-gray-400 ">${element.authors[0].profile_name
            } <span class="ml-2">${element.authors[0].verified }</span></p>
            <p class="text-sm font-normal text-gray-400">${element.others.views} views</p>
          </div>
        </div>
    `;
    cardContainer.appendChild(div)
    });

    
}

handleTab();
handleCards(1000)
