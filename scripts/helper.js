"use strict";
class Helper {
    constructor(time, list = []) {
        this.time = parseInt(400 / time);
        this.list = list;
    }

    mark = async (index) => {
        this.list[index].setAttribute("class", "cell current");
    }

    markSpl = async (index) => {
        this.list[index].setAttribute("class", "cell min");
    }

    unmark = async (index) => {
        this.list[index].setAttribute("class", "cell");
    }
    
    pause = async () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, this.time);
        });
    }

    compare = async (index1, index2) => {
        await this.pause();
        let value1 = Number(this.list[index1].getAttribute("value"));
        let value2 = Number(this.list[index2].getAttribute("value"));
        return value1 > value2;
    }

    swap = async (index1, index2) => {
        await this.pause();

        // swap heights
        let tempHeight = this.list[index1].style.height;
        this.list[index1].style.height = this.list[index2].style.height;
        this.list[index2].style.height = tempHeight;

        // swap values
        let tempValue = this.list[index1].getAttribute("value");
        this.list[index1].setAttribute("value", this.list[index2].getAttribute("value"));
        this.list[index2].setAttribute("value", tempValue);

        // swap inner text (numbers displayed on bars)
        let tempText = this.list[index1].innerText;
        this.list[index1].innerText = this.list[index2].innerText;
        this.list[index2].innerText = tempText;
    }
};
