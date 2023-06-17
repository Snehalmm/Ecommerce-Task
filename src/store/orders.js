import { create } from 'zustand';

export const useOrdersStore = create((set, get) => ({
    orders: [],
    cartDetails:{},

    setOrders: (payload) => {
        const currentState = get();
        let exOrders=[...currentState.orders]
        let findExsiting=currentState.orders.find((item)=> item.id=== payload.id)
        if(findExsiting && Object.keys(findExsiting)?.length>0){
            exOrders.map((item) => {
            if(item?.id===findExsiting?.id){
                item["qty"]= item.qty+1
                item["totalPrice"]= (item.qty * Number(item.price))
            }
            
            })
            exOrders=[...exOrders]
        }else{
            exOrders=[...currentState.orders, payload]
        }
        let obj={}
        // Variable to store the sum
        let totalPrice = 0;

        // Iterate over the array and sum up the prices
        for (let i = 0; i < exOrders.length; i++) {
        totalPrice += exOrders[i]?.totalPrice? Number(exOrders[i]?.totalPrice): Number(exOrders[i]?.price);
        }
        
        let sgst = totalPrice * 0.09;
        let cgst = totalPrice * 0.09;
        let igst = totalPrice * 0.09;
        let taxAmount = 1000;

        let grantTotal = totalPrice + sgst + cgst + igst + taxAmount;
        obj["itemsPrice"] =totalPrice
        obj["sgst"] = sgst;
        obj["cgst"] = cgst;
        obj["igst"] = igst;
        obj["taxAmount"] = taxAmount;
        obj["grantTotal"] = grantTotal;

        set((state) => ({
            orders: exOrders,
            cartDetails: obj
        }));
    },
    deleteOrders: (payload) => {
        set((state) => ({
            orders: [...payload],
        }));
    },
    clearCart: (payload) => {
        set((state) => ({
            orders: [],
            cartDetails: {},
        }));
    }

}));
