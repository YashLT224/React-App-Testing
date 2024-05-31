import sum from './sum'

//Normal function testing
test('function testing',()=>{
    let a=10;
     let b=20;
     let output=30;
    expect(sum(a,b)).toBe(output)
})

 