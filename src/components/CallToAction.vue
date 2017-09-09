<template>
    <div id="form">
         <nav class="navbar dark">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img src="images/navbarlogowhite.png" alt="Speakit logo" width="112" height="28">
            </a>

            <a class="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
              <span class="icon" style="color: #333;">
                <i class="fa fa-github"></i>
              </span>
            </a>

            <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
              <span class="icon" style="color: #55acee;">
                <i class="fa fa-twitter"></i>
              </span>
            </a>

            <div class="navbar-burger burger" data-target="navMenubd-example">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navMenubd-example" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item " href="#about">
                О нас
              </a>
              <a class="navbar-item " href="http://bulma.io/love/">
                Портфолио
              </a>
              <a class="navbar-item " href="http://bulma.io/love/">
                Тарифы
              </a>
            </div>

            <div class="navbar-end">
              <a class="navbar-item " href="tel:+77773110404">
                + 7 777 311 04 04
              </a>
              <a class="navbar-item " href="tel:+77773110404">
                + 7 777 311 04 04
              </a>
            
              <div class="navbar-item">
                <div class="field is-grouped">
                   <p class="control">
                    <a class="button is-primary is-outlined" href="https://github.com/jgthms/bulma/archive/0.5.1.zip">
                      
                      <span>Консультация</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
    </div>
</template>
<script>
    export default {

    }
</script>