import {ManageData} from './ManageData';
'use strict';
export class SearchButton {
    constructor(){
        this.btn = document.querySelector('.sn001_container1_searchbutton'),
        this.question = document.querySelector('.sn001_container1_searchfield'),
        this.counter = 0;
        this.dataSet=null
    }
    sendRequestForData(string){
        let sendRequest = new ManageData(string, this.counter);
        let its = this;
        sendRequest.sendTheRequest();
        this.counter = this.counter < 2 ? this.counter+1 : 0;
    }
    validate(string){
        if (string.trim()) {
            this.sendRequestForData(string.trim());
        }else{
            alert('Fill the field');
        }
    }
    start(){
        let context = this;
        this.btn.addEventListener('click', function(){
            context.validate(context.question.value);
        });
    }
}










/*
export class BtnSearcher {
    constructor() {
        this.j = 0;
    }
    onClick(str, j) {
        let starter = new SearchPanel(str);
        starter.modifyAllThings(j);
    }
    listenForIt() {
        let its = this;
        let button = document.querySelector('.sn001_container1_searchbutton');
        button.addEventListener('click', function () {
            let searchfield = document.querySelector('input').value;
            its.onClick(searchfield, this.j);
            this.j = this.j + 1;
            this.j = this.j < 3 ? this.j : 0;
            console.log(this.j)
            document.querySelector('.sn001_container2').classList.add('itsClicked');
        })
    }
}
export class SearchPanel {
    constructor(string) {
        this.string = string;
    }
    modifyAllThings(j) {
        for (let i = 0; i < 4; i++) {
            let datas = new GetData(i, j);
            datas.dataSet(this.string);
        }
    }
}
export class GetData {
    constructor(i,j){
        this.iter=i,
        this.counter=j
    }
    consoleData(pictureURL, name, post, tags, date, string) {
        let photoSet = new SetPhoto('.imag', this.iter);
        photoSet.setAvatar(pictureURL);
        let newUser = new SetNameSurname('.sn001_container2_post_intro_head_author', this.iter);
        newUser.setNameSurname(name);
        let newPost = new SetPost('p', this.iter);
        newPost.setPost(post, string);
        let newDate = new SetDate('.sn001_container2_post_intro_head_date', this.iter);
        newDate.setDate(date);
        let newTags = new SetTags('.sn001_container2_post_intro_head_tags', this.iter)
        newTags.setTags(tags);
    }
    dataSet(string) {
        var its = this;
        axios.get('https://api.myjson.com/bins/xr9bw')
            .then(function (response) {
                let lotOfData = response.data;
                let pictureURL = lotOfData[its.iter+its.counter]['picture'];
                let name = lotOfData[its.iter+its.counter]['name'];
                let post = lotOfData[its.iter+its.counter]['about'];
                let tags = lotOfData[its.iter+its.counter]['tags'];
                let date = lotOfData[its.iter+its.counter]['registered'];
                its.consoleData(pictureURL, name, post, tags, date, string);
            })
            .catch(function (error) {
                return 'something went wrong...';
            });
    }
}

export class SetPhoto {
    constructor(element, i) {
        this.iter = i,
            this.element = document.querySelectorAll(element)[i]
    }
    setAvatar(url) {
        url = "background-image: url(\'" + url + "\')";
        this.element.setAttribute('style', url);
    }
}
export class SetNameSurname {
    constructor(element, i) {
        this.iter = i,
            this.element = document.querySelectorAll(element)[i];
    }
    setNameSurname(nameSurname) {
        this.element.innerText = nameSurname;
    }
}
export class SetPost {
    constructor(element, i) {
        this.iter = i,
            this.element = document.querySelectorAll(element)[i];
    }
    setPost(post, string) {
        this.element.innerText = post.substr(0, post.length - string.length) + string + post.substr(post.length - string.length, string.length);
    }
}
export class SetDate {
    constructor(element, i) {
        this.iter = i,
            this.element = document.querySelectorAll(element)[i];
    }
    setDate(date) {
        this.element.innerText = date;
    }
}
export class SetTags {
    constructor(element, i) {
        this.iter = i,
            this.element = document.querySelectorAll(element)[i];
    }
    setTags(tags) {
        for (let j = 0; j < 3; j++) {
            this.element.querySelectorAll('div')[j].innerText = '#' + tags[j];
        }
    }
}*/