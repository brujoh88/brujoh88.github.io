;(() => {
  var t,
    e = document.getElementById('header-titulo'),
    a = document.getElementById('form-container'),
    o = document.getElementById('opcion-ingreso'),
    s = document.getElementById('valorEscuadra'),
    n = document.getElementById('valorLegajo'),
    c = document.getElementById('value-pass'),
    r = document.getElementById('botonLegajo'),
    l = document.getElementById('page-1'),
    d = document.getElementById('to-page2'),
    i = document.getElementById('to-page3'),
    u = document.getElementById('to-page1'),
    m = document.getElementById('page-2'),
    L = document.getElementById('query-button'),
    v = document.getElementById('form-container-query'),
    y = document.getElementById('loader'),
    b = document.getElementById('value-mes-year'),
    g = document.getElementById('value-year'),
    f = document.getElementById('opciones'),
    p = document.getElementById('page-3'),
    h = document.getElementById('page-4'),
    T = ['vacio', '😭', '😫', '😓', '😒', '😌', '😁🎉'],
    E = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
    j = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
  window.onload = function () {
    var a,
      o = localStorage.getItem('token')
    if (o) {
      var s =
        ((a = o.split('.')[1].replace('-', '+').replace('_', '/')),
        JSON.parse(window.atob(a)))
      ;(t = { error: '', body: s }),
        e.classList.add('ocultar'),
        l.classList.add('ocultar'),
        m.classList.remove('ocultar'),
        d.classList.remove('ocultar'),
        i.classList.remove('marcador-seccion'),
        d.classList.add('marcador-seccion'),
        i.classList.remove('ocultar'),
        u.classList.remove('ocultar')
      var n = {
        error: '',
        body: { legajo: s.legajo, name: s.name, turno: s.turno },
      }
      M[0].classList.remove('ocultar'), B(n)
    } else l.classList.remove('ocultar'), M[0].classList.add('ocultar')
  }
  var M = document.getElementsByClassName('name-user'),
    I = document.getElementById('print-fecha'),
    w = document.getElementsByClassName('day-in-work'),
    D = document.getElementsByClassName('tabla'),
    k = function (e, a) {
      var o = t.body.turno,
        s = e.body.listAllTurnos.listAllDaysOnMes.length,
        n = new Date(e.body.listAllTurnos.listAllDaysOnMes[1]),
        c = n.getMonth(),
        r = n.getFullYear()
      ;(c = E[c]),
        D[a].insertAdjacentHTML(
          'beforeend',
          '\n  <tr class="text-tabla">  \n    <td colspan = "6" class="titulo-mes">'
            .concat(c, ' - ')
            .concat(
              r,
              '</td>    \n  </tr>\n  <tr class="text-tabla">\n    <td class=" perseguir">Día</td>    \n    <td class=" perseguir">Fecha</td>\n    <td class=" perseguir">Mañana</td>\n    <td class=" perseguir">Tarde</td>\n    <td class=" perseguir">Noche</td>\n    <td class=" perseguir">Franco</td>\n  </tr>'
            )
        )
      for (var l = !1, d = 0; d < s; d++) {
        var i = new Date(e.body.listAllTurnos.listAllDaysOnMes[d])
        nameDay = j[i.getUTCDay()]
        var u = new Date(e.body.listAllTurnos.listAllDaysOnMes[d]),
          m = u.getDate(),
          L = u.getMonth(),
          v = u.getFullYear(),
          y = e.body.listAllTurnos.maniana[d],
          b = e.body.listAllTurnos.tarde[d],
          g = e.body.listAllTurnos.noche[d],
          f = e.body.listAllTurnos.franco[d],
          p = void 0,
          h = (new Date(e.body.date) - i) / 1e3 / 60 / 60 / 24
        switch (((h = parseInt(h, 10)), o)) {
          case y:
            0 === h && 0 == l && ((p = 'resaltar-hoy'), (l = !0)),
              D[a].insertAdjacentHTML(
                'beforeend',
                '<tr class="text-tabla '
                  .concat(p, '">\n            <td>\n                ')
                  .concat(
                    nameDay,
                    '\n            </td>\n            <td>\n                '
                  )
                  .concat(m, '/')
                  .concat(L + 1, '/')
                  .concat(
                    v,
                    '\n            </td>\n            <td class="resaltar-turno">\n                '
                  )
                  .concat(
                    y,
                    '\n            </td>\n            <td>\n                '
                  )
                  .concat(
                    b,
                    '\n            </td>\n            <td>\n                '
                  )
                  .concat(
                    g,
                    '\n            </td>\n            <td>\n                '
                  )
                  .concat(f, '\n            </td>\n        </tr>')
              )
            break
          case b:
            0 === h && 0 == l && ((p = 'resaltar-hoy'), (l = !0)),
              D[a].insertAdjacentHTML(
                'beforeend',
                '<tr class="text-tabla '
                  .concat(p, '">\n            <td>\n                ')
                  .concat(
                    nameDay,
                    '\n            </td>\n            <td>\n                '
                  )
                  .concat(m, '/')
                  .concat(L + 1, '/')
                  .concat(
                    v,
                    '\n            </td>\n            <td>\n                '
                  )
                  .concat(
                    y,
                    '\n            </td>\n            <td class="resaltar-turno">\n                '
                  )
                  .concat(
                    b,
                    '\n            </td>\n            <td>\n                '
                  )
                  .concat(
                    g,
                    '\n            </td>\n            <td>\n                '
                  )
                  .concat(f, '\n            </td>\n        </tr>')
              )
            break
          case g:
            0 === h && 0 == l && ((p = 'resaltar-hoy'), (l = !0)),
              D[a].insertAdjacentHTML(
                'beforeend',
                '<tr class="text-tabla '
                  .concat(p, '">\n            <td>\n                ')
                  .concat(
                    nameDay,
                    '\n            </td>\n            <td>\n                '
                  )
                  .concat(m, '/')
                  .concat(L + 1, '/')
                  .concat(
                    v,
                    '\n            </td>\n            <td>\n                '
                  )
                  .concat(
                    y,
                    '\n            </td>\n            <td>\n                '
                  )
                  .concat(
                    b,
                    '\n            </td>\n            <td class="resaltar-turno">\n                '
                  )
                  .concat(
                    g,
                    '\n            </td>\n            <td>\n                '
                  )
                  .concat(f, '\n            </td>\n        </tr>')
              )
            break
          case f:
            0 === h && 0 == l && ((p = 'resaltar-hoy'), (l = !0)),
              D[a].insertAdjacentHTML(
                'beforeend',
                '<tr class="text-tabla '
                  .concat(p, '">\n            <td>\n                ')
                  .concat(
                    nameDay,
                    '\n            </td>\n            <td>\n                '
                  )
                  .concat(m, '/')
                  .concat(L + 1, '/')
                  .concat(
                    v,
                    '\n            </td>\n            <td>\n                '
                  )
                  .concat(
                    y,
                    '\n            </td>\n            <td>\n                '
                  )
                  .concat(
                    b,
                    '\n            </td>\n            <td>\n                '
                  )
                  .concat(
                    g,
                    '\n            </td>\n            <td class="resaltar-turno">\n                '
                  )
                  .concat(f, '\n            </td>\n        </tr>')
              )
        }
      }
    }
  o.addEventListener('change', function () {
    var t = o.value
    'legajo-password' == t
      ? (a.classList.remove('ocultar'),
        s.classList.add('ocultar'),
        s.classList.remove('resaltar-opcion'),
        (s.value = ''),
        valorLegajo.classList.remove('ocultar'),
        valorLegajo.classList.add('resaltar-opcion'),
        c.classList.remove('ocultar'),
        c.classList.add('resaltar-opcion'))
      : 'escuadra' == t
      ? (a.classList.remove('ocultar'),
        valorLegajo.classList.add('ocultar'),
        (valorLegajo.value = ''),
        s.classList.remove('ocultar'),
        s.classList.add('resaltar-opcion'),
        valorLegajo.classList.remove('resaltar-opcion'),
        c.classList.add('ocultar'),
        c.classList.remove('resaltar-opcion'))
      : (a.classList.add('ocultar'),
        valorLegajo.classList.add('ocultar'),
        valorLegajo.classList.remove('resaltar-opcion'),
        (valorLegajo.value = ''),
        s.classList.remove('resaltar-opcion'),
        s.classList.add('ocultar'),
        (s.value = ''),
        c.classList.remove('resaltar-opcion'),
        c.classList.add('ocultar'))
  }),
    r.addEventListener('click', function () {
      'legajo-password' == o.value ? H() : 'escuadra' == o.value && C()
    })
  var A = window.location.origin,
    B = function (t) {
      var e = t.body.name,
        a = t.body.legajo,
        o = t.body.turno
      ;(M[0].innerHTML = ''),
        (M[1].innerHTML = ''),
        M[0].insertAdjacentHTML('beforeend', ''.concat(e, ' - ').concat(a)),
        M[1].insertAdjacentHTML('beforeend', e),
        fetch(''.concat(A, '/getDate'), {
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
          body: JSON.stringify({
            mes: new Date().getMonth(),
            anio: new Date().getFullYear(),
            turno: o,
          }),
        })
          .then(function (t) {
            return t.json()
          })
          .then(function (t) {
            O(t)
          })
    },
    O = function (t) {
      comoTrabajo = t.body.inDayWork.turno
      var e = new Date(t.body.date)
      ;(day = e.getDate()),
        (mes = e.getMonth()),
        (mes = E[mes]),
        (I.innerHTML = ''),
        I.insertAdjacentHTML('beforeend', ''.concat(day, ' de ').concat(mes)),
        (diasParaFranco = t.body.inDayWork.diaEnTurno),
        (w[0].innerHTML = ''),
        (w[1].innerHTML = ''),
        w[0].insertAdjacentHTML('beforeend', ''.concat(comoTrabajo)),
        w[1].insertAdjacentHTML(
          'beforeend',
          ''.concat(6 - diasParaFranco, ' ').concat(T[diasParaFranco])
        ),
        (D[0].innerHTML = ''),
        k(t, 0)
    }
  d.addEventListener('click', function () {
    i.classList.remove('marcador-seccion'),
      d.classList.add('marcador-seccion'),
      m.classList.add('bounceInLeft'),
      l.classList.add('ocultar'),
      m.classList.remove('ocultar'),
      p.classList.add('ocultar'),
      h.classList.add('ocultar')
  }),
    i.addEventListener('click', function () {
      p.classList.add('bounceInRight'),
        d.classList.remove('marcador-seccion'),
        i.classList.add('marcador-seccion'),
        l.classList.add('ocultar'),
        m.classList.add('ocultar'),
        p.classList.remove('ocultar'),
        h.classList.add('ocultar')
    }),
    u.addEventListener('click', function () {
      swal({
        title: 'Seguro que desea salir?',
        dangerMode: !0,
        buttons: !0,
      }).then(function (t) {
        t &&
          (localStorage.clear(),
          swal('Cerrado exitosamente', { icon: 'success' }).then(function (t) {
            t &&
              (m.classList.remove('bounceInLeft'),
              p.classList.remove('bounceInRight'),
              m.classList.add('bounceOut'),
              p.classList.add('bounceOut'),
              h.classList.add('bounceOut'),
              i.classList.remove('marcador-seccion'),
              setTimeout(N, 1e3))
          }))
      })
    }),
    b.addEventListener('keyup', function (t) {
      'Enter' == t.key && S()
    }),
    L.addEventListener('click', function () {
      S()
    }),
    g.addEventListener('keyup', function (t) {
      'Enter' == t.key && S()
    })
  var S = function () {
    v.classList.remove('ocultar'),
      'mes' == f.value &&
        ((valorMesYear = b.value),
        '' == valorMesYear
          ? swal('Faltan datos', 'Complete con el mes deseado', 'info')
          : ((fecha = valorMesYear + '-1'),
            (fecha = new Date(fecha)),
            fetch(''.concat(A, '/getDate'), {
              headers: { 'Content-Type': 'application/json' },
              method: 'POST',
              body: JSON.stringify({
                mes: fecha.getMonth(),
                anio: fecha.getFullYear(),
                turno: t.body.turno,
              }),
            })
              .then(function (t) {
                return t.json()
              })
              .then(function (t) {
                ;(D[1].innerHTML = ''),
                  v.classList.add('ocultar'),
                  y.classList.add('lds-spinner'),
                  setTimeout(Y, 2e3),
                  k(t, 1)
              }))),
      'anio' == f.value &&
        ((valorYear = g.value),
        '' == valorYear
          ? swal('Faltan datos', 'Complete con el año deseado', 'info')
          : valorYear > 2100 || valorYear < 2e3
          ? swal('Años validos', 'Min 2000 Max 2100 ', 'error')
          : fetch(''.concat(A, '/getDate'), {
              headers: { 'Content-Type': 'application/json' },
              method: 'POST',
              body: JSON.stringify({
                mes: 'anioCompleto',
                anio: valorYear,
                turno: t.body.turno,
              }),
            })
              .then(function (t) {
                return t.json()
              })
              .then(function (t) {
                v.classList.add('ocultar'),
                  y.classList.add('lds-spinner'),
                  setTimeout(Y, 2e3),
                  (function (t, e) {
                    console.log(t), (D[1].innerHTML = '')
                    var a = { body: t.body[0] },
                      o = { body: t.body[1] },
                      s = { body: t.body[2] },
                      n = { body: t.body[3] },
                      c = { body: t.body[4] },
                      r = { body: t.body[5] },
                      l = { body: t.body[6] },
                      d = { body: t.body[7] },
                      i = { body: t.body[8] },
                      u = { body: t.body[9] },
                      m = { body: t.body[10] },
                      L = { body: t.body[11] }
                    k(a, 1),
                      k(o, 1),
                      k(s, 1),
                      k(n, 1),
                      k(c, 1),
                      k(r, 1),
                      k(l, 1),
                      k(d, 1),
                      k(i, 1),
                      k(u, 1),
                      k(m, 1),
                      k(L, 1)
                  })(t)
              })),
      '' == f.value && swal('Elija una opcion', 'Mes o Año', 'warning')
  }
  f.addEventListener('change', function () {
    var t = f.value
    'mes' == t
      ? (g.classList.add('ocultar'),
        (g.value = ''),
        b.classList.remove('ocultar'),
        b.classList.add('resaltar-opcion'),
        g.classList.remove('resaltar-opcion'))
      : 'anio' == t
      ? (b.classList.add('ocultar'),
        (b.value = ''),
        g.classList.remove('ocultar'),
        g.classList.add('resaltar-opcion'),
        b.classList.remove('resaltar-opcion'))
      : (b.classList.add('ocultar'),
        b.classList.remove('resaltar-opcion'),
        (b.value = ''),
        g.classList.remove('resaltar-opcion'),
        g.classList.add('ocultar'),
        (g.value = ''))
  }),
    n.addEventListener('keyup', function (t) {
      'Enter' == t.key && H()
    }),
    c.addEventListener('keyup', function (t) {
      'Enter' == t.key && H()
    })
  var H = function () {
      '' === n.value || '' === c.value
        ? swal(
            'Datos incompletos',
            'Se requiere legajo y contraseña😬',
            'warning'
          )
        : fetch(''.concat(A, '/login'), {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({ legajo: n.value, password: c.value }),
          })
            .then(function (t) {
              return t.json()
            })
            .then(function (e) {
              e.body.name
                ? (o.classList.add('ocultar'),
                  a.classList.add('slide-rotate-hor-t-bck'),
                  setTimeout(F, 400),
                  (t = e),
                  localStorage.setItem('token', t.body.token),
                  B(t))
                : swal('Datos incorrectos', '😟', 'error')
            })
            .catch(function (t) {
              return console.log(t)
            })
    },
    C = function () {
      '' === s.value
        ? swal('Datos incompletos', 'Elegir A - B - C - D😬', 'warning')
        : fetch(''.concat(A, '/login'), {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({ legajo: s.value, password: 'noPass' }),
          })
            .then(function (t) {
              return t.json()
            })
            .then(function (e) {
              e.body.name
                ? (o.classList.add('ocultar'),
                  a.classList.add('slide-rotate-hor-t-bck'),
                  setTimeout(F, 400),
                  (t = e),
                  localStorage.setItem('token', t.body.token),
                  B(t))
                : swal('Datos incorrectos', '😟', 'error')
            })
            .catch(function (t) {
              return console.log(t)
            })
    },
    F = function () {
      e.classList.add('ocultar'),
        l.classList.add('ocultar'),
        m.classList.remove('ocultar'),
        m.classList.add('bounceInUp'),
        d.classList.remove('ocultar'),
        d.classList.add('marcador-seccion'),
        i.classList.remove('ocultar'),
        u.classList.remove('ocultar'),
        d.classList.add('zoomInLeft'),
        i.classList.add('zoomInDown'),
        u.classList.add('zoomInRight'),
        M[0].classList.remove('ocultar')
    },
    Y = function () {
      p.classList.add('ocultar'),
        v.classList.remove('ocultar'),
        y.classList.remove('lds-spinner'),
        h.classList.remove('ocultar')
    },
    N = function () {
      m.classList.remove('bounceOut'),
        p.classList.remove('bounceOut'),
        h.classList.remove('bounceOut'),
        e.classList.remove('ocultar'),
        l.classList.remove('ocultar'),
        o.classList.remove('ocultar'),
        a.classList.remove('slide-rotate-hor-t-bck'),
        m.classList.add('ocultar'),
        p.classList.add('ocultar'),
        h.classList.add('ocultar'),
        M[0].classList.add('ocultar'),
        d.classList.add('ocultar'),
        i.classList.add('ocultar'),
        u.classList.add('ocultar'),
        d.classList.remove('zoomInLeft'),
        i.classList.remove('zoomInDown'),
        u.classList.remove('zoomInRight'),
        m.classList.remove('bounceInUp'),
        (n.value = ''),
        (c.value = '')
    }
})()
