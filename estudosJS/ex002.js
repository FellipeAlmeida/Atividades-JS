let notas = [5, 2, 9, 1]

notas.reduce((acum, n) => {
    acum += n
    console.log(acum)
}, 0)