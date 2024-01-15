// export interface IProduct {
//     categoryId: number,
//     categoryName: string,
    
//     photoUrl: string[]

// }
export interface IProductBaseReponse{
    message: string,
    result: boolean,
    
    data:IProduct[]
}
export interface IProduct{
    
    
    restaurantID: number,
    price: number,
    categoryName: string,
    description: string,
    restaurantName: string,
    availability: boolean,
    photoUrl: string[],
    openingHours: number,
    categoryId: number

}
export const TOKEN_KEY:string='token'

