let valueLegajo = document.getElementById('valorLegajo')
let buttonLogin = document.getElementById('botonLegajo')
let page1 = document.getElementById('page-1')
let page2 = document.getElementById('page-2')
let page3 = document.getElementById('page-3')
let page4 = document.getElementById('page-4')

/*
Traer elementos del DOM para insertar datos del backend
*/
let userDateDb
let nameUser = document.getElementsByClassName('name-user')

buttonLogin.addEventListener('click', () => {
  if (valueLegajo.value === '') {
    alert('Ingresa un valor')
  } else {
    fetch('http://127.0.0.1:3000/login', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        legajo: valueLegajo.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.body.name) {
          alert('Legajo no encontrado')
        } else {
          page1.classList.add('ocultar')
          page2.classList.remove('ocultar')
          userDateDb = data
          imprimirDatosUser(userDateDb)
        }
      })
      .catch((err) => console.log(err))
  }
})

const imprimirDatosUser = (data) => {
  let name = data.body.name
  nameUser[0].insertAdjacentHTML('beforeend', name)
  nameUser[1].insertAdjacentHTML('beforebegin', name)
}
