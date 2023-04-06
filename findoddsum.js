// function getsumofarray(numbars) {
//    // console.log(numbars)
//     let sum = 0;
//     for(let i = 0;i <numbars.length;i ++ ){
//         const index = i;
//        // console.log(index);
//        const element =numbars[index];
//        sum = sum + element;

//        console.log(index ,element, sum);
//     }
//     return sum;
// }
// const mynumbar = [17,15,12,45,50,95,59];
// getsumofarray(mynumbar);



     function getoddnumberonarray(numbars){
       // console.log(mynumbars);
       const oddNumbers =[];
        for (let i = 0; i < numbars.length; i++) {
            const index = i;
            const element = numbars[index];
          //  console.log(index,element);
          if (element %2 !== 0 ) {
            console.log (element)
            oddNumbers.push(element);
          }
            
        }
        return oddNumbers
    }
      const mynumbars = [17,20,12,45,50,95,59];

      const oddNumbers = getoddnumberonarray(mynumbars);
      console.log(oddNumbers);