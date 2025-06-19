function add(a,b){
    return a+b;
}
const mul=(a,b)=>{
    return a*b;
}
/*console.log(mul(12,11));
*/
const obj={
    name:'GOPI',
    age:23,
    message:function(){
        let name=obj.name
        return `Hello I am ${name}`
    }
}
/*console.log(obj.name);
console.log(obj.message());*/

const numbers=[1,3,4,88,21,-35,-26]
const mappednum=numbers.map((num)=>num*3)
console.log(mappednum);

const posNum=numbers.filter((num)=>num>0)
console.log(posNum);

const odd=numbers.filter((num)=>num%2!=0)
console.log(odd)

const total=numbers.reduce((sum,n)=>sum+n,0)
console.log(total)

const products=[
    {name:'tv',price:800},
    {name:'phone',price:5000},
    {name:'lap',price:7500},
    {name:'game',price:2500},
    {name:'remote',price:4500},
    {name:'AC',price:9500}
]
    const totalPrice=products.reduce((sum,n)=>sum+n.price,0)
    console.log(totalPrice);

    const pr=products.filter((n)=>n.price>5000)
    console.log(pr);

    //destructing
    const number=[1,2,3,4,5,6]
    const[first,second,third]=number
    console.log(third);
    const user={name:'GOPI',password:'12341234'}
    const{name,password}=user
    console.log(password);

    //spread
    const arr1=[1,2,3]
    const arr2=[4,5,6]
    const copy=[...arr1,...arr2]
    console.log(copy);

    //rest
    function add2(...arguments){
        return arguments;
    }
    console.log(add2(1,2,3,4,5))

    function add1(...arguments){
        return arguments.reduce((sum,n)=>sum+n,0);
    }
    console.log(add1(1,2,3,4,5))

    //callback
    function function1(){
        console.log(`from inside callback`)
    }
    function fun(name,callback){
        callback()
        return `${name} from outside callback `
    }
    console.log(fun('function',()=>{console.log(`from inside callback`)}));

    async function fetchUsers(){
        try{
            const response=await fetch(
                'https://jsonplaceholder.typicode.com/users'
                
            )
            const data=await response.json()
            // console.log(data);

            data.map((a)=>console.log(a.name))
        }catch(error){
            console.log(error);

        }
    }
    fetchUsers()