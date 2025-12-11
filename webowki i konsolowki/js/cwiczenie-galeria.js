// Ćw 1 - Stwórz zmienną z wartością logiczną. Zmień jej wartość na przeciwną.
let x = true;
x = !x;
console.log(x);
// Ćw 2 - Stwórz obiekt z jedną właściwością. 
// Zmień wartość tej właściwości na przeciwną.
let obj = { wlasciwosc: false };
obj.wlasciwosc = !obj.wlasciwosc;
console.log(obj);
/* Ćw 3 
Stwórz obiekt oraz zmienną, w której przechowujesz nazwę klucza. 
Zmień wartość tego klucza w obiekcie.
*/
let nazwa = 'klucz';
let obj2 = {klucz: nazwa};
obj2[nazwa] = "sigma";
console.log(obj2);
/*
Ćw 4 
Stwórz obiekt z kilkoma właściwościami.
Stwórz zmienną z nazwą wybranej właściwości.
Utwórz nowy obiekt na podstawie starego i zmień w nim tylko tę jedną właściwość.
*/