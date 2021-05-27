// document.addEventListener("DOMContentLoaded", (function () {
//     let singButton = document.getElementsByClassName("singButton")[0];
//     //singButton.style.backgroundColor = "purple"
//     singButton.addEventListener("click", function () {

//         let singBox = document.createElement("div");
//         singBox.id = "sing-box";
//         // singBox.style.display = "flex";
//         // singBox.style.flexWrap = "wrap";

//         document.body.appendChild(singBox);

//         let friends = ["Daze", "Rico", "Kayla", "Javi", "JC"];
//         for (let i = 0; i < friends.length; i++) {
//             console.log(friends[i] + ":");
//             for (let j = 99; j < 100; j--) {
//                 if (j === 2) {
//                     console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out clears it all out, " + (j - 1) + " line of code in the file!");
//                 } else if (j === 1) {
//                     console.log(j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file!");
//                     break;
//                 } else {
//                     console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file!");
//                 }
//             }
//         }
//     });


//     //document.body.appendChild(squareContainer);

// }));

/*********************************************************************************************/

// document.addEventListener("DOMContentLoaded", function () {

//     let singButton = document.createElement("singButton");
//     let singBtnText = document.createTextNode("Sing!");
//     let container = document.createElement("div");
//     singButton.appendChild(singBtnText);
//     singButton.style.backgroundColor = "plum";
//     singButton.style.color = "purple";
//     singButton.style.fontStyle = "cursive";
//     document.body.appendChild(singButton);
//     document.body.appendChild(container);


//     let id = '1';
//     singButton.addEventListener('click', function(){
//         let div = document.createElement("div");
//         container.appendChild(div);
//         div.style.backgroundColor = "plum";
//         div.style.width = "150px";
//         div.style.height = "150px";
//         div.style.cssFloat = "left";
//         div.style.color = "purple";
//         div.style.fontSize = "30px";
//         div.style.textAlign = "center";
//         div.style.margin = "1em"
//         div.className = "friend";
//         div.setAttribute("id", id);
//         id++;

//         //document.body.appendChild(singBox);

//         let friends = ["Daze", "Rico", "Kayla", "Javi", "JC"];
//         for (let i = 0; i < friends.length; i++) {
//             console.log(friends[i] + ":");
//             for (let j = 99; j < 100; j--) {
//                 if (j === 2) {
//                     console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out clears it all out, " + (j - 1) + " line of code in the file!");
//                 } else if (j === 1) {
//                     console.log(j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file!");
//                     break;
//                 } else {
//                     console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file!");
//                 }
//             }
//         }
//     });


//     //document.body.appendChild(squareContainer);

// });

/******************************************************************************/

document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement("button");
    let btnText = document.createTextNode("Sing!");
    button.className = "singButton";

    button.appendChild(btnText);
    document.body.appendChild(button);
    button.addEventListener("click", function () {
        singSong(friends);
    });
});

let friends = ["Daze", "Rico", "Kayla", "Javi", "JC"];

function singSong(friends) {
    for (let f = 0; f < friends.length; f++) {
        let singDiv = document.createElement("div");
        singDiv.className = "friend";


        let friendHeading = document.createElement("h3");
        singDiv.appendChild(friendHeading);

        document.body.appendChild(singDiv);
        friendHeading.appendChild(document.createTextNode(friends[f] + ": "));

        for (let counter = 99; counter > 0; counter--) {
            let line = counter;

            if (counter === 1) {
                let paragraph = document.createElement("p");
                let paragraphText = document.createTextNode(line + " line of code in the file, " + line + " line of code; " + friends[f] + " strikes one out, clears it all out, no more lines of code in the file!");
                paragraph.appendChild(paragraphText);
                singDiv.appendChild(paragraph);
            } else if (counter === 2) {
                let paragraph = document.createElement("p");
                let paragraphText = document.createTextNode(line + " lines of code in the file, " + line + " lines of code; " + friends[f] + " strikes one out clears it all out, " + (line - 1) + " line of code in the file!");
                paragraph.appendChild(paragraphText);
                singDiv.appendChild(paragraph);
            } else {
                let paragraph = document.createElement("p");
                let paragraphText = document.createTextNode(line + " lines of code in the file, " + line + " lines of code; " + friends[f] + " strikes one out, clears it all out, " + (line - 1) + " lines of code in the file!");
                paragraph.appendChild(paragraphText);
                singDiv.appendChild(paragraph);
            }
        }
    }
};