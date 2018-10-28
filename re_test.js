let str = 'fdfdf111<tembin>333</tembin>222gfgg44444<tembin>5555</tembin>6666'


let aa = str.replace(/<tembin>(.+?)<\/tembin>/g,'$1')

console.log(aa)