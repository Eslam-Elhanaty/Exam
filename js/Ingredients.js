let IngredientsList = [];
async function getIngredients() {
    var ListIngredients = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let finalIngredients = await ListIngredients.json();
    mealIngredients = finalIngredients.meals
    console.log(finalIngredients);

}
getIngredients()


$('#Ingredients').click(function () {
    
    let IngredBox = ``;
    for (var i = 0; i < 20; i++) {
        IngredBox += `
         <div onclick="  getLink(${i})" class=" text-center  col-md-3 col-sm-4 my-3  ">
                 <div>   
<i class="fa-solid fa-drumstick-bite fa-4x"></i>
       <h4 class='text-center mt-3 p-2  ' > ${mealIngredients[i].strIngredient}</h4>
       <p class="lead"> 
       ${mealIngredients[i].strDescription.split(" ").slice(0,15).join(" ")}
       
       </p>
                                        </div>
                    </div>
        `
    }
    document.getElementById('rowDate').innerHTML = IngredBox;
})

// =================================================================


function getLink(indexIngred){
    console.log(mealIngredients[indexIngred].strIngredient);
    let IngredName =mealIngredients[indexIngred].strIngredient;
    getIngredientsTwo(IngredName)
        }
      
        let IngredientsTwo=[];

        async function getIngredientsTwo(IngName){
            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${IngName}`)
    let finalDate = await response.json();
    allIngredients=finalDate.meals
    disPalyIngre()

        }


        function disPalyIngre(){
            let Ingrecartona=[]
            for (let i = 0; i<allIngredients.length;i++){
                Ingrecartona+=`
                
                 <div class="col-md-3 my-3 overflow-hidden " onclick="setIngred(${i})">
<div  class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    
                    <img class="w-100 overflow-hidden " src="${allIngredients[i].strMealThumb}"alt="" srcset="">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                                       <div >   

                                         <h3 class='text-center pt-2' > ${allIngredients[i].strMeal}</h3>
                                        </div>
                    </div>
                    </div>
                </div>
                
                `
            }
            document.getElementById('rowDate').innerHTML = Ingrecartona;

        }

// =========================================================================
function setIngred(setIndex)
{
let ingredWeb=allIngredients[setIndex].idMeal;
getWebInger(ingredWeb)
}



let allIngredWeb=[];
async function getWebInger(idIngred){
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idIngred}`)
    let finalDate = await response.json();
    Areaingred=finalDate.meals
    displayweb()

}

function displayweb(){
let webBox =[];
for (let i =0 ;i<Areaingred.length;i++){

    webBox+=`
    <div class="col-lg-4 col-md-6 col-sm-8 mt-1 p-3">
              <img class="w-100 border-1 rounded-3" src="${Areaingred[i].strMealThumb}" alt="" />
              <h4 class="text-white">${Areaingred[i].strMeal}</h4>
      </div>
      <div class="col-lg-8 mt-1  p-3">
              <h3 class="text-white left-0 text-start">Instructions</h3>
              <p class="p-diplay text-white"> 
              ${Areaingred[i].strInstructions}
              </p>
              <h3 class="fw-bolder text-white text-start  ">Area : <span>${Areaingred[i].strArea}</span></h3>
              <h3 class="fw-bolder text-white text-start">Category : <span>${Areaingred[i].strCategory}</span></h3>
              <h3 class="fw-bolder text-white text-start">Recipes :</h3>
              <ul class="list-unstyled d-flex g-3 flex-wrap">
                <li class="alert alert-info m-2 p-1">${Areaingred[i].strMeasure1}${Areaingred[i].strIngredient1}</li>
                <li class="alert alert-info m-2 p-1">${Areaingred[i].strMeasure2}${Areaingred[i].strIngredient2}</li>
                <li class="alert alert-info m-2 p-1">${Areaingred[i].strMeasure3}${Areaingred[i].strIngredient3}</li>
                <li class="alert alert-info m-2 p-1">${Areaingred[i].strMeasure4}${Areaingred[i].strIngredient4}</li>
                <li class="alert alert-info m-2 p-1">${Areaingred[i].strMeasure5}${Areaingred[i].strIngredient5}</li>
                <li class="alert alert-info m-2 p-1">${Areaingred[i].strMeasure6}${Areaingred[i].strIngredient7}</li>
                <li class="alert alert-info m-2 p-1">${Areaingred[i].strMeasure6}${Areaingred[i].strIngredient8}</li>
                <li class="alert alert-info m-2 p-1">${Areaingred[i].strMeasure6}${Areaingred[i].strIngredient9}</li>
              </ul>
              <h3 class="text-white w-100 text-start">Tags :</h3>
              <ul class="list-unstyled d-flex g-3 flex-wrap">
                <a target="_blank" href="${Areaingred[i].strSource}" class="btn btn-success me-2">Source</a>
                <a target="_blank" href="${Areaingred[i].strYoutube}" class="btn btn-danger">Youtube</a>   
              </ul>
       </div>
  
    `
}
document.getElementById("rowDate").innerHTML = webBox;

}

