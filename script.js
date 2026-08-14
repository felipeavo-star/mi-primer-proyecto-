const enhancementStyles = document.createElement('link');
enhancementStyles.rel = 'stylesheet';
enhancementStyles.href = 'solo-enhancements.css?v=3';
document.head.appendChild(enhancementStyles);

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm')?.addEventListener('submit', event => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  const original = button.innerHTML;
  button.innerHTML = '¡Perfecto! Nos pondremos en contacto →';
  button.disabled = true;
  setTimeout(() => { button.innerHTML = original; button.disabled = false; event.currentTarget.reset(); }, 2500);
});

const heroMetrics = document.querySelector('.hero .trust-row');
if (heroMetrics) {
  heroMetrics.classList.add('hero-metrics');
  heroMetrics.innerHTML = `
    <div><strong>01</strong><span>Idea · La aterrizamos</span></div>
    <div><strong>02</strong><span>Identidad · La construimos</span></div>
    <div><strong>03</strong><span>Visibilidad · La hacemos crecer</span></div>
    <div><strong>04</strong><span>Crecimiento · La convertimos en acción</span></div>`;
}

/* Manifiesto: primero la persona y su negocio; después la tecnología */
const statement = document.querySelector('.statement');
if (statement) {
  const eyebrow = statement.querySelector('.eyebrow');
  const heading = statement.querySelector('h2');
  const copy = statement.querySelector('p:last-child');
  if (eyebrow) eyebrow.textContent = 'PARA QUIENES ESTÁN CONSTRUYENDO ALGO';
  if (heading) heading.innerHTML = 'Tu negocio merece un equipo que <span>esté.</span>';
  if (copy) copy.textContent = 'No creemos en respuestas complicadas ni en desaparecer después de entregar un proyecto. Creemos en acompañar, explicar y construir contigo.';
}

/* IA como herramienta transversal */
if (!document.querySelector('.ai-section')) {
  const ai = document.createElement('section');
  ai.className = 'ai-section';
  ai.innerHTML = `
    <div class="container ai-layout">
      <div class="ai-copy reveal">
        <p class="eyebrow">PERSONAS + ESTRATEGIA + IA</p>
        <h2>La tecnología acelera. <span>La dirección sigue siendo humana.</span></h2>
        <p>No buscamos reemplazar la creatividad ni el criterio. Integramos IA donde realmente aporta: para investigar, crear, analizar, automatizar y avanzar con más eficiencia.</p>
        <p class="ai-foot">Tu negocio es el protagonista. La IA es una herramienta para llevarlo más lejos.</p>
      </div>
      <div class="ai-chain reveal" aria-label="Cómo integramos IA en un proyecto">
        <div class="ai-node"><div class="num">01</div><strong>Tu idea</strong><span>Lo que quieres construir</span></div>
        <div class="ai-node"><div class="num">02</div><strong>Dirección</strong><span>Definimos qué tiene sentido</span></div>
        <div class="ai-node"><div class="num">03</div><strong>IA</strong><span>Aceleramos lo que se puede</span></div>
        <div class="ai-node"><div class="num">04</div><strong>Resultado</strong><span>Más avance, menos fricción</span></div>
      </div>
    </div>`;
  statement?.after(ai);
  ai.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* Antes / después: una transformación que se entiende de un vistazo */
if (!document.querySelector('.transformation')) {
  const transformation = document.createElement('section');
  transformation.className = 'transformation section';
  transformation.innerHTML = `
    <div class="container">
      <div class="section-heading reveal">
        <p class="eyebrow">EL CAMBIO QUE BUSCAMOS</p>
        <h2>De una idea que existe a una marca que <span>se hace visible.</span></h2>
        <p>No se trata de complicar tu negocio. Se trata de ordenar lo importante y hacer que las personas correctas puedan encontrarte, entenderte y elegirte.</p>
      </div>
      <div class="transform-grid">
        <article class="transform-panel transform-before reveal">
          <span class="transform-tag">Antes</span>
          <h3>“Sé que tengo algo, pero no sé por dónde empezar.”</h3>
          <div class="transform-list">
            <div class="transform-item"><i></i>Idea difícil de explicar</div>
            <div class="transform-item"><i></i>Marca sin una dirección clara</div>
            <div class="transform-item"><i></i>Presencia digital dispersa</div>
            <div class="transform-item"><i></i>Mucho esfuerzo, poca estructura</div>
          </div>
        </article>
        <article class="transform-panel transform-after reveal">
          <span class="transform-tag">Después</span>
          <h3>“Ahora sé qué estoy construyendo y cómo hacerlo crecer.”</h3>
          <div class="transform-list">
            <div class="transform-item"><i></i>Idea aterrizada y entendible</div>
            <div class="transform-item"><i></i>Marca reconocible y consistente</div>
            <div class="transform-item"><i></i>Visibilidad donde importa</div>
            <div class="transform-item"><i></i>Un camino para seguir creciendo</div>
          </div>
        </article>
      </div>
      <p class="transform-foot reveal">No prometemos fórmulas mágicas. Construimos contigo un sistema que puedas entender y seguir mejorando.</p>
    </div>`;
  document.querySelector('#soluciones')?.before(transformation);
  transformation.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* Los testimonios siguen siendo claramente demostrativos hasta tener clientes reales */
document.querySelectorAll('.testimonial-card').forEach(card => {
  if (!card.querySelector('.demo-label')) {
    const label = document.createElement('span');
    label.className = 'demo-label';
    label.textContent = 'Ejemplo de experiencia';
    label.style.cssText = 'position:absolute;right:22px;bottom:18px;font-size:9px;letter-spacing:1px;text-transform:uppercase;color:#9a9daa;z-index:2;';
    card.appendChild(label);
  }
});

/* Cierre de marca */
if (!document.querySelector('.final-cta')) {
  const finalCta = document.createElement('section');
  finalCta.className = 'final-cta';
  finalCta.innerHTML = `
    <div class="container final-cta-inner reveal">
      <p class="eyebrow">SOLO ESTUDIO · CONSTANTE.</p>
      <h2>Tu idea ya existe.<br>Ahora hagámosla <span>visible.</span></h2>
      <p>Cuéntanos qué estás construyendo. No necesitas tener todo resuelto. Partimos desde donde estás.</p>
      <a class="btn btn-primary" href="https://wa.me/56963563548?text=Hola%20Solo%20Estudio%2C%20quiero%20conversar%20sobre%20mi%20negocio." target="_blank" rel="noopener">Conversemos por WhatsApp <span>↗</span></a>
      <div class="mini-line">Idea · Identidad · Visibilidad · Crecimiento</div>
    </div>`;
  document.querySelector('.footer')?.before(finalCta);
  finalCta.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

const heroVisual = document.querySelector('.hero-visual');
window.addEventListener('scroll', () => {
  if (!heroVisual || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const progress = Math.min(window.scrollY / Math.max(window.innerHeight * .7, 1), 1);
  heroVisual.style.setProperty('--hero-scroll', progress.toFixed(2));
}, { passive: true });
