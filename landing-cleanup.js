/* Solo Estudio — versión compacta de landing */
(function(){
  function clean(){
    ['.ai-section','.transformation','.final-cta','.visibility','.process','.about'].forEach(selector=>{
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
      if(title) title.innerHTML='Lo que necesitas, <span>sin complicarlo.</span>';
      if(copy) copy.textContent='Elegimos las herramientas según tu negocio. No te vendemos un paquete porque sí.';
    }

    document.querySelectorAll('.nav-links a').forEach(link=>{
      const text=link.textContent.trim().toLowerCase();
      if(text.includes('proyectos')) link.remove();
      if(text.includes('nosotros')) link.remove();
      if(text.includes('servicios')) link.setAttribute('href','#soluciones');
      if(text.includes('cómo trabajamos')) link.setAttribute('href','#metodo');
      if(text.includes('contacto')) link.setAttribute('href','#contacto');
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',clean);
  else clean();
})();
