function Palindrom (input){
    
    if(input < 0) return false //Jika angka yang diinput negatif, maka function tidak dilanjutkan


    let reversed = 0 //reversed sebagai digit sisa yang diambil dari digit terakhir
    let now = input //temporary input

    //process looping while
    while(now > 0){

        let lastDigit = now % 10;
        reversed = (reversed * 10) + lastDigit;
        now = (now / 10) | 0;

    }

    //mengecek kondisi akhir apakah Palindrom atau tidak
    if(reversed === input){

        console.log(`${input} adalah bilangan Palindrom`);
        return true;

    }else{

        console.log(`${input} bukan bilangan Palindrom`);
        return false;

    }
}

//input
Palindrom(16461) //true
Palindrom(1000) //false
Palindrom(1001) //true