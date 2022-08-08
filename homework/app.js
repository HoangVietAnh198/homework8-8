// Bai tap 1

// let products = [
//     {
//         Name: "Sony Xperia XZ Premium",
//         Brand: "Sony",
//         Price: "4428",
//         Color: "White",
//         Category: "Chager"
//     },
//     {
//         Name: "OPPO F3 Plus",
//         Brand: "OPPO",
//         Price: "5487",
//         Color: "Black",
//         Category: "Phone"
//     },
//     {
//         Name: "Iphone 13 Pro Max",
//         Brand: "Apple",
//         Price: "21490",
//         Color: "Gray",
//         Category: "Phone"
//     },
//     {
//         Name: "Samsung Galaxy S8",
//         Brand: "Samsung",
//         Price: "8490",
//         Color: "Blue",
//         Category: "Phone"
//     },
// ]
// // 1.1

// for (i=0;i<products.length;i++){
//     console.log(`#${i} Name : ${products[i].Name}`);
//     console.log(`Price : ${products[i].Price}`);
//     console.log(`------------------------`);
// }
    
// // 1.2

// let inPut = Number(prompt(`Enter product position`));
// for (i=0;i<products.length;i++){
//     if (inPut===i) {
//         console.log(`Name : ${products[i].Name}`);
//         console.log(`Brand : ${products[i].Brand}`);
//         console.log(`Price : ${products[i].Price}`);
//         console.log(`Color : ${products[i].Color}`);
//         console.log(`Category : ${products[i].Category}`);
//     }
// }
// // 1.3
// let Input1 = prompt("input please")
// for (i=0; i<products.length;i++) {
// if (Input1===`${products[i].Category}`) {
//     console.log(`Name: ${products[i].Name}`);
//     console.log(`Brand: ${products[i].Brand}`);
//     console.log(`Price: ${products[i].Price}`);
//     console.log(`Color: ${products[i].Color}`);
//     console.log(`Category: ${products[i].Category}`);
//     console.log(`-------------------------------------`);
// }
// }
// // 1.4
// for (i = 0; i < products.length; i++) {
//     products[i].Providers = prompt(`Providers input please`);
//     // console.log(products[i].Providers);
// }
// console.table(products);

// // 1.5
// let ProvidersInput = prompt("Provides input please")
//     for (i = 0; i < products.length; i++) {
//         if (ProvidersInput == products[i].Providers) {
//             console.log(`Name: ${products[i].Name}`);
//             console.log(`Brand: ${products[i].Brand}`);
//             console.log(`Price: ${products[i].Price}`);
//             console.log(`Color: ${products[i].Color}`);
//             console.log(`Category: ${products[i].Category}`);
//             console.log(`Providers: ${products[i].Providers}`);
//             console.log(`--------------------------------------------`);
//         }
//     }

// Bai tap 2

let learning = [
    {
      id: 1,
      name: "HTML",
      complete: "false",
    },
    {
      id: 2,
      name: "CSS",
      complete: "false",
    },
    {
      id: 3,
      name: "Basic of javascript",
      complete: "false",
    },
    {
      id: 4,
      name: "Node package Manager",
      complete: "false",
    },
    {
      id: 5,
      name: "Git",
      complete: "false",
    },
  ];
// 2.1
// for(i=0;i<learning.length;i++){
//     console.log(`${learning[i].id}. ${learning[i].name}`);
//     console.log(`complete: ${learning[i].complete}`);
// }
// 2.2
let state = true;
while (state) {
    let inPut = prompt(`Chọn tác vụ theo kiểu Create/Complete/Update/Delete/Exit`).toLowerCase();
    if (inPut === "create") {
        let a = { id: 6, name: prompt(`Tạo nhiệm vụ mới`), complete: "false", }
        learning.push(a)

        for (i = 0; i < learning.length; i++) {
            console.log(`${learning[i].id}. ${learning[i].name}`);
            console.log(`complete: ${learning[i].complete}`);
        }
    } else if (inPut === "update") {
        let inPutU = Number(prompt(`Nhập ID muốn thay đổi`))
        let inPut2 = prompt(`tiêu đề bạn muốn thay đổi`)
        for (i = 0; i < learning.length; i++) {
            if (inPutU === (learning[i].id)) {
                learning[i].name = inPut2;
            }
            console.log(`${learning[i].id}. ${learning[i].name}`);
            console.log(`complete: ${learning[i].complete}`);
        }
    } else if (inPut === "complete") {
        let inPutU1 = Number(prompt(`Nhập ID muốn thay đổi`))
        for (i = 0; i < learning.length; i++) {
            if (inPutU1 === (learning[i].id)) {
                learning[i].complete = "true";
            }
            console.log(`${learning[i].id}. ${learning[i].name}`);
            console.log(`complete: ${learning[i].complete}`);
        }
    } else if (inPut === "delete") {
        let inPutU3 = Number(prompt(`Nhập ID muốn thay đổi`))
        for (i = 0; i < learning.length; i++) {
            if (inPutU3 === (learning[i].id)) {
                delete learning[i]
            }
            console.log(`${learning[i].id}. ${learning[i].name}`);
            console.log(`complete: ${learning[i].complete}`);
        }
    } else if (inPut === "exit") {
        state = false;
        break;
    }
}
