var x = document.getElementById("container");

var checkboxes = x.querySelectorAll("input[type='checkbox']");
var selectall = document.getElementById("option-all")




console.log(checkboxes);
var allchecked = false
var isjs = false

function checkAll(myCheckbox) {
    if (myCheckbox.checked == true) {
        isjs = true
        checkboxes.forEach(function (checkbox) {
            // console.log(checkbox)
            checkbox.checked = true;
        })


    } else {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        })
    }
    isjs = false
}

var table = document.querySelectorAll('table')

console.log(table[0].innerHTML);
var table = document.getElementById("myTable");
function myCreateFunction() {
    var table = document.getElementById("myTable");
    var body = `
        <tr>
            <th>Check AllA<input type="checkbox" value="" id="option-ll4" onchange="checkAll(this)"></th>
            <th>Check All B<input type="checkbox" value="" id="option-ll5" onchange="checkAll(this)"></th>
            <th>Check All C<input type="checkbox" value="" id="option-ll6" onchange="checkAll(this)"></th>
        </tr>
      


    `

    for (let i = 0; i < 5; i++) {
        body += ` <tr>
        <td>   <input type="checkbox" id="option-a${i}">
        <label for="option-a${i}">${i}</label></td>
        <td>   <input type="checkbox" id="option-b${i}">
        <label for="option-b${i}">${i}</label></td>
        <td>   <input type="checkbox" id="option-c${i}">
        <label for="option-c${i}">${i}</label></td>
    </tr> `
    }


    table.innerHTML = body

    // var row = table.insertRow(-1);
    // var cell1 = row.insertCell(-1);
    // var cell2 = row.insertCell(-1);
    // cell1.html = " <tr>  < td > Centro comercial Moctezuma</td ></tr>";
    // cell2.html = " <tr>  < td > Centro comercial Moctezuma</td ></tr>";
}
myCreateFunction()

var acheckbox = document.getElementById("option-ll4")
var bchecbox = document.getElementById("option-ll5")
var cCheckbox = document.getElementById("option-ll6")

var checkboxes = x.querySelectorAll("input[type='checkbox']");
var optionalist = document.querySelectorAll('[id*="option-a"]');
var optionblist = document.querySelectorAll('[id*="option-b"]');
var optionclist = document.querySelectorAll('[id*="option-c"]');
var allAchecked = true;


acheckbox.addEventListener('change', (event) => {
    console.log(acheckbox.checked)
    optionalist.forEach(function (checkbox) {
        checkbox.checked = acheckbox.checked
    })
})


bchecbox.addEventListener('change', (event) => {
    console.log(bchecbox.checked)
    optionblist.forEach(function (checkbox) {
        checkbox.checked = bchecbox.checked
    })
})

cCheckbox.addEventListener('change', (event) => {
    console.log(cCheckbox.checked)
    optionclist.forEach(function (checkbox) {
        checkbox.checked = cCheckbox.checked
    })
})

optionclist.forEach(function (checkbox) {

    checkbox.addEventListener('change', (event) => {
        var hasFalse = false
        allchecked = true
        optionclist.forEach(function (checkbox) {
            if (checkbox.checked == false) {
                hasFalse = true
                console.log("has false")
            } else {
                allAchecked = true
            }
        })
        if (hasFalse == true) {
            cCheckbox.checked = false
        }
        else {
            console.log("all checked")
            cCheckbox.checked = true
        }
    })
})




optionblist.forEach(function (checkbox) {

    checkbox.addEventListener('change', (event) => {
        var hasFalse = false
        allchecked = true
        optionblist.forEach(function (checkbox) {
            if (checkbox.checked == false) {
                hasFalse = true
                console.log("has false")
            } else {
                allAchecked = true
            }
        })
        if (hasFalse == true) {
            bchecbox.checked = false
        }
        else {
            console.log("all checked")
            bchecbox.checked = true
        }
    })
})



optionalist.forEach(function (checkbox) {

    checkbox.addEventListener('change', (event) => {
        var hasFalse = false
        allchecked = true
        optionalist.forEach(function (checkbox) {
            if (checkbox.checked == false) {
                hasFalse = true
                console.log("has false")
            } else {
                allAchecked = true
            }
        })
        if (hasFalse == true) {
            acheckbox.checked = false
        }
        else {
            console.log("all checked")
            acheckbox.checked = true
        }
    })
})
// checkboxes.forEach(function (e) {
//     e.addEventListener('change', (event) => {
//         if (event.currentTarget.checked) {
//             console.log(isjs)
//             // if (isjs)
//             checkboxes.forEach(function (checkbox) {
//                 if (checkbox.id != "option-all") {
//                     console.log(checkbox.checked);
//                     allchecked = checkbox.checked
//                 } else {
//                     allchecked = checkbox.checked
//                 }

//             })


//             // alert('checked');
//         } else {
//             allchecked = false
//             // console.log(e.id);
//             // alert('not checked');
//         }
//         if (allchecked) {
//             selectall.checked = allchecked
//         } else {
//             selectall.checked = false
//         }
//     }
//     )
// })