class Tab {
    constructor(id) {
            this.id = document.querySelector(id);
            this.lis = document.querySelectorAll('li');
            this.sections = document.querySelectorAll('section')
            this.init();
        }
        // 切换功能
    init() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = function() {
                console.log(this.index)
            }
        }
    }
    toggleTab() {

        }
        // 添加功能
    addTab() {

        }
        // 删除功能
    removeTab() {

        }
        // 编辑功能
    editTab() {

    }
}
var tab = new Tab('#tab');