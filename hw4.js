// task 1
let e_string = prompt("Enter string");
let revert_string="";
for(let i = e_string.length - 1;i>= 0; i--) {
    revert_string += e_string[i]
};
alert(revert_string)

// task2
let n1 = parseInt(prompt("Enter first number"))
let n2 = parseInt(prompt("Enter second number"))
let minv = n1>n2 ? n2 : n1;
let maxv = n1>n2 ? n1 : n2;
let arr = [];
let count = 0;


    for (let i = minv; i <= maxv; i++) {
        let prime_flag = true;
        for (let j = 2; j < i; j++) {
            if (i%j == 0) {
                prime_flag = false;
                break;
            }   
        }
        
        if (prime_flag) {
            arr.push(i); 
        }
    }
     console.log(arr)
    alert("the smallest prime number is  " + arr[0] + ",biggest is " + arr[(arr.length)-1]);










