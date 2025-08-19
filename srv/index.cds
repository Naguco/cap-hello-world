service SalutatorService @(restrict: [
    { grant: 'hello', to: 'any' }
]) {
    function hello() returns String;
}