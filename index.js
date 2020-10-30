const hen ={
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount += 1;
        return "EGG"
    } 
}
console.log(hen.name, hen.eggCount, hen.layAnEgg())