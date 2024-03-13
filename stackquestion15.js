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


const Input = "/a//b////c/d//././/..";

function simpllifyPath(Input){
    const stack = new Stack(Input.length)
   const arr = Input.split("/");
    let ans = "";
   for(let i=0; i<arr.length; i++){
      const current = arr[i];
        if(current>="a"&& current <= "z"){
            stack.stackPush(current)
        }
      else if (!stack.isEmpty() && current === ".."){
           stack.stackpop()
      }
    }
      while(!stack.isEmpty()){
        ans = "/"+ stack.stackpop()+ans
   }
   console.log(stack)
   return ans.length ? ans :"/";   
}
console.log(simpllifyPath(Input));