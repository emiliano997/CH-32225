// v1
const login = (user, password) => {
  if(!password) return 'No se ha proporcionado un password';

  if(!user) return 'No se ha proporcionado un usuario';

  if(password !== '123') return 'Contraseña incorrecta';

  if(user !== 'coderUser') return 'Credenciales incorrectas';

  return 'logueado';
}

// v2


// Escenarios
let testPasados = 0;
let testTotales = 5;

// Test 1
console.log('Test 1: Si se pasa un password vacío, la funcion debe consologuear "No se ha proporcionado un password"');
const resultTest1 = login('usuario', '');
if(resultTest1 === 'No se ha proporcionado un password') {
  testPasados++;
  console.log('Test 1: PASS')
} else {
  console.log('Test 1: FAIL')
}

// Test 2
console.log('Test 2: Si se pasa un usuario vacío, la funcion debe consologuear "No se ha proporcionado un usuario"');
const resultTest2 = login('', 'password');
if(resultTest2 === 'No se ha proporcionado un usuario') {
  testPasados++;
  console.log('Test 2: PASS')
} else {
  console.log('Test 2: FAIL')
}

// Test 3
console.log('Test 3: Si se pasa un password incorrecto, consologuear "Contraseña incorrecta"');
const resultTest3 = login('usuario', 'password');
if(resultTest3 === 'Contraseña incorrecta') {
  testPasados++;
  console.log('Test 3: PASS')
} else {
  console.log('Test 3: FAIL')
}

// Test 4
console.log('Test 4: Si se pasa un usuario incorrecto, consologuear "Credenciales incorrectas"');
const resultTest4 = login('usuario', '123');
if(resultTest4 === 'Credenciales incorrectas') {
  testPasados++;
  console.log('Test 4: PASS')
} else {
  console.log('Test 4: FAIL')
}

// Test 5
console.log('Test 5: Si el usuario y contraseña coinciden, consologuear "logueado"');
const resultTest5 = login('coderUser', '123');
if(resultTest5 === 'logueado') {
  testPasados++;
  console.log('Test 5: PASS')
} else {
  console.log('Test 5: FAIL')
}

console.log(`Tests pasados: ${testPasados}/${testTotales}`);