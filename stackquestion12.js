class Stack {

    constructor(size) {
        this.stack = []
        this.maxSize = size
        this.stackSize = 0
    }
    peek() {
        if (this.stackSize === 0) {
            return "stack is empty"
        } else {
            const lastElem = this.stackpop()
            this.stackPush(lastElem)
            return lastElem
        }
    }

    isEmpty() {
        if (this.stackSize == 0) {
            return true
        } return false
    }

    stackPush(item) {
        if (this.stackSize >= this.maxSize) {
            return new Error("stack Overflow")
        }
        this.stack.push(item)
        this.stackSize += 1
        return this.stackSize
    }
    stackpop() {
        if (this.stackSize === 0) {
            return new Error("stack Underflow")
        }
        this.removeItem = this.stack.pop()
        this.stackSize -= 1
        return this.removeItem
    }
}

const Input = 2;

function binaryConver(Input){
    let numb = 0;
   const stack = new Stack(Input)
    let ans = ""
     while ( Input>0) {
        const rem = Input%2
        stack.stackPush(rem)
        Input=Math.floor(Input/2)
 
    }
    while (!stack.isEmpty()){
        ans += stack.stackpop()
    }
    return ans;
  };

  console.log(binaryConver(Input));