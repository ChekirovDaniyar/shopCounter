export const addBananaAction = () => {
    return{
        type:{
            name:'BANANA',
            operation:'INCREMENT'
        }
    }
}
export const removeBananaAction = () => {
    return{
        type:{
            name:'BANANA',
            operation:'DECREMENT'
        }
    }
}
export const addCheeseAction = () => {
    return{
        data:{
            name:'CHEESE',
            operation:'INCREMENT'
        }
    }
}
export const removeCheeseAction = () => {
    return{
        data:{
            name:'CHEESE',
            operation:'DECREMENT'
        }
    }
}
export const addMilkAction = () => {
    return{
        data:{
            name:'MILK',
            operation:'INCREMENT'
        }
    }
}
export const removeMilkAction = () => {
    return{
        data:{
            name:'MILK',
            operation:'DECREMENT'
        }
    }
}