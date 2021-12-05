import { BaseLogger, ElasticLogger } from "../crossCutingConcerns/logger.js";
import { users } from "../data/users.js";
import Customer from "../models/customer.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("User component yüklendi.")

let logger1 = new ElasticLogger()
let userService = new UserService(logger1)

let user1 = new User(1, "Rıdvan", "Bozkır", "Ankara")
let user2 = new User(2, "Engin", "Demiroğ", "Ankara")

userService.add(user1)
userService.add(user2)

// console.log(userService.list())
// console.log(userService.getById(2))

console.log("----------------------------")

userService.load()

let customerToAdd = new Customer(5, "Mehmet", "Samet", "Kıbrıs", "adasdsad121212")
customerToAdd.type = "customer"


userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())
