// pattern

/**
 for(){
    for()
        {
    }
 } 

 * * * * *
 * * * * *
 * * * * *
 * * * * *
 * * * * *
 */

//  for(let i = 1;i<= 5;i++){
//     let data = "";
//     for(let j=1;j<=5;j++){
//         data += i + " ";
//     }
//     console.log(data);
//  }

 /**
  i = 1     i<=5    j=1   j<=5              j++     i++
  1         1<=5    1     1<=5 1 1 1 1 1    2
                          2<=5              3
                          3<=5              4
                          4<=5              5
                          5<=5              6
                          6<=5                      2
            2<=5
  */

            /**
                1
                2 2
                3 3 3
                4 4 4 4
                5 5 5 5 5
             */
            // for(let i = 1;i<= 5;i++){
            //     for(let j=1;j<=i;j++){
            //         console.log(i);
            //     }
            //  }
            // for(let i = 1;i<= 5;i++){
            //     let data = "";
            //     for(let j=1;j<=i;j++){
            //         data += i + " ";        ""
            //     }
            //     console.log(data);
            //  }

// labled statement

// outerLoop:{
//     statments
// }


let a = 1;
hello: while(a<=10){
    inner:
    if(a==5){
        break;
    }
    console.log("Hello ", a);
    a++;
}

console.log("outside block")