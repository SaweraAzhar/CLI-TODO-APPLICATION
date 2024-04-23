#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let conditions = true;
console.log(chalk.blueBright.bold("\n \t Welcome to 'CodeWithSawera' - TODO-LIST Application\n"));
// while(conditions){
//     let addTask = await inquirer.prompt([
//         {
//              name: "task",
//              type: "input",
//              message: chalk.green ("Enter Your New Task :")
//         }
//     ]);
//     todolist.push(addTask.task);
//     console.log(`${addTask.task} Task Added in Todo-List Successfully`);
//     let addMoreTask = await inquirer.prompt([
//         {
//             name: "addmore",
//             type: "confirm",
//             message: "Do you want to Add more Task ?",
//             default: "False"
//         }
//     ]);
//     conditions = addMoreTask.addmore
// }
// console.log("Your updated Todo-List :" , todolist);
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select a Message you want to do:",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
// Function to add new task to the list
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your New Task: "
        }
    ]);
    todolist.push(newTask.task);
    console.log(`\n${newTask.task} Task added in Todo-List Successfully`);
};
// Function to view todo-list
let viewTask = () => {
    console.log("\n Your Todo-List : \n");
    todolist.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
// Function to Delete tesk from the list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "Index",
            type: "number",
            message: "Enter the 'Index no.' of the task you want to delete :",
        }
    ]);
    let deletedTask = todolist.splice(taskIndex.Index - 1, 1);
    console.log(`\n ${deletedTask} This task has been deleted successfully from your Todo-List\n`);
};
// Function to Update a task
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'Index no.' of the Task you want to Update :"
        },
        {
            name: "NewTask",
            type: "input",
            message: "Enter your New Task :"
        }
    ]);
    todolist[update_task_index.index - 1] = update_task_index.NewTask;
    console.log(`\n Task at Index no. ${update_task_index.index - 1} updated successfully [for Updated list check option: "View Todo-List"] `);
};
main();
