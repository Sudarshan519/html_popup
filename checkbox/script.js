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
            <th>Check AllA<input type="checkbox" value="" id="option-all4" onchange="checkAll(this)"></th>
            <th>Check All B<input type="checkbox" value="" id="option-all5" onchange="checkAll(this)"></th>
            <th>Check All C<input type="checkbox" value="" id="option-all6" onchange="checkAll(this)"></th>
        </tr>
      


    `

    for (let i = 0; i < 20; i++) {
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


var acheckbox = document.getElementById("option-all4")
var bchecbox = document.getElementById("option-all5")
var cCheckbox = document.getElementById("option-all6")

var checkboxes = x.querySelectorAll("input[type='checkbox']");
var optionalist=document.querySelectorAll('[id*="option-a"]');
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