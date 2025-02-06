/**
 input = array
 output = array 

 yang diminta :
    1. ditambah 1 dibagian paling belakang
    2. output pada setiap index tidak boleh lebih dari 2 digit

apa yang harus dilakukan
    1. index terakhir ditambah 1
    2. dilakukan pengecekan apkah nilainya lebih dari 9
    3. kalau lebih dari sembilan, indeks 
        sebelumnya ditambah 1 
        indeks yang sekarang dikurang 10
        lalu diceklagi untuk indeks sebelumnya
 
 
 */

    let input = [9,9,9,9]
    ,1,1,1,1
    // let input2 = [4,4,2,1]

    var plusOne = function(digits) {
        //deklarasi ouput
        let output = digits
        //indeks terakhir ditambah 1
        output[output.length-1]=output[output.length-1]+1

        console.log(output);
        
        //mengecek apakah lebih dari 9
        for (let i = output.length-1 ; i >= 0; i--) {
            //apakah lebih dari 9 ?
            if(output[i]>9 && i==0)
            {
                output[i]-=10
                output.splice(0, 0, 1);

            }
            else if (output[i]>9)
            {
                output[i]-=10
                output[i-1]+=1
            }
            else
            {
                break
            }
            
        }

        return output
    }

    console.log(plusOne(input));
    console.log(plusOne(input2));
    