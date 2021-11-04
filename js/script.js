function changeTab(event, tabSelected){
    console.log(tabSelected);
    let tabs = document.querySelectorAll('.tab');
    let tabsBody = document.querySelectorAll('.tab-body');
    let tab = document.querySelector('#' + tabSelected);
    
    // define todos os elementos com a classe tab com novas classes
    for (let i = 0; i < tabs.length; i++) {
       tabs[i].className = 'tab tabs-deselected';
    }
    // oculta o corpo de todas DIVs com a classe .tab-body
    for(let i = 0; i < tabsBody.length; i++){
        tabsBody[i].style.display = 'none'
    }

    //define a tab selecionada com a classe tabs-selected
    event.className = 'tab tabs-selected';
    
    // mostra a div com o id recebido
    tab.style.display = 'grid';

    console.log(tab);
}



//ACCORDION
let acc = document.querySelectorAll('.accordion');
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
    let icon = this.firstElementChild;
    console.log(icon.innerHTML);
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
      icon.className = 'accordion-withdrawn';
    } else {
        panel.style.display = 'block';
        icon.className = 'accordion-expanded';
    }
  });
}

function expandAccordionMobile(panel){
  console.log('painel recebido:' + panel);
  let panels = document.querySelectorAll('.panel-mobile');
  if(panels[panel].style.display === 'block'){
    panels[panel].style.display = 'none';
  }else{
    panels[panel].style.display = 'block';
  }
}
