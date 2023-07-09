function main(){
    Java.perform(function (){

        var TestThreadClass = Java.use("com.dta.demo13.TestThread")
        TestThreadClass.add.implementation = function(arg1,arg2){

            console.log("the first arg is ==>" + arg1)
            console.log("the second arg is ==>" + arg2)
            var result = this.add(arg1,arg2)
            console.log("the result is ==>" + result)
            return result;
        }

    })
}
setImmediate(main)