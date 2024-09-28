import { getFanCodeCityUsers } from "./getUsers.js";
import { getTodos } from "./getTodos.js ";
import { searchBy } from "./constants/Constants.js";

export async function usersTaskCompletedDetails() {
    let usersWithMoreThan50PercentTaskCompletion = [];
    let usersWithLessThan51PercentTaskCompletion = [];
    const users = await getFanCodeCityUsers();
    for(const user of users){
        const todos = await getTodos(searchBy.User, user.id);
        const completedTodos = todos.filter(todo => todo.completed);
        console.log(`User: ${user.id} | TotalTodos: ${todos.length} | CompletedTodos: ${completedTodos.length} |`); // Custom Logger can be implemented for reusability.
        if(((completedTodos.length/todos.length)*100) > 50){
            usersWithMoreThan50PercentTaskCompletion.push(user);
        } else {
            usersWithLessThan51PercentTaskCompletion.push(user);
        }
    }

    console.log("Total FanCode City Users:", users.length); // Custom Logger can be implemented for reusability.
    console.log("Users with More than 50% task completion count:", usersWithMoreThan50PercentTaskCompletion.length); // Custom Logger can be implemented for reusability.
    console.log("Users with Less than or equal to 50% task completion count:", usersWithLessThan51PercentTaskCompletion.length); // Custom Logger can be implemented for reusability.
}