export class billdetail_class{
    constructor(
    public fk_bill_id:number,
    public fk_dish_id:number,
    public price:number,
    public qty:number,
    public billdetail_id?:number
    ){

    }
}