import {expect,Page,Locator } from "@playwright/test";
export default class SearchPage{
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    private SearchPageElements={
        searchBar:"//input[@class=\"form-control search-form search-form3\"]",
        searchedName:"//tr[@class=\"odd\"]//td[2]/a",
        errorMsg:"//tr[@class=\"odd\"]//td//div",
        searchBtn:"(//button[@id='search-btn'])[1]",
    }
    async enterPatientName(name:string){
        await this.page.fill(this.SearchPageElements.searchBar,name);
    }
    async clickSearch(){
        await this.page.click(this.SearchPageElements.searchBtn);
    }
    async verifySuccessSearch(expected:string){
        const actual=await this.page.textContent(this.SearchPageElements.searchedName);
        await expect(actual).toContain(expected);
    }
    async verifyFailureSearch(expected:string){
        const actual=await this.page.textContent(this.SearchPageElements.errorMsg);
        await expect(actual).toContain(expected);
    }
}