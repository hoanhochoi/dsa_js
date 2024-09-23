class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class linkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
    getHead(){
        if(!this.head)
            console.log("linked list is empty");
        else
            console.log("head: "+this.head.value)
    }
    getTail(){
        if(!this.tail){
            console.log("linked list is empty")
        }else
            console.log("tail: "+this.tail.value)
    }
    printList(){
        let temp = this.head;
        while(temp !== null){
            console.log(temp.value);
            temp = temp.next;
        }
    }
    getLength(){
        if(this.length)
            console.log("length:"+this.length)
    }
    push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    pop(){
        if(!this.head){
            return undefined;
        }
        let temp = this.head;
        let pre = this.head;
        while(temp.next){
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        pre.next = null;
        this.length--;
        if(this.length == 0){
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
    unShift(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    shift(){
        if(!this.head) return undefined;
    }
    get(index){
        if(index < 0 || index > this.length - 1) return undefined;
        if(index == 0) return this.head;
        let temp = this.head;
        for(let i =0 ;i<index;i++)
            temp = temp.next;
        return temp;
    }

    set(index,value){
        let temp = get(index);
        if(temp){
            temp.value = value;
            return true;
        }
        return false;     
    }
    insert(index,value){
        if(index === 0) return this.unShift(value);
        if(index === this.length) return this.push(value);
        if(index < 0 || index > this.length) return false;
        const newNode = new Node(value);
        let temp = this.get(index);
        newNode.next = temp.next;
        temp.next = newNode
        this.length++;
        return true;
    }

    remove(index){
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        if(index < 0 || index >= this.length) return undefined;
        let before = get(index - 1);
        let temp = get(index);
        before.next = temp.next;
        temp = null;
        this.length--;
        return true;
    }
// reverse đảo ngược danh sách liên kết
    reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let pre = null;
        let next = temp.next;
        for(let i =0;i<this.length;i++){
            next = temp.next;
            temp.next = pre;
            pre = temp;
            temp = next;
        }
        return this;
    }
    // example test1:
    findMiddleNode(){
        let slow = this.head;
        let fast = this.head;
        while( fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next; // trường hợp nếu fast.next là null ròi thì không chạy được fast.next.next vì null không có next
            console.log(slow);
            console.log(fast);
        }
        return slow;
    }

    // example test2:
    hasLoop() {
        let slow = this.head;
        let fast = this.head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) {
                return true;
            }
        }
        return false;
    }
// trả về nút cuối của danh sách tính từ phải qua trái
    findKthFromEnd(k) {
        let slow = this.head;
        let fast = this.head;

        for (let i = 0; i < k; ++i) {
            if (fast === null) {
                return null;
            }
            fast = fast.next;
        }

        while (fast !== null) {
            slow = slow.next;
            fast = fast.next;
        }

        return slow;
    }
 
}
console.log("hello");
let myLinkedList = new linkedList(1);
myLinkedList.getHead();
myLinkedList.getTail();
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(6);



