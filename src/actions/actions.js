export const addBananaAction = () => {
    return{
        type:'BANANA',
        operation:'INCREMENT'
    }
}
export const removeBananaAction = () => {
    return{
        type:'BANANA',
        operation:'DECREMENT'      
    }
}
export const addCheeseAction = () => {
    return{
        type:'CHEESE',
        operation:'INCREMENT'
    }
}
export const removeCheeseAction = () => {
    return{
        type:'CHEESE',
        operation:'DECREMENT'     
    }
}
export const addMilkAction = () => {
    return{
        type:'MILK',
        operation:'INCREMENT'
    }
}
export const removeMilkAction = () => {
    return{
        type:'MILK',
        operation:'DECREMENT'
    }
}