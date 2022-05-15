// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050. 

const sunday =()=>{
    for (let i = 2014; i <= 2050; i++) {
        let date = new Date(i, 0, 1);
        if (date.getDay() === 0) {
           alert(`1st January ${i} is a Sunday`);
        }
     }    
}

sunday();
