let score: number | string = 32
score = 45
score = 23
score = "34"

function getUserId(id: number | string) {

    // id.toUpperCase() 
    if (typeof id === 'string') {
        id.toUpperCase()
    }
    console.log(`id is ${id}`);
}


const data: Array<number | string | boolean> = [1,2,3,4,"5",true,false]




export { }