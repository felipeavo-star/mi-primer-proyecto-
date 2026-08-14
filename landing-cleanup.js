/* Solo Estudio — landing compacta y enfocada */
(function(){
  function clean(){
    ['.visibility','.process','.about','.ai-section','.transformation','.final-cta'].forEach(selector=>{
      document.querySelectorAll(selector).forEach(el=>el.remove());
    });
    const statement=document.querySelector('.statement');
    if(statement){
      const eyebrow=statement.querySelector('.eyebrow');
      const heading=statement.querySelector('h2');
      const copy=statement.querySelector('p:last-child');
      if(eyebrow) eyebrow.textContent='PARA QUIENES ESTÁN CONSTRUYENDO ALGO';
      if(heading) heading.innerHTML='Tu negocio merece un equipo que <span>esté.</span>';
      if(copy) copy.textContent='No creemos en respuestas complicadas ni en desaparecer después de entregar un proyecto. Creemos en acompañar, explicar y construir contigo.';
    }
    const method=document.querySelector('#metodo');
    if(method){
      const title=method.querySelector('h2');
      const copy=method.querySelector('.section-heading>p:last-child');
      if(title) title.innerHTML='De una idea a un negocio que <span>crece.</span>';
      if(copy) copy.textContent='Una ruta simple para transformar lo que imaginas en algo que las personas puedan entender, recordar y elegir.';
    }
    const services=document.querySelector('#soluciones');
    if(services){
      const title=services.querySelector('h2');
      const copy=services.querySelector('.section-heading>p:last-child');
      if(title) title.innerHTML='Tres formas de <span>impulsar tu negocio.</span>';
      if(copy) copy.textContent='Elegimos las herramientas según lo que realmente necesitas. Sin paquetes innecesarios.';
      const cards=services.querySelectorAll('.service-card');
      const territories=[
        {title:'Marca',icon:'◎',copy:'Identidad, diseño y contenido para que tu negocio tenga una presencia reconocible y propia.',tag:'IDENTIDAD · DISEÑO · CONTENIDO'},
        {title:'Crecimiento',icon:'↗',copy:'Marketing, publicidad y ventas para que tu marca llegue a las personas correctas y genere oportunidades.',tag:'MARKETING · PUBLICIDAD · VENTAS'},
        {title:'Impulso',icon:'⌁',copy:'Web, automatización e IA para avanzar más rápido, ordenar procesos y aprovechar mejor tus recursos.',tag:'WEB · IA · AUTOMATIZACIÓN'}
      ];
      cards.forEach((card,i)=>{
        if(i>2){card.remove();return;}
        const heading=card.querySelector('h3');
        const icon=card.querySelector('.icon');
        const copyEl=card.querySelector('p');
        const link=card.querySelector('a');
        const num=card.querySelector('.service-number');
        if(num) num.textContent=String(i+1).padStart(2,'0');
        if(icon) icon.textContent=territories[i].icon;
        if(heading) heading.textContent=territories[i].title;
        if(copyEl) copyEl.textContent=territories[i].copy;
        if(link) link.textContent='Conversemos →';
        card.setAttribute('data-tag',territories[i].tag);
        card.classList.add('territory-card');
      });
      if(!document.querySelector('.brand-break')){
        const breakSection=document.createElement('section');
        breakSection.className='brand-break';
        breakSection.innerHTML='<div class="container"><p>CONSTANCIA <span>&gt;</span> COMPLEJIDAD</p><small>No necesitas saber de marketing. Necesitas alguien que esté contigo.</small></div>';
        services.after(breakSection);
      }
    }
    document.querySelectorAll('.nav-links a').forEach(link=>{
      const text=link.textContent.trim().toLowerCase();
      if(text.includes('proyectos') || text.includes('nosotros')) link.remove();
      if(text.includes('servicios')) link.setAttribute('href','#soluciones');
      if(text.includes('cómo trabajamos')) link.setAttribute('href','#metodo');
      if(text.includes('contacto')) link.setAttribute('href','#contacto');
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',clean);
  else clean();
})();
