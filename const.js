class MyClass{

    //constructor call automatically
    // but constructor doesnt rreturn anything

    constructor(a,b){
        this.frstnmbr =a
        this.scndnmbr = b;

    }

    MyFunc(){
        let result = this.frstnmbr+this.scndnmbr
        console.log(result);
    }
    MyFunc1(name){
        console.log(name);
    }
    MyFunc2(number){
        console.log(number);
    }

    MyFunc3(a,b,...multiple){
        console.log(a+b);
        console.log(multiple);
        
    }
}

var obj  = new MyClass(15,20);
obj.MyFunc();

// obj.MyFunc();
// obj.MyFunc1('baki');
// obj.MyFunc2(25);
// obj.MyFunc3(5,10,2,2,6);