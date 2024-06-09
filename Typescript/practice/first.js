// interface Me {
//     name:string
//     age:number
// }
// | with this the OR/Intersection property of the ts and & Union property of ts
var Arithmetic;
(function (Arithmetic) {
    Arithmetic[Arithmetic["Add"] = 0] = "Add";
    Arithmetic[Arithmetic["Mul"] = 1] = "Mul";
    Arithmetic[Arithmetic["Sub"] = 2] = "Sub";
    Arithmetic[Arithmetic["Div"] = 3] = "Div";
})(Arithmetic || (Arithmetic = {}));
function calculate(a, b, type) {
    console.log(type);
    return 1;
}
var ans = calculate(1, 2, Arithmetic.Div);
console.log(ans);
