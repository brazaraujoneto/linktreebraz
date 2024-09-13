function lightDarkMode() {
  const html = document.documentElement; // Seleciona o elemento <html>
  
    /*tradução: Se(if) dentro do (body) constar(constains) 
  uma classe de lista(classlist) modo Ligth.*/
  if(html.classList.contains('light')) {
    html.classList.remove('light');
  } else {
    html.classList.add('light')
  }
  }
