
let mealList = [];
async function getList() {
    var Listresponse = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let finalList = await Listresponse.json();
    mealList = finalList.meals
    // console.log(mealList);

}
getList()


$('#Area').click(function () {
    let listBox = ``;
    for (var i = 0; i < mealList.length; i++) {
        listBox += `
         <div onclick="getCity (${i})" class="col-lg-3   col-md-4 col-sm-6 my-3  ">
                 <div>   
<i class="fa-solid fa-house-laptop fa-4x"></i>
       <h3 class='text-center mt-3 pt-2' > ${mealList[i].strArea}</h3>
                                        </div>
                    </div>
        `
    }
    document.getElementById('rowDate').innerHTML = listBox;
})
// ==========================================
function getCity(index){
    // let cityMeal=mealList[index].meals;
    let cityName=mealList[index].strArea;
    getFood(cityName)
}

let areaCitys=[];

async function getFood(cuntery){

    let response=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuntery} `)
    let finalDate = await response.json();
    areaCitys=finalDate.meals
    displayMision()

}






 function displayMision(){
    let fromCity=[];
    for(let i=0;i<areaCitys.length;i++){
        fromCity+=`

        <div onclick="getCuntryWeb(${i})" class="col-md-3 col-sm-3 my-3 ">
                <div  class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${areaCitys[i].strMealThumb}" alt="" srcset="">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                        <h3>${areaCitys[i].strMeal}</h3>
                    </div>
                </div>
        </div>
        `
    }
    document.getElementById('rowDate').innerHTML = fromCity;

}
// ===========================
 function getCuntryWeb(index){
    let webCuntry=areaCitys[index].idMeal
    cuntryDate(webCuntry)
 }

 let AreaaCuntery=[]
 async function cuntryDate(webCuntry){
    
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${webCuntry}`)
    let finalDate = await response.json();
    AreaaCuntery=finalDate.meals
    disPalycuntry()

 }



 function disPalycuntry() {
    let cuntryBox = [];
    for (let i = 0; i < AreaaCuntery.length; i++) {
        cuntryBox += `
       <div class="col-lg-4 col-md-6 col-sm-8 mt-1 p-3">
              <img class="w-100 border-1 rounded-3" src="${AreaaCuntery[i].strMealThumb}" alt="" />
              <h4 class="text-white">${AreaaCuntery[i].strMeal}</h4>
      </div>
      <div class="col-lg-8 mt-1  p-3">
              <h3 class="text-white left-0 text-start">Instructions</h3>
              <p class="p-diplay text-white"> 
              ${AreaaCuntery[i].strInstructions}
              </p>
              <h3 class="fw-bolder text-white text-start  ">Area : <span>${AreaaCuntery[i].strArea}</span></h3>
              <h3 class="fw-bolder text-white text-start">Category : <span>${AreaaCuntery[i].strCategory}</span></h3>
              <h3 class="fw-bolder text-white text-start">Recipes :</h3>
              <ul class="list-unstyled d-flex g-3 flex-wrap">
                <li class="alert alert-info m-2 p-1">${AreaaCuntery[i].strMeasure1}${AreaaCuntery[i].strIngredient1}</li>
                <li class="alert alert-info m-2 p-1">${AreaaCuntery[i].strMeasure2}${AreaaCuntery[i].strIngredient2}</li>
                <li class="alert alert-info m-2 p-1">${AreaaCuntery[i].strMeasure3}${AreaaCuntery[i].strIngredient3}</li>
                <li class="alert alert-info m-2 p-1">${AreaaCuntery[i].strMeasure4}${AreaaCuntery[i].strIngredient4}</li>
                <li class="alert alert-info m-2 p-1">${AreaaCuntery[i].strMeasure5}${AreaaCuntery[i].strIngredient5}</li>
                <li class="alert alert-info m-2 p-1">${AreaaCuntery[i].strMeasure6}${AreaaCuntery[i].strIngredient7}</li>
                <li class="alert alert-info m-2 p-1">${AreaaCuntery[i].strMeasure6}${AreaaCuntery[i].strIngredient8}</li>
                <li class="alert alert-info m-2 p-1">${AreaaCuntery[i].strMeasure6}${AreaaCuntery[i].strIngredient9}</li>
              </ul>
              <h3 class="text-white w-100 text-start">Tags :</h3>
              <ul class="list-unstyled d-flex g-3 flex-wrap">
                <a target="_blank" href="${AreaaCuntery[i].strSource}" class="btn btn-success me-2">Source</a>
                <a target="_blank" href="${AreaaCuntery[i].strYoutube}" class="btn btn-danger">Youtube</a>   
              </ul>
       </div>
  
  
       `;
    }
    // console.log(dataBox);

    document.getElementById("rowDate").innerHTML = cuntryBox;
      
  }


