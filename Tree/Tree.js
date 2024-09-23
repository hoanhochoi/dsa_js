console.log("xây dựng tree")
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    constructor(value){
        const newNode = new Node(value);
        this.root = newNode;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let temp = this.root; // lưu ý để là let không để const vì hằng không thể thay đổi
        while(true){
            if(temp === newNode) return undefined;
            if(newNode.value < temp.value){
                if(temp.left == null){
                    temp.left = newNode;
                    return this;
                }else
                    temp = temp.left;
                
            }else{
                if(temp.right == null){
                    temp.right = newNode;
                    return this
                }else
                    temp = temp.right;
                
            }
        }
    }

    recursionContain(value,currentNode = this.root){
        if(currentNode === null) return false;
        if(currentNode.value == value) return true;
        if(value < currentNode.value)
            return this.recursionContain(value,currentNode.left)
        else
            return this.recursionContain(value,currentNode.right)

    }

    #rInsert(value,currentNode = this.root){
        if(currentNode === null) return new Node(value);
        if(value < currentNode.value){
            currentNode.left = this.#rInsert(value,currentNode.left)
        }
        else if(value > currentNode.value){
            currentNode.right = this.#rInsert(value,currentNode.right)
        }
        return currentNode
    }
    rInsert(value){
        if(this.root === null) this.root = new Node(value)
        this.#rInsert(value);
    }
    minValue(currentNode){
        while(currentNode.left != null){
            currentNode = currentNode.left
        }
        return currentNode.value;
    }
    #rDelete(value,currentNode){
        if(currentNode === null) return null;
       
            if(value < currentNode.value)
                currentNode.left = this.#rDelete(value,currentNode.left)
            else if(value > currentNode.value)
                currentNode.right = this.#rDelete(value,currentNode.right);
            else{
                // Th1: nút muốn xóa là nút lá
                if(currentNode.rigth === null && currentNode.left === null)
                    return null;
                // Th2: nút muốn xóa bên trái là null nhưng phải có con
                else if(currentNode.left === null)
                    currentNode = currentNode.right;
                // TH3: nút muốn xóa bên trái có con nhưng phải lại null
                else if(currentNode.right == null )
                    currentNode = currentNode.left;
                // Th4 : cả hai bên đều có con
                else{
                    let subTreeMin = this.minValue(currentNode.right)
                    currentNode.value = subTreeMin;
                    currentNode.right = this.#rDelete(subTreeMin,currentNode.right);
                }
            }
        return currentNode;

    }
    rDelete(value){
        if(this.root === value) return null;
        this.#rDelete(value,this.root);
    }
   

}

const myTree = new Tree(10)
myTree.rInsert(20);
myTree.rInsert(5);
myTree.rInsert(3);
myTree.rInsert(7);
myTree.rInsert(6);
myTree.rInsert(9);


/*
            10
        5        20       
   3        7
        6       9 
myTree.rDelete(5)
            10
        6        20       
   3        7
               9 
 */