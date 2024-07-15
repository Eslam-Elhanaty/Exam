let Contact = [];
$("#Contact").click(function () {
    // $("#sideBar").animate({width: "0px"})


    for (let i = 0; i < 1; i++) {

        Contact = `
    <div class="col-md-6 mt-5 ">
                        <input id="userName" oninput="rgexInput(this)" id="inputLetter" oninput="" class="form-control" type=" text" placeholder="Enter your name">
<div class="alert alert-danger py-2 mt-2 d-none">
    <small>
Special characters and numbers not allowed    </small>
</div>
                    </div>    
                    <div class="col-md-6 mt-5 ">
                        <input id="userEmail" oninput="rgexInput(this)" class="form-control" type="email" placeholder="Enter your email">
<div class="alert alert-danger py-2 mt-2 d-none">
    <small>
        Email not valid *exemple@yyy.zzz
    </small>
</div>
                    </div>    
                    <div class="col-md-6 mt-5 ">
                        <input id="userPhone" oninput="rgexInput(this)" class="form-control" type="number" placeholder="Enter your phone">

<div class="alert alert-danger py-2 mt-2 d-none">
    <small>
Enter valid Phone Number    </small>
</div>
                    </div>    
                    <div class="col-md-6 mt-5 ">
                        <input  id="userAge" oninput="rgexInput(this)" class="form-control" type="number" placeholder="Enter your age">
 <div class="alert alert-danger py-2 mt-2 d-none">
    <small>
Enter valid age
    </small>
</div>
                    </div>    
                    <div class="col-md-6 mt-5 ">
                        <input id="userPassword" oninput="rgexInput(this)" class="form-control" type="password"  placeholder="Enter your password">
<div class="alert alert-danger py-2 mt-2 d-none">
    <small>
Enter valid password *Minimum eight characters, at least one letter and one number:*    </small>
</div>            </div>    
                    <div class="col-md-6 mt-5 "> 
                        <input id="userREPassword" oninput="rgexInput(this)" class="form-control" type="password" placeholder=" Repassword">
<div class="alert alert-danger py-2 mt-2 d-none">
    <small>
Enter valid repassword
    </small>
</div>
                    </div>  
                
          <button class="btn btn-outline-danger  w-25 m-auto mt-4 p-2 ">sumbit</button>
    
    `
        document.getElementById('rowDate').innerHTML = Contact;





    }






}


)


function rgexInput(elemnt) {
    //  console.log(elemnt.id);
    let allREgex = {

        userName: /^[A-Z][a-z][a-z][a-z][a-z]+$/,
        userEmail:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        userPhone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        userAge: /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/,
        userPassword: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        userREPassword: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    }
    if (allREgex[elemnt.id].test(elemnt.value) == true) {
        console.log("true");

        elemnt.classList.add("is-valid")
        elemnt.classList.remove("is-invalid")
        elemnt.nextElementSibling.classList.replace('d-blok','d-none')
        btn.classList.remove('disabled')


        
    } else {
        console.log("folse");
        elemnt.classList.add("is-invalid")
        elemnt.classList.remove("is-valid")
        elemnt.nextElementSibling.classList.replace('d-none','d-blok')

    }
}
