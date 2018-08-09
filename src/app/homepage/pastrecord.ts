export class pastorder{
    constructor(
        public billdetail_id:number,
        public fk_bill_id:number,
        public fk_dish_id:number,
        public price:number,
        public qty:number,
        public dish_id:number,
        public dish_name:string,
        public dish_price:number,
        public dish_img:string,
        public fk_cusine_id:number
    ){}
}