export const addBananaAction = () => {
    return{
        type:'BANANA_ICNREMENT',
        payload: 5
    }
}
export const removeBananaAction = () => {
    return{
        type:'BANANA_DECREMENT',
        payload: -5     
    }
}
export const addCheeseAction = () => {
    return{
        type:'CHEESE_INCREMENT',
        payload:20
    }
}
export const removeCheeseAction = () => {
    return{
        type:'CHEESE_DECREMENT',
        payload: -20     
    }
}
export const addMilkAction = () => {
    return{
        type:'MILK_INCREMENT',
        payload: 10
    }
}
export const removeMilkAction = () => {
    return{
        type:'MILK_DECREMENT',
        payload: -10
    }
}