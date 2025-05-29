// Executa o código de forma sincrona, por isso é impresso imediatamente
console.log(1)

// Microtasks são executadas antes de temporizadores e promisses
queueMicrotask(()=>{
    console.log(2)
})

// Macrotask que aguarda o evento de temporizador ser adicionado
setTimeout(() => {
    console.log(3)
}, 1000);

// Executa o código de forma sincrona, por isso é impresso imediatamente
console.log(4)

// Adiciona uma microtask
Promise.resolve(true).then(() => {
    console.log(5)
})