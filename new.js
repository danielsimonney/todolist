

document.addEventListener("DOMContentLoaded", function () {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var requete = JSON.parse(xhr.responseText)
            var grr = requete.records[0].fields.numbikesavailable
            console.log(requete)
            document.getElementById("ajax").addEventListener("click", function () {
            swal("nombre de velibs disponibles " + grr + "");
            })
        }
    };

    xhr.open("GET", "https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=station_id%3D37791&rows=1", true);
    xhr.send(null);
    document.getElementById("monspan").addEventListener("click", function () {
        newElement()
    });
})
var i = -1

function newElement() {


    i = i + 1
    var containSuppressName = document.querySelector('#buttonContain')
    var name = document.querySelector("#nameinput").value
    var todo = document.querySelector("#todoinput").value
    var date = document.querySelector("#dateinput").value
    if (name && todo && date) {
        var newline = document.createElement('tr')
        var namecontain = document.createElement('td')
        var datecontain = document.createElement('td')
        var todocontain = document.createElement('td')
        datecontain.innerHTML = date
        namecontain.innerHTML = name
        todocontain.innerHTML = todo
        table.appendChild(newline)
        newline.appendChild(datecontain)
        newline.appendChild(namecontain)
        newline.appendChild(todocontain)
        namecontain.classList.add('casen')
        datecontain.classList.add('cased')
        todocontain.classList.add('caset')
        newline.classList.add("rg")
        var tailleIncrement = (document.querySelectorAll(".rg"))
        var button = document.createElement('button')
        var colorcasen = (document.querySelectorAll(".casen"))
        var colorcased = (document.querySelectorAll(".cased"))
        var colorcaset = (document.querySelectorAll(".caset"))
        button.innerHTML = "X"
        button.style.background = 'red'
        newline.appendChild(button)
        var button2 = document.createElement('button')
        button2.innerHTML = "V"


        button2.style.background = 'green'
        newline.appendChild(button2)
        newline.setAttribute('name', 'test' + i)
        button.setAttribute('name', 'test' + i)
        button2.setAttribute('name', 'test' + i)
        
        button.addEventListener('click', function () {
            var test2=false
            for (var h = 0; h < tailleIncrement.length; h++) {
               

                testtable = ((tailleIncrement[h]).getAttribute("name"))
                testbouton = button.getAttribute("name")

                if (testtable == testbouton) {
                    
                   var save =colorcasen[h].innerHTML
                   

                    tailleIncrement[h].remove()
                    
                    tailleIncrement = (document.querySelectorAll(".rg"))
                     colorcasen = (document.querySelectorAll(".casen"))

                   for (var j = 0; j < tailleIncrement.length; j++) {
                       if(save==colorcasen[j].innerHTML){
                           alert("test2 est true")
                       test2=true}
                       
                    }
                    if (test2==false){
                        for(var b = 0; b < (document.querySelectorAll(".button3")).length; b++){
                            var substr=((document.querySelectorAll(".button3"))[b].innerHTML).substr(9)
                            if(substr==save){
                                (document.querySelectorAll(".button3"))[b].remove()
                            }
                            
                        }
                    }



                }
            }
        })
        button2.addEventListener('click', function () {
            for (var h = 0; h < tailleIncrement.length; h++) {

                testtable = ((tailleIncrement[h]).getAttribute("name"))
                testbouton = button2.getAttribute("name")
                console.log(testtable)
                console.log(testbouton)
                if (testtable == testbouton) {
                    (colorcasen[h]).style.backgroundColor = "green";
                    (colorcased[h]).style.backgroundColor = "green";
                    (colorcaset[h]).style.backgroundColor = "green";
                }



            }
        })



        function createNameSuppress() {
            var button3 = document.createElement('button')
            button3.classList.add('button3')
            button3.setAttribute("name", namecontain.innerHTML)
            button3.innerHTML = 'suppress' + ' ' + namecontain.innerHTML
            button3.style.background = 'pink'
            containSuppressName.appendChild(button3)
            button3.addEventListener('click', function () {

                tailleIncrement = (document.querySelectorAll(".rg"))
                colorcasen = (document.querySelectorAll(".casen"))

                for (var a = 0; a < tailleIncrement.length; a++) {
                    console.log(colorcasen[a].innerHTML)
                    console.log(namecontain.innerHTML)

                    if (colorcasen[a].innerHTML == namecontain.innerHTML) {

                        tailleIncrement[a].remove()

                    }

                }
                button3.remove()
            })
        }


        var test = true
        for (var p = 0; p < colorcasen.length; p++) {
            if (p >= 1) {
                // console.log(ciblename[p-1].innerHTML)



                if (namecontain.innerHTML == colorcasen[p - 1].innerHTML) {
                    test = false
                }
            }
        }
        //  console.log(test)
        if (test == true) {
            createNameSuppress()
        }


         document.querySelector("#nameinput").value="";
         document.querySelector("#todoinput").value="";
         document.querySelector("#dateinput").value="";

    } else {
        alert("tas pas tout rempli bip bip !!!")
    }


localStorage.setItem(document.getElementById("table"))



}