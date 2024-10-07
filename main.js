import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <header>
      <h1>Welcome to Our Amazing Product</h1>
    </header>
    <main>
      <section class="hero">
        <h2>Discover the Future of Innovation</h2>
        <p>Our product revolutionizes the way you work, play, and live.</p>
        <button id="cta-button">Get Started</button>
      </section>
      <section class="features">
        <h2>Key Features</h2>
        <ul>
          <li>Intuitive Design</li>
          <li>Powerful Performance</li>
          <li>Seamless Integration</li>
        </ul>
      </section>
    </main>
    <footer>
      <p>&copy; 2023 Our Amazing Product. All rights reserved.</p>
    </footer>
  </div>
`

document.querySelector('#cta-button').addEventListener('click', () => {
  alert('Thank you for your interest! We will contact you soon.')
})