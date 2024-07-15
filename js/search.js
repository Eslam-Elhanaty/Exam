let searchs=[];
$("#search").click(function(){
    
    console.log("hi");
    for(let i=0;i<1;i++){


        searchs=`
      <div class="container w-100 ">
            <div class="row w-100 m-auto p-5 d-flex text-ce  ">
    
                    <div class="col-md-6 mt-5 " id=']'>
                        <input class="form-control " type=" text" onclick="searchList()" id='inputName' placeholder="Search By Name">

                    </div>    
                    <div class="col-md-6 mt-5 ">
                        <input class="form-control" id='inputLetter' type=" text" placeholder="Search By first letter Name">

                    </div>    
                  
                
            </div>
        </div>
        `
    }
        document.getElementById("rowDate").innerHTML = searchs;
        sideBtn ()
   

})

    

    



