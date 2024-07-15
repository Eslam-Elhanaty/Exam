let btn = document.querySelector('.btn')
let rowData = document.getElementById("rowData");




$('.eslam').click(function sideBtn () {
    let sidWidth=$('.option-side ').outerWidth();

    let optionLeft=$('.options').offset().left;
    // console.log(optionLeft);
    // console.log(sidWidth);
    // console.log('hitun');
    if( optionLeft===0){
      
        $('.eslam').addClass('fa-solid fa-right-left')
        $('.eslam').removeClass('fa-solid fa-x')

        $('.options').css({left:`-${sidWidth}px`, transition:'left 2s'})

    }else
    $('.options').css({left :`0px` , transition:'left 2s'})
    $('.eslam').addClass('fa-solid fa-angles-left')

}  )




// })
// get meal data
let allDate = [];

async function getSalad() {

    let response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    let finalDate = await response.json();
    allDate = finalDate.meals
    displayDate()
    //  disPlay()
}
getSalad()

function displayDate() {
    let mainBox = ``;
    for (var i = 0; i < allDate.length; i++) {

        mainBox += `<div onclick="getIndex(${i})" class="col-md-3 col-sm-3 my-3 ">
                <div  class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${allDate[i].strMealThumb}" alt="" srcset="">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                        <h3>${allDate[i].strMeal}</h3>
                    </div>
                </div>
        </div>
        `
    }
    document.getElementById('rowDate').innerHTML = mainBox;
}

// =====================================================================================
function getIndex(index){

    let iDMEal=allDate[index].idMeal;
    // console.log(iDMEal);
    getIdData(iDMEal)
}

let AreaCategorie=[];
async function getIdData(indexData)
{
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${indexData}`)
    let finalDate = await response.json();
    AreaCategorie=finalDate.meals
    disPalyDetales()

}


function disPalyDetales() {
    let dataBox = [];
    for (let i = 0; i < AreaCategorie.length; i++) {
      dataBox += `
       <div class="col-lg-4 col-md-6 col-sm-8 mt-1 p-3">
              <img class="w-100 border-1 rounded-3" src="${AreaCategorie[i].strMealThumb}" alt="" />
              <h4 class="text-white">${AreaCategorie[i].strMeal}</h4>
      </div>
      <div class="col-lg-8 mt-1  p-3">
              <h3 class="text-white left-0 text-start">Instructions</h3>
              <p class="p-diplay text-white"> 
              ${AreaCategorie[i].strInstructions}
              </p>
              <h3 class="fw-bolder text-white text-start  ">Area : <span>${AreaCategorie[i].strArea}</span></h3>
              <h3 class="fw-bolder text-white text-start">Category : <span>${AreaCategorie[i].strCategory}</span></h3>
              <h3 class="fw-bolder text-white text-start">Recipes :</h3>
              <ul class="list-unstyled d-flex g-3 flex-wrap">
                <li class="alert alert-info m-2 p-1">${AreaCategorie[i].strMeasure1}${AreaCategorie[i].strIngredient1}</li>
                <li class="alert alert-info m-2 p-1">${AreaCategorie[i].strMeasure2}${AreaCategorie[i].strIngredient2}</li>
                <li class="alert alert-info m-2 p-1">${AreaCategorie[i].strMeasure3}${AreaCategorie[i].strIngredient3}</li>
                <li class="alert alert-info m-2 p-1">${AreaCategorie[i].strMeasure4}${AreaCategorie[i].strIngredient4}</li>
                <li class="alert alert-info m-2 p-1">${AreaCategorie[i].strMeasure5}${AreaCategorie[i].strIngredient5}</li>
                <li class="alert alert-info m-2 p-1">${AreaCategorie[i].strMeasure6}${AreaCategorie[i].strIngredient7}</li>
                <li class="alert alert-info m-2 p-1">${AreaCategorie[i].strMeasure6}${AreaCategorie[i].strIngredient8}</li>
                <li class="alert alert-info m-2 p-1">${AreaCategorie[i].strMeasure6}${AreaCategorie[i].strIngredient9}</li>
              </ul>
              <h3 class="text-white w-100 text-start">Tags :</h3>
              <ul class="list-unstyled d-flex g-3 flex-wrap">
                <a target="_blank" href="${AreaCategorie[i].strSource}" class="btn btn-success me-2">Source</a>
                <a target="_blank" href="${AreaCategorie[i].strYoutube}" class="btn btn-danger">Youtube</a>   
              </ul>
       </div>
  
  
       `;
    }

    document.getElementById("rowDate").innerHTML = dataBox;
      
  }




  
  // =============================================================================

  
  
      
  
  
  
  





  let search = document.getElementById("search");
  search.addEventListener("click", function () {
    
    let dataContainer = ``;
    for (let i = 0; i < 1; i++) {
      dataContainer += `
    <div class="col-md-6 ">
    
     <input  id="inputName" type="text" placeholder="Search By Name" class="  form-control w-100    m-3 ">
  
    </div>
    <div class="col-md-6  ">
    
              <input id="inputLetter" maxlength="1" type="text" placeholder="search By First Letter" class=" form-control w-100   m-3 form-control">
  
    </div>
    <div  id="Searchcontinar" class=" col-md-12 row text-center gy-4 ms-2 mt-2 w-100 h-100  ">
    
              <div
              class="w-100  d-flex justify-content-center align-items-center mt-5"
            >
              <span class="loader"></span>
            
            </div>
  
    </div>
    
    `;
    }
  
    document.getElementById("rowDate").innerHTML = dataContainer;
    let inputLetter = document.getElementById("inputLetter");
    let inputName = document.getElementById("inputName");
  
   
  
    console.log(inputName);
  
    inputName.addEventListener("input", function () {
      
      let term = inputName.value;
      let dataBox=``;
  
      for (let i = 0; i < allDate.length; i++) {
        if (allDate[i].strMeal.toLowerCase().includes(term.toLowerCase()) ==true) {
          dataBox += `
          <div onclick="getIndxHome(${i})" class="col-md-3  meal data-box position-relative overflow-hidden">
                    <img class="w-100  border-1 rounded-3 " src="${allDate[i].strMealThumb}" alt="img_meals">
                    <div class="col-sm-3 meal-layer w-100  text-center position-absolute top-0">
                    <h2 class="mt-5 text-black">${allDate[i].strMeal}</h2>
                    </div>
                    </div>
         `;      
        
        }else{
          dataBox=``;
        }
      }
      console.log(dataBox);
      document.getElementById("Searchcontinar").innerHTML = dataBox;
  
  
    });
    inputLetter.addEventListener("input", function () {
      let term = inputLetter.value;
      let dataBox=``;
  
      for (let i = 0; i < allDate.length; i++) {
        if (allDate[i].strMeal.toLowerCase().includes(term.toLowerCase()) ==true) {
          dataBox += `
        <div onclick="getIndxHome(${i})" class="col-md-3  meal data-box position-relative overflow-hidden">
                    <img class="w-100  border-1 rounded-3 " src="${allDate[i].strMealThumb}" alt="img_meals">
                    <div class="col-sm-3 meal-layer w-100  text-center position-absolute top-0">
                    <h2 class="mt-5 text-black">${allDate[i].strMeal}</h2>
                    </div>
                    </div>
         `;      
        
        }else{
          dataBox=``;
        }
      }
  
      document.getElementById("Searchcontinar").innerHTML = dataBox;
  
    });
   
  });




