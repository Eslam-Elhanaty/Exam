"use strict"
let allCategory = [];
async function getCategory() {
    var response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let finalDate = await response.json();
    allCategory = finalDate.categories
    // console.log(allCategory);

}
getCategory()

$("#categories").click(function()
{
    let dataBox =``;
    for (var i = 0; i < allCategory.length; i++) {
        dataBox += `
         <div onclick="gitItemIndex(${i})" class=" col-lg-3 col-md-6 col-sm-8 my-3 overflow-hidden ">
<div  class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    
                    <img class="w-100" src="${allCategory[i].strCategoryThumb}"alt="" srcset="">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                                       <div >   

                                         <h3 class='text-center mt-3 pt-2' > ${allCategory[i].strCategory}</h3>
                    <p class='lead '> ${allCategory[i].strCategoryDescription.split(" ").slice(0,16).join(" ")}</p>
                                        </div>
                    </div>
                    </div>
                </div>
        `
    }
    document.getElementById('rowDate').innerHTML = dataBox;
})


// =================================================================

function gitItemIndex(itemIndex){
let mealNAme = allCategory[itemIndex].strCategory;
getNameCategory(mealNAme)
}

let allName=[];
async function getNameCategory(mName) {
    var response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${mName}`)
    let finalDate = await response.json();
    allName= finalDate.meals
    dispalyName()
    // console.log(allName);

}
function dispalyName()
{
    let dataBox =``;
    for (var i = 0; i < allName.length; i++) {
        dataBox += `
         <div class="col-md-3 my-3 overflow-hidden " onclick="geteItemUrl(${i})">
<div  class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    
                    <img class="w-100 overflow-hidden " src="${allName[i].strMealThumb}"alt="" srcset="">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                                       <div >   

                                         <h3 class='text-center pt-2' > ${allName[i].strMeal}</h3>
                                        </div>
                    </div>
                    </div>
                </div>
        `
    }
    document.getElementById('rowDate').innerHTML = dataBox;
}

// =======================================================================
function geteItemUrl(index){
    let dataForm=allName[index].idMeal
    getUrl(dataForm)
}

let getInform=[];
async function getUrl(dateIces)
{
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dateIces}`)
    let finalForm = await response.json();
    getInform=finalForm.meals
    disPalyform()

    // console.log(idData);

}
function disPalyform() {
    let formsBox = [];
    for (let i = 0; i < getInform.length; i++) {
        formsBox += `
       <div class="col-lg-4 mt-1 p-3">
              <img class="w-100 border-1 rounded-3" src="${getInform[i].strMealThumb}" alt="" />
              <h4 class="text-white">${getInform[i].strMeal}</h4>
      </div>
      <div class="col-lg-8 mt-1  p-3">
              <h3 class="text-white left-0 text-start">Instructions</h3>
              <p class="p-diplay text-white"> 
              ${getInform[i].strInstructions}
              </p>
              <h3 class="fw-bolder text-white text-start  ">Area : <span>${getInform[i].strArea}</span></h3>
              <h3 class="fw-bolder text-white text-start">Category : <span>${getInform[i].strCategory}</span></h3>
              <h3 class="fw-bolder text-white text-start">Recipes :</h3>
              <ul class="list-unstyled d-flex g-3 flex-wrap">
                <li class="alert alert-info m-2 p-1">${[i].strMeasure1}${getInform[i].strIngredient1}</li>
                <li class="alert alert-info m-2 p-1">${getInform[i].strMeasure2}${getInform[i].strIngredient2}</li>
                <li class="alert alert-info m-2 p-1">${getInform[i].strMeasure3}${getInform[i].strIngredient3}</li>
                <li class="alert alert-info m-2 p-1">${getInform[i].strMeasure4}${getInform[i].strIngredient4}</li>
                <li class="alert alert-info m-2 p-1">${getInform[i].strMeasure5}${getInform[i].strIngredient5}</li>
                <li class="alert alert-info m-2 p-1">${getInform[i].strMeasure6}${getInform[i].strIngredient7}</li>
                <li class="alert alert-info m-2 p-1">${getInform[i].strMeasure6}${getInform[i].strIngredient8}</li>
                <li class="alert alert-info m-2 p-1">${getInform[i].strMeasure6}${getInform[i].strIngredient9}</li>
              </ul>
              <h3 class="text-white w-100 text-start">Tags :</h3>
              <ul class="list-unstyled d-flex g-3 flex-wrap">
                <a target="_blank" href="${getInform[i].strSource}" class="btn btn-success me-2">Source</a>
                <a target="_blank" href="${getInform[i].strYoutube}" class="btn btn-danger">Youtube</a>   
              </ul>
       </div>
  
  
       `;
    }

    document.getElementById("rowDate").innerHTML = formsBox;
      
  }