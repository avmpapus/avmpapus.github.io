$(function(){
    $('#lang').on('click',function(){
      document.getElementById('fadeInLeftBig').innerHTML='Вітаємо у <span>Itdynamics</span>';
      document.getElementById('fadeInRightBig').innerText='Bootstrap - Адаптивний дизайн - Retina Ready - Parallax';
      document.getElementById("fadeInUpBig").innerText='Почати зараз';
      document.getElementById("fadeInUpBig2").innerText='Почати зараз';
      document.getElementById("fadeInUpBig3").innerText='Почати зараз';
      document.getElementById('fadeInLeftBig2').innerHTML='Розробка сайтів у <span>Itdynamics</span>';
      document.getElementById('fadeInRightBig2').innerText=`Комп'ютерні, мобільні та веб-додатки будь-якої складності`;
      document.getElementById('fadeInLeftBig3').innerHTML='Ми є <span>творчі</span>';
      document.getElementById('fadeInRightBig3').innerText=`Веб-дизайн - Веб-програмування - Комп'ютерне програмування - Веб-розробка`;
      document.getElementById('navbar').innerHTML=`
      <ul class="nav navbar-nav navbar-right">                 
            <li class="scroll active"><a href="#home">Головна</a></li>
            <li class="scroll"><a href="#services">Послуги</a></li> 
            <li class="scroll"><a href="#about-us">Про нас</a></li>                     
            <li class="scroll"><a href="#portfolio">Портфоліо</a></li>
            <li class="scroll"><a href="#team">Наша компанія</a></li>
            <li class="scroll"><a href="#blog">Блог</a></li>
            <!---<li class="scroll"><a href="#contact">Контакти</a></li>--->
          </ul>
      `;
      document.getElementById('service').innerHTML=`
      <div class="row">
          <div class="text-center col-sm-8 col-sm-offset-2">
            <br>
            <font size="30" color="black">Чому обирають нас</font>
            <font color="black">
            <p>З 2016 року ми розробляємо клієнтські рішення з використанням нових IT-технологій.</p>
            <p>Ми маємо досвід у сфері блокчейну, електронної комерції, соціальних мереж і пошукової системи.</p>
            <p>Ми працюємо зі стартапами, клієнтами, які просто хочуть веб-сайт і роблять свій внесок у веб-сайт
            процес розробки. Наша мета — забезпечити успішний запуск і постійний успіх продукту.</p>
          </font>
          </div>
        </div> 
      `;
      document.getElementById('service-info').innerHTML=`
      <h3>Ідентичність бренду</h3>
              <p>
              Ми українська компанія з більш ніж 10-річною історією, якою керують засновники з різним технічним досвідом.
              </p>
      `;
      document.getElementById('service-info2').innerHTML=`
      <h3>Творча ідея</h3>
              <p>
              Ми можемо створити унікальний дизайн для вас. Якщо ви не знаєте, що вам подобається, ми можемо допомогти вам вибрати.
              </p>
      `;
      document.getElementById('service-info3').innerHTML=`
      <h3>Чудова підтримка</h3>
              <p>
              Після завершення проекту ми супроводжуємо клієнтів. Надаємо консультації та технічну підтримку клієнтів. 
              Одна година нашого часу коштує 10 доларів.
              </p>
      `;
      document.getElementById('service-info4').innerHTML=`
      <h3>Професійний дизайн</h3>
              <p>
              Робимо професійний дизайн - робимо швидко і якісно, використовуючи новітні рішення.
              </p>
      `;
      document.getElementById('service-info5').innerHTML=`
      <h3>Розробка застосунків</h3>
              <p>
              Від перевірки ідеї до підтримки продукту, ми пропонуємо повний цикл розробки програмного забезпечення,
              взаємодія розробників і спеціалістів служби інформаційних технологій.
              </p>
      `;
      document.getElementById('service-info6').innerHTML=`
      <h3>Розробка мобільних застосунків</h3>
              <p>
              Від перевірки ідеї до підтримки продукту ми пропонуємо повний цикл розробки програмного забезпечення.
              </p>
      `;




      document.getElementById('about-us').innerHTML=
      `<div class="container">
      <div class="row">
        <div class="col-sm-6">
          <div class="about-info wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
            <h2>Про нас</h2>
            <p>Ми українська компанія з більш ніж 10-річною історією, якою керують засновники з різним технічним досвідом.</p>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="our-skills wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
            <div class="single-skill wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
              <p class="lead">Взаємодія з користувачем</p>
              <div class="progress">
                <div class="progress-bar progress-bar-primary six-sec-ease-in-out" role="progressbar"  aria-valuetransitiongoal="95">95%</div>
              </div>
            </div>
            <div class="single-skill wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="400ms">
              <p class="lead">Веб дизайн</p>
              <div class="progress">
                <div class="progress-bar progress-bar-primary six-sec-ease-in-out" role="progressbar"  aria-valuetransitiongoal="85">85%</div>
              </div>
            </div>
            <div class="single-skill wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="500ms">
              <p class="lead">Програмування</p>
              <div class="progress">
                <div class="progress-bar progress-bar-primary six-sec-ease-in-out" role="progressbar"  aria-valuetransitiongoal="80">80%</div>
              </div>
            </div>
            <div class="single-skill wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="500ms">
              <p class="lead">Веб-програмування</p>
              <div class="progress">
                <div class="progress-bar progress-bar-primary six-sec-ease-in-out" role="progressbar"  aria-valuetransitiongoal="80">80%</div>
              </div>
            </div>
            <div class="single-skill wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
              <p class="lead">Фанати</p>
              <div class="progress">
                <div class="progress-bar progress-bar-primary six-sec-ease-in-out" role="progressbar"  aria-valuetransitiongoal="85">85%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;




    document.getElementById('portfolio').innerHTML=
      `<div class="container">
      <div class="row">
        <div class="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
          <h2>Наше портфоліо</h2>
          <p>Ми працюємо не тільки з клієнтами, а й маємо власні продукти, якими користуємося самі</p>
        </div>
      </div> 
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3">
          <div class="folio-item wow fadeInRightBig" data-wow-duration="1000ms" data-wow-delay="300ms">
            <div class="folio-image">
              <img class="img-responsive" src="/public/images/portfolio/asbook.png" alt="">
            </div>
            <div class="overlay">
              <div class="overlay-content">
                <div class="overlay-text">
                  <div class="folio-info">
                    <h3>Asbook</h3>
                    <p>Інформаційно-пошукова система для наукових публікацій</p>
                  </div>
                  <div class="folio-overview">
                    <span class="folio-link"><a class="folio-read-more" href="#" data-single_url="portfolio-single.html" ><i class="fa fa-link"></i></a></span>
                    <span class="folio-expand"><a href="/public/images/portfolio/asbook.png" data-lightbox="portfolio"><i class="fa fa-search-plus"></i></a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="folio-item wow fadeInLeftBig" data-wow-duration="1000ms" data-wow-delay="400ms">
            <div class="folio-image">
              <img class="img-responsive" src="/public/images/portfolio/crm.png" alt="">
            </div>
            <div class="overlay">
              <div class="overlay-content">
                <div class="overlay-text">
                  <div class="folio-info">
                    <h3>CRM</h3>
                    <p>Програмне забезпечення для управління взаємовідносинами з клієнтами</p>
                  </div>
                  <div class="folio-overview">
                    <span class="folio-link"><a class="folio-read-more" href="#" data-single_url="portfolio-single.html" ><i class="fa fa-link"></i></a></span>
                    <span class="folio-expand"><a href="/public/images/portfolio/crm.png" data-lightbox="portfolio"><i class="fa fa-search-plus"></i></a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="folio-item wow fadeInRightBig" data-wow-duration="1000ms" data-wow-delay="500ms">
            <div class="folio-image">
              <img class="img-responsive" src="/public/images/portfolio/frontend.png" alt="">
            </div>
            <div class="overlay">
              <div class="overlay-content">
                <div class="overlay-text">
                  <div class="folio-info">
                    <h3>Frondend developer</h3>
                    <p>Особистий сайт розробника Front End</p>
                  </div>
                  <div class="folio-overview">
                    <span class="folio-link"><a class="folio-read-more" href="#" data-single_url="portfolio-single.html" ><i class="fa fa-link"></i></a></span>
                    <span class="folio-expand"><a href="/public/images/portfolio/frontend.png" data-lightbox="portfolio"><i class="fa fa-search-plus"></i></a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="folio-item wow fadeInLeftBig" data-wow-duration="1000ms" data-wow-delay="600ms">
            <div class="folio-image">
              <img class="img-responsive" src="/public/images/portfolio/technics.png" alt="">
            </div>
            <div class="overlay">
              <div class="overlay-content">
                <div class="overlay-text">
                  <div class="folio-info">
                    <h3>Technics</h3>
                    <p>Пошукова система техніки</p>
                  </div>
                  <div class="folio-overview">
                    <span class="folio-link"><a class="folio-read-more" href="#" data-single_url="portfolio-single.html" ><i class="fa fa-link"></i></a></span>
                    <span class="folio-expand"><a href="/public/images/portfolio/technics.png" data-lightbox="portfolio"><i class="fa fa-search-plus"></i></a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="folio-item wow fadeInRightBig" data-wow-duration="1000ms" data-wow-delay="700ms">
            <div class="folio-image">
              <img class="img-responsive" src="/public/images/portfolio/crm2.png" alt="">
            </div>
            <div class="overlay">
              <div class="overlay-content">
                <div class="overlay-text">
                  <div class="folio-info">
                    <h3>CMS</h3>
                    <p>Програмне забезпечення системи керування контентом</p>
                  </div>
                  <div class="folio-overview">
                    <span class="folio-link"><a class="folio-read-more" href="#" data-single_url="portfolio-single.html" ><i class="fa fa-link"></i></a></span>
                    <span class="folio-expand"><a href="/public/images/portfolio/crm2.png" data-lightbox="portfolio"><i class="fa fa-search-plus"></i></a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="folio-item wow fadeInLeftBig" data-wow-duration="1000ms" data-wow-delay="800ms">
            <div class="folio-image">
              <img class="img-responsive" src="/public/images/portfolio/psycology.png" alt="">
            </div>
            <div class="overlay">
              <div class="overlay-content">
                <div class="overlay-text">
                  <div class="folio-info">
                    <h3>Psycology</h3>
                    <p>Сайти з інформаційної психології</p>
                  </div>
                  <div class="folio-overview">
                    <span class="folio-link"><a class="folio-read-more" href="#" data-single_url="portfolio-single.html" ><i class="fa fa-link"></i></a></span>
                    <span class="folio-expand"><a href="/public/images/portfolio/psycology.png" data-lightbox="portfolio"><i class="fa fa-search-plus"></i></a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="folio-item wow fadeInRightBig" data-wow-duration="1000ms" data-wow-delay="900ms">
            <div class="folio-image">
              <img class="img-responsive" src="/public/images/portfolio/search.JPG" alt="">
            </div>
            <div class="overlay">
              <div class="overlay-content">
                <div class="overlay-text">
                  <div class="folio-info">
                    <h3>Search system</h3>
                    <p>Пошукове системне програмне забезпечення</p>
                  </div>
                  <div class="folio-overview">
                    <span class="folio-link"><a class="folio-read-more" href="#" data-single_url="portfolio-single.html" ><i class="fa fa-link"></i></a></span>
                    <span class="folio-expand"><a href="/public/images/portfolio/search.JPG" data-lightbox="portfolio"><i class="fa fa-search-plus"></i></a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="folio-item wow fadeInLeftBig" data-wow-duration="1000ms" data-wow-delay="1000ms">
            <div class="folio-image">
              <img class="img-responsive" src="/public/images/portfolio/fashions.PNG" alt="">
            </div>
            <div class="overlay">
              <div class="overlay-content">
                <div class="overlay-text">
                  <div class="folio-info">
                    <h3>Sisters fashions</h3>
                    <p>Модний магазин</p>
                  </div>
                  <div class="folio-overview">
                    <span class="folio-link"><a class="folio-read-more" href="#" data-single_url="portfolio-single.html" ><i class="fa fa-link"></i></a></span>
                    <span class="folio-expand"><a href="/public/images/portfolio/fashions.PNG" data-lightbox="portfolio"><i class="fa fa-search-plus"></i></a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;



    document.getElementById('team').innerHTML=`
    <div class="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="300ms">
    <h2>Команда</h2>
    <p>Компанія ItDynamics була заснована в 2017 році двома веб-програмістами — Олександром Мартиненко та Валерією Орловою.
    Олександр і Валерія працювали над складними веб-додатками, тому було легко вирішити, чим буде займатися компанія. 
    З першого дня мета полягала в тому, щоб створити компанію, яка допомагає своїм клієнтам створювати масштабоване та 
    багатофункціональне програмне забезпечення рішення найефективнішим способом, використовуючи стек сучасних технологій.</p>
    </div>
    `;


    document.getElementById('member').innerHTML=`
    <div class="col-sm-4">
            <div class="team-member wow flipInY" data-wow-duration="1000ms" data-wow-delay="500ms">
              <div class="member-image">
                <img class="img-responsive" src="/public/images/team/Designer.JPG" alt="">
              </div>
              <div class="member-info" id="member">
                <h3>Володимир Мартиненко</h3>
                <h4>UI/UX дизайнер</h4>
              </div>
              <div class="social-icons">
                <ul>
                  <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                  <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                  <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                  <li><a class="rss" href="#"><i class="fa fa-rss"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="team-member wow flipInY" data-wow-duration="1000ms" data-wow-delay="800ms">
              <div class="member-image">
                <img class="img-responsive" src="/public/images/team/developer.jpg" alt="">
              </div>
              <div class="member-info">
                <h3>Валерія Олегівна</h3>
                <h4>Розробник</h4>
              </div>
              <div class="social-icons">
                <ul>
                  <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                  <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                  <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                  <li><a class="rss" href="#"><i class="fa fa-rss"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="team-member wow flipInY" data-wow-duration="1000ms" data-wow-delay="1100ms">
              <div class="member-image">
                <img class="img-responsive" src="/public/images/team/developer2.jpg" alt="">
              </div>
              <div class="member-info">
                <h3>Олександр Мартиненко</h3>
                <h4>Розробник</h4>
              </div>
              <div class="social-icons">
                <ul>
                  <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                  <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                  <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                  <li><a class="rss" href="#"><i class="fa fa-rss"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
    `;


    document.getElementById('features').innerHTML=`
    <div class="container">
      <div class="row count">
        <div class="col-sm-4 col-xs-6 wow fadeInLeft">
          <h3>50+</h3>
          <p>Проекти</p>
        </div>
        <div class="col-sm-4 col-xs-6 wow fadeInLeft">
          <h3 class="timer">70</h3>                    
          <p>Сучасні сайти</p>
        </div> 
        <div class="col-sm-4 col-xs-6 wow fadeInLeft">                 
          <h3>24/7</h3>
          <p>Швидка підтримка</p>
        </div>                 
      </div>
    </div>
    `;



    document.getElementById('our_dev').innerText='Наш стек технологій розробки';



    document.getElementById('twitter').innerHTML=`
    <div>
      <a class="twitter-left-control" href="#twitter-carousel" role="button" data-slide="prev"><i class="fa fa-angle-left"></i></a>
      <a class="twitter-right-control" href="#twitter-carousel" role="button" data-slide="next"><i class="fa fa-angle-right"></i></a>
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-sm-offset-2">
            <div class="twitter-icon text-center">
              <i class="fa fa-twitter"></i>
              <h4>Тематичні дослідження</h4>
            </div>
            <div id="twitter-carousel" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="item active wow fadeIn" data-wow-duration="1000ms" data-wow-delay="300ms">
                  <p>5 речей, які слід включити в дизайн веб-сайту психолога чи терапевта<a href="#">
                    <img src="/public/images/psycology.webp">
                    <span></span></a></p>
                </div>
                <div class="item">
                  <p>App CRM з відкритим кодом<a href="#">
                    <img src="/public/images/odoo-crm-ventas-openinnova.png">
                    <span></span></a></p>
                </div>
                <div class="item">                                
                <p>Комерційна платформа PayPal<a href="#">
                    <img src="/public/images/paypal.jpeg">
                    <span></span></a></p>
                </div>
                <div class="item">                                
                <p>Система гаманців<a href="#">
                    <img src="/public/images/wallet.jpg">
                    <span></span></a></p>
                </div>
              </div>                        
            </div>                    
          </div>
        </div>
      </div>
    </div>
    `;



    document.getElementById('blog').innerHTML=`<div class="container">
    <div class="row">
      <div class="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="300ms">
      </div>
    </div>
    <div class="blog-posts">
      <div class="row">
        <div class="col-sm-4 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="400ms">
          <div class="post-thumb">
            <a href="#"><img class="img-responsive" src="images/blog/1.jpg" alt=""></a> 
            <div class="post-meta">
              <span><i class="fa fa-comments-o"></i> 3 коментарі</span>
              <span><i class="fa fa-heart"></i> 0 лайків</span> 
            </div>
            <div class="post-icon">
              <i class="fa fa-pencil"></i>
            </div>
          </div>
          <div class="entry-header">
            <h3 id="building_apps"><a href="#">Створення додатків у 2023 році: технології, витрати, поради</a></h3>
            <span class="date">26 червня 2014 року</span>
            <span class="cetagory">в <strong>Розвиток</strong></span>
          </div>
          <div class="entry-content">
            <p>Відкрийте для себе основи розробки програм і те, як запустити власне рішення з максимальною ефективністю, прочитавши посібник від Itdynamic</p>
          </div>
        </div>
        <div class="col-sm-4 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="600ms">
          <div class="post-thumb">
            <div id="post-carousel"  class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#post-carousel" data-slide-to="0" class="active"></li>
                <li data-target="#post-carousel" data-slide-to="1"></li>
                <li data-target="#post-carousel" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="item active">
                  <a href="#"><img class="img-responsive" src="images/blog/2.jpg" alt=""></a>
                </div>
                <div class="item">
                  <a href="#"><img class="img-responsive" src="images/blog/1.jpg" alt=""></a>
                </div>
                <div class="item">
                  <a href="#"><img class="img-responsive" src="images/blog/3.jpg" alt=""></a>
                </div>
              </div>                               
              <a class="blog-left-control" href="#post-carousel" role="button" data-slide="prev"><i class="fa fa-angle-left"></i></a>
              <a class="blog-right-control" href="#post-carousel" role="button" data-slide="next"><i class="fa fa-angle-right"></i></a>
            </div>                            
            <div class="post-meta">
              <span><i class="fa fa-comments-o"></i> 3 коментарі</span>
              <span><i class="fa fa-heart"></i> 0 лайків</span> 
            </div>
            <div class="post-icon">
              <i class="fa fa-picture-o"></i>
            </div>
          </div>
          <div class="entry-header">
            <h3 id="wearable_trends"><a href="#">Тенденції щодо одягу: особисте та ділове використання у 2023 році</a></h3>
            <span class="date">26 червня 2014 року</span>
            <span class="cetagory">в <strong>Розвиток</strong></span>
          </div>
          <div class="entry-content">
            <p>Тенденції носимих пристроїв: особисте та ділове використання у 2022 році Носимі пристрої залишаються одним із найпопулярніших трендів, що, у свою чергу, також...</p>
          </div>
        </div>
        <div class="col-sm-4 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="800ms">
          <div class="post-thumb">
            <a href="#"><img class="img-responsive" src="images/blog/3.jpg" alt=""></a>
            <div class="post-meta">
              <span><i class="fa fa-comments-o"></i> 3 коментарі</span>
              <span><i class="fa fa-heart"></i> 0 лайків</span> 
            </div>
            <div class="post-icon">
              <i class="fa fa-video-camera"></i>
            </div>
          </div>
          <div class="entry-header">
            <h3><a href="#">Розробка веб-сайтів електронної комерції: що вам потрібно знати</a></h3>
            <span class="date">26 червня 2014 року</span>
            <span class="cetagory">в <strong>Розвитку</strong></span>
          </div>
          <div class="entry-content">
            <p>З огляду на 12-24 мільйони активних сайтів електронної комерції по всьому світу, онлайн-магазину легко загубитися в натовпі...</p>
          </div>
        </div>                    
      </div>
      <div class="load-more wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
        <a href="#" class="btn-loadmore" style="pointer-events: none;"><i class="fa fa-repeat"></i> Завантажити ще</a>
      </div>                
    </div>
  </div>`;



  document.getElementById('col-sm-6').innerHTML=`<div class="contact-info wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
  <ul class="address">
    <li><i class="fa fa-map-marker"></i> <span> Адреса:</span> вулиця Космонавтів 18, кв. 105, 14034<br>Чернігів, Україна </li>
    <li><i class="fa fa-phone"></i> <span> Телефон:</span> +38 (095) 280 28 28  </li>
    <li><i class="fa fa-envelope"></i> <span> Електронна пошта:</span><a href="mailto:almp@i.ua"> almp@i.ua</a></li>
    <li><i class="fa fa-globe"></i> <span> Сайт:</span> <a href="/">www.itdynamics.com.ua</a></li>
  </ul>
</div>`;
    })
  })




  
