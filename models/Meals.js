
class Meals {

    constructor(
         id,
         categoryId,
         title,
         affordAblility,
         compelexity , 
         imgUrl, 
         duration,
         ingredients, 
         steps, 
         isGultenFree, 
         isVegan, 
         isVegetartian, 
         isLactosFree) {
            this.id = id ;
            this.categoryId = categoryId ;
            this.title = title ;
            this.affordAblility = affordAblility ;
            this.imgUrl = imgUrl ;
            this.duration = duration ;
            this.ingredients = ingredients ;
            this.steps = steps ;
            this.isGultenFree = isGultenFree ;
            this.isVegan = isVegan ;
            this.isVegetartian = isVegetartian ;
            this.isLactosFree = isLactosFree ;
            this.compelexity = compelexity
    }
}

export default Meals;