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
        console.log("User: %s | TotalTodos: %s | CompletedTodos: %s | ", user.id, todos.length, completedTodos.length);
        if(((completedTodos.length/todos.length)*100) > 50){
            usersWithMoreThan50PercentTaskCompletion.push(user);
        } else {
            usersWithLessThan51PercentTaskCompletion.push(user);
        }
    }

    console.log("Total FanCode City Users:", users.length);
    console.log("Users with More than 50% task completion count:", usersWithMoreThan50PercentTaskCompletion.length);
    console.log("Users with Less than or equal to 50% task completion count:", usersWithLessThan51PercentTaskCompletion.length);
}