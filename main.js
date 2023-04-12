var swiper = new Swiper('.mySwiper', {
  grabCursor: true,
  effect: 'creative',
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400]
    },
    next: {
      translate: ['100%', 0, 0]
    }
  }
})

const ct1 = document.getElementById('ct1')
const ct2 = document.getElementById('ct2')
const ct3 = document.getElementById('ct3')
const ct4 = document.getElementById('ct4')
const ct5 = document.getElementById('ct5')
const ct6 = document.getElementById('ct6')
const ct7 = document.getElementById('ct7')

const ct1p = document.getElementById('ct1p')
const ct1v = document.getElementById('ct1v')
const ct1h = document.getElementById('ct1h')

ct1.addEventListener('dblclick', function (openct1) {
  document.querySelectorAll('#ct1').forEach(function (element) {
    element.classList.add('boxCBig')
  })

  document.querySelectorAll('#ct1h').forEach(function (element) {
    element.classList.add('ct1hBig')
  })

  document.querySelectorAll('#ct1p').forEach(function (element) {
    element.classList.add('ct1pBig')
  })

  document.querySelectorAll('#ct1v').forEach(function (element) {
    element.classList.add('ct1vBig')
  })

  ct2.classList.add('hidden')
  ct3.classList.add('hidden')
  ct4.classList.add('hidden')
  ct5.classList.add('hidden')
  ct6.classList.add('hidden')
  ct7.classList.add('hidden')

  ct1.innerHTML += '<button id=btnBack>↩</button>'

  const btnBack = document.getElementById('btnBack')

  btnBack.addEventListener('click', function () {
    document
      .querySelectorAll('.boxCBig, .ct1hBig, .ct1pBig, .ct1vBig')
      .forEach(function (element) {
        element.classList.remove('boxCBig', 'ct1hBig', 'ct1pBig', 'ct1vBig')
      })

    btnBack.remove()

    ct1.classList.remove('hidden')
    ct2.classList.remove('hidden')
    ct3.classList.remove('hidden')
    ct4.classList.remove('hidden')
    ct5.classList.remove('hidden')
    ct6.classList.remove('hidden')
    ct7.classList.remove('hidden')
  })
})

ct2.addEventListener('dblclick', function (openct1) {
  document.querySelectorAll('#ct2').forEach(function (element) {
    element.classList.add('boxCBig')
  })

  document.querySelectorAll('#ct2h').forEach(function (element) {
    element.classList.add('ct1hBig')
  })

  document.querySelectorAll('#ct2p').forEach(function (element) {
    element.classList.add('ct1pBig')
  })

  document.querySelectorAll('#ct2v').forEach(function (element) {
    element.classList.add('ct1vBig')
  })

  ct1.classList.add('hidden')
  ct3.classList.add('hidden')
  ct4.classList.add('hidden')
  ct5.classList.add('hidden')
  ct6.classList.add('hidden')
  ct7.classList.add('hidden')

  ct2.innerHTML += '<button id=btnBack>↩</button>'

  const btnBack = document.getElementById('btnBack')

  btnBack.addEventListener('click', function () {
    document
      .querySelectorAll('.boxCBig, .ct1hBig, .ct1pBig, .ct1vBig')
      .forEach(function (element) {
        element.classList.remove('boxCBig', 'ct1hBig', 'ct1pBig', 'ct1vBig')
      })

    btnBack.remove()

    ct1.classList.remove('hidden')
    ct2.classList.remove('hidden')
    ct3.classList.remove('hidden')
    ct4.classList.remove('hidden')
    ct5.classList.remove('hidden')
    ct6.classList.remove('hidden')
    ct7.classList.remove('hidden')
  })
})

ct3.addEventListener('dblclick', function (openct1) {
  document.querySelectorAll('#ct3').forEach(function (element) {
    element.classList.add('boxCBig')
  })

  document.querySelectorAll('#ct3h').forEach(function (element) {
    element.classList.add('ct1hBig')
  })

  document.querySelectorAll('#ct3p').forEach(function (element) {
    element.classList.add('ct1pBig')
  })

  document.querySelectorAll('#ct3v').forEach(function (element) {
    element.classList.add('ct1vBig')
  })

  ct1.classList.add('hidden')
  ct2.classList.add('hidden')
  ct4.classList.add('hidden')
  ct5.classList.add('hidden')
  ct6.classList.add('hidden')
  ct7.classList.add('hidden')

  ct3.innerHTML += '<button id=btnBack>↩</button>'

  const btnBack = document.getElementById('btnBack')

  btnBack.addEventListener('click', function () {
    document
      .querySelectorAll('.boxCBig, .ct1hBig, .ct1pBig, .ct1vBig')
      .forEach(function (element) {
        element.classList.remove('boxCBig', 'ct1hBig', 'ct1pBig', 'ct1vBig')
      })

    btnBack.remove()

    ct1.classList.remove('hidden')
    ct2.classList.remove('hidden')
    ct3.classList.remove('hidden')
    ct4.classList.remove('hidden')
    ct5.classList.remove('hidden')
    ct6.classList.remove('hidden')
    ct7.classList.remove('hidden')
  })
})

