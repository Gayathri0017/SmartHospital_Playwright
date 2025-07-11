import {expect,Page,Locator } from "@playwright/test";
import { pageFixture } from './../hooks/pageFixtures';
import test from "node:test";
export default class TodoListPage{
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    private todoListPageElements={
        calander:"//ul[@class='nav navbar-nav headertopmenu']/child::li[4]/a",
        todoList:"//div[@class='media mt5']/div[@class='media-body']/p",
        saveBtn:"//input[@id='addtodo_formbtn']",
        taskName:"(//div[@class='form-group col-md-12']/child::input)[1]",
        date:"(//div[@class='form-group col-md-12']/child::input)[2]",
        addTask:"//div[@class='box-tools pull-right']/button",
        fieldError:"//div[@class='toast-message']/p",
    }
    async clickCalander(){
        await this.page.click(this.todoListPageElements.calander);
    }
    async ClickaddTask(){
        await this.page.click(this.todoListPageElements.addTask);
    } 

    async addTask(task:string,date:string){
        await this.page.fill(this.todoListPageElements.taskName,task);
        await this.page.waitForTimeout(1000);
        await this.page.fill(this.todoListPageElements.date,date);
        // await this.page.waitForTimeout(1000);
        await this.page.click(this.todoListPageElements.saveBtn);
        await this.page.waitForTimeout(1000);
    } 
    
    async verifyTask(name: string) {
    const tasks=await pageFixture.page.locator(this.todoListPageElements.todoList);
    const count=await tasks.count();
    let found=false;
        for (let i=0;i<count;i++) {
            const taskText=await tasks.nth(i).textContent();
            // console.log(taskText);
            if (taskText?.trim()===name){
            expect(taskText.trim()).toBe(name);
            found = true;
            break;
        }
    }
    expect(found).toBe(true);
}
    async verifyError(expected: string){
        let actual=await this.page.textContent(this.todoListPageElements.fieldError);
        await expect(expected).toEqual(actual);
    }
}