import { Given, When, Then, Before, After } from "@cucumber/cucumber";
import TodoListPage from './../../page/TodoListPage';
import { pageFixture } from "../../hooks/pageFixtures";
import { todo } from "node:test";
import { TIMEOUT } from "dns";
let t:string;
    let todolist:TodoListPage;
    When('the doctor clicks the calendar', async function () {
            todolist=new TodoListPage(pageFixture.page);
            await todolist.clickCalander();
        });
    
    When('clicks the plus icon to add a task', async function () {
            await todolist.ClickaddTask();
         });

    When('fills in the task details',  { timeout: 20000 },async function (dataTable){
        const taskList=dataTable.hashes();
        for (let i = 0; i < taskList.length; i++){
        t=taskList[i].task;
        let d=taskList[i].date;
        if(i!=0){
            await todolist.ClickaddTask();
            await pageFixture.page.waitForTimeout(500);
        }
        await todolist.addTask(t,d);
        // await pageFixture.page.waitForTimeout(500);
        }
        });
    Then('the task should be visible in the To Do List', async function () {
           await todolist.verifyTask(t);
        });