ct4.addEventListener('dblclick', function (openct1) {
  document.querySelectorAll('#ct4').forEach(function (element) {
    element.classList.add('boxCBig')
  })

  document.querySelectorAll('#ct4h').forEach(function (element) {
    element.classList.add('ct1hBig')
  })

  document.querySelectorAll('#ct4p').forEach(function (element) {
    element.classList.add('ct1pBig')
  })

  document.querySelectorAll('#ct4v').forEach(function (element) {
    element.classList.add('ct1vBig')
  })

  ct1.classList.add('hidden')
  ct3.classList.add('hidden')
  ct2.classList.add('hidden')
  ct5.classList.add('hidden')
  ct6.classList.add('hidden')
  ct7.classList.add('hidden')

  ct4.innerHTML += '<button id=btnBack>↩</button>'

  const btnBack = document.getElementById('btnBack')

  btnBack.addEventListener('click', function () {
    document
      .querySelectorAll('.boxCBig, .ct1hBig, .ct1pBig, .ct1vBig')
      .forEach(function (element) {
        element.classList.remove('boxCBig', 'ct1hBig', 'ct1pBig', 'ct1vBig')
      })

    btnBack.remove()

    ct1.classList.remove('hidden')
    ct2.classList.remove('hidden')
    ct3.classList.remove('hidden')
    ct4.classList.remove('hidden')
    ct5.classList.remove('hidden')
    ct6.classList.remove('hidden')
    ct7.classList.remove('hidden')
  })
})

ct5.addEventListener('dblclick', function (openct1) {
  document.querySelectorAll('#ct5').forEach(function (element) {
    element.classList.add('boxCBig')
  })

  document.querySelectorAll('#ct5h').forEach(function (element) {
    element.classList.add('ct1hBig')
  })

  document.querySelectorAll('#ct5p').forEach(function (element) {
    element.classList.add('ct1pBig')
  })

  document.querySelectorAll('#ct5v').forEach(function (element) {
    element.classList.add('ct1vBig')
  })

  ct1.classList.add('hidden')
  ct3.classList.add('hidden')
  ct4.classList.add('hidden')
  ct2.classList.add('hidden')
  ct6.classList.add('hidden')
  ct7.classList.add('hidden')

  ct5.innerHTML += '<button id=btnBack>↩</button>'

  const btnBack = document.getElementById('btnBack')

  btnBack.addEventListener('click', function () {
    document
      .querySelectorAll('.boxCBig, .ct1hBig, .ct1pBig, .ct1vBig')
      .forEach(function (element) {
        element.classList.remove('boxCBig', 'ct1hBig', 'ct1pBig', 'ct1vBig')
      })

    btnBack.remove()

    ct1.classList.remove('hidden')
    ct2.classList.remove('hidden')
    ct3.classList.remove('hidden')
    ct4.classList.remove('hidden')
    ct5.classList.remove('hidden')
    ct6.classList.remove('hidden')
    ct7.classList.remove('hidden')
  })
})

ct6.addEventListener('dblclick', function (openct1) {
  document.querySelectorAll('#ct6').forEach(function (element) {
    element.classList.add('boxCBig')
  })

  document.querySelectorAll('#ct6h').forEach(function (element) {
    element.classList.add('ct1hBig')
  })

  document.querySelectorAll('#ct6p').forEach(function (element) {
    element.classList.add('ct1pBig')
  })

  document.querySelectorAll('#ct6v').forEach(function (element) {
    element.classList.add('ct1vBig')
  })

  ct1.classList.add('hidden')
  ct3.classList.add('hidden')
  ct4.classList.add('hidden')
  ct5.classList.add('hidden')
  ct2.classList.add('hidden')
  ct7.classList.add('hidden')

  ct6.innerHTML += '<button id=btnBack>↩</button>'

  const btnBack = document.getElementById('btnBack')

  btnBack.addEventListener('click', function () {
    document
      .querySelectorAll('.boxCBig, .ct1hBig, .ct1pBig, .ct1vBig')
      .forEach(function (element) {
        element.classList.remove('boxCBig', 'ct1hBig', 'ct1pBig', 'ct1vBig')
      })

    btnBack.remove()

    ct1.classList.remove('hidden')
    ct2.classList.remove('hidden')
    ct3.classList.remove('hidden')
    ct4.classList.remove('hidden')
    ct5.classList.remove('hidden')
    ct6.classList.remove('hidden')
    ct7.classList.remove('hidden')
  })
})

ct7.addEventListener('dblclick', function (openct1) {
  document.querySelectorAll('#ct7').forEach(function (element) {
    element.classList.add('boxCBig')
  })

  document.querySelectorAll('#ct7h').forEach(function (element) {
    element.classList.add('ct1hBig')
  })

  document.querySelectorAll('#ct7p').forEach(function (element) {
    element.classList.add('ct1pBig')
  })

  document.querySelectorAll('#ct7v').forEach(function (element) {
    element.classList.add('ct1vBig')
  })

  ct1.classList.add('hidden')
  ct3.classList.add('hidden')
  ct4.classList.add('hidden')
  ct5.classList.add('hidden')
  ct6.classList.add('hidden')
  ct2.classList.add('hidden')

  ct7.innerHTML += '<button id=btnBack>↩</button>'

  const btnBack = document.getElementById('btnBack')

  btnBack.addEventListener('click', function () {
    document
      .querySelectorAll('.boxCBig, .ct1hBig, .ct1pBig, .ct1vBig')
      .forEach(function (element) {
        element.classList.remove('boxCBig', 'ct1hBig', 'ct1pBig', 'ct1vBig')
      })

    btnBack.remove()

    ct1.classList.remove('hidden')
    ct2.classList.remove('hidden')
    ct3.classList.remove('hidden')
    ct4.classList.remove('hidden')
    ct5.classList.remove('hidden')
    ct6.classList.remove('hidden')
    ct7.classList.remove('hidden')
  })
})
