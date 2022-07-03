import { Customer } from "./customer.entity";
import { Food } from "./food.entity";
import { Members } from "./members.entity";
import { Orders } from "./orders.entity";
import { Users } from "./user.entity";

const entities = [Users, Customer, Food, Members,Orders];

export {Users, Customer, Food, Members, Orders};
export default entities;