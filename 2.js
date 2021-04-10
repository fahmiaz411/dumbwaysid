function blok (tanggal, bulan) {
    let result;
    var data = [];
    for(let i = 1; i <= bulan; i++){
      data.push(tanggal - (tanggal - i))
    }
    console.log(data)
    return result = bulan;
}

console.log(`Zizah bisa memotong coklat sebanyak ${blok(3,2)} potongan!`)
console.log(`Zizah bisa memotong coklat sebanyak ${blok(6,3)} potongan!`)
console.log(`Zizah bisa memotong coklat sebanyak ${blok(10,4)} potongan!`)