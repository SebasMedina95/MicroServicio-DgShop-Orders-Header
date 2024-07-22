import { OrderStatus } from "@prisma/client";

export interface IOrders {
    id?: number,
    factureCode?: string,
    totalAmount?: number,
    totalItems?: number,
    status?: OrderStatus,
    paid?: boolean,
    paidAt?: Date,
    description?: string,
    createAt?: Date,
    updateAt?: Date,
}
