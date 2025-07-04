function toggleMode() {
  const html = document.documentElement // define o document html e acessa atraves do documentElement
  html.classList.toggle("light")

  // if(html.classList.contains('light')) { // if. se for verdadeiro funciona (SE do excel)
  // html.classList.remove('light') // se contem o 'light' ele faz esse, removendo o 'light'
  // } else { // if. se for falso funciona (SE do excel)
  // html.classList.add('light') // se não contem o 'light' ele faz esse, adicionando o 'light'
  // }

  const img = document.querySelector("#profile img") // querySelector, pesquisa pelo img e acessa atraves do '#profile img'
  if (html.classList.contains("light")) {
    img.setAttribute('src', './assets/avatar_claro.png') // setAttribute, modifica um atributo 'src'
  } else {
    img.setAttribute('src', './assets/avatar_escuro.png') // setAttribute, modifica um atributo 'src'
  }

}