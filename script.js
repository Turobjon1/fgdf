let ismlar = [ 'Nodir', 'Nozim',  'Nodira'  ];

let ismlar2 = [ 'Asad', 'Odilbek', 'Farrux' ];


let natija = []


for (const ism of ismlar) {
    if (ism.includes('N')) {
        natija.push(ism)
    }
    
    
}
alert(ismlar2 + 'da N harfi yoq'  )

alert( ' N harfida ' +  natija  + ' ishlatilgan ' )