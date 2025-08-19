service SalutatorService @(restrict: [
    { grant: 'hello', to: 'any' }
]) {
    function hello() returns String;
}

service AdminSalutatorService @(restrict: [
    { grant: 'hello', to: 'admin' }
]) {
    function hello() returns String
}