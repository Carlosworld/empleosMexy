function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(17.960841, -102.195900),
    zoom:15
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var marker = new google.maps.Marker({
    position: { lat: 17.960841, lng: -102.195900 },
    map: map,
  });
}

var swiper1 = new Swiper('#row-swiper-bg .swiper-container', {
  lazy: true,
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: false,
  navigation: false
});

$(function () {
  var nua = navigator.userAgent;
  var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1);
  if (isAndroid) {
    $('select.form-control').removeClass('form-control').css('width', '100%')
  }
  document.getElementById("year").innerHTML = new Date().getFullYear();
  var last_known_scroll_position = 0;
  var ticking = false;
  var bp = 50;
  var w = window.innerWidth;
  var h = window.innerHeight;

  window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(function() {
        doSomething(last_known_scroll_position);
        ticking = false;
      });
    }
    ticking = true;
  });

  if ( w <= 1920 ) {
    document.getElementById('col-header').style.height = h + 'px';
    document.getElementById('col-header').style.lineHeight = h + 'px';
  }

  var section1w = window.scrollY + document.querySelector('#section-1').getBoundingClientRect().top - 400;
  var section2w = window.scrollY + document.querySelector('#section-2').getBoundingClientRect().top - 400;
  var section3w = window.scrollY + document.querySelector('#section-3').getBoundingClientRect().top - 400;

  var auxTop = 0, scrollingDown = true;
  function doSomething(scroll_pos) {
    scrollingDown = ( scroll_pos > auxTop );
    // console.log( scroll_pos );

    var element;
    if ( scroll_pos < section1w ) {
      element = document.getElementById("btn-home");
      document.getElementById("btn-about").classList.remove("active");
      document.getElementById("btn-services").classList.remove("active");
      document.getElementById("btn-contact").classList.remove("active");
      if (!element.classList.contains('active')) {
        element.classList.add("active");
      }
    }
    if ( scroll_pos >= section1w && scroll_pos < section2w ) {
      element = document.getElementById("btn-about");
      document.getElementById("btn-home").classList.remove("active");
      document.getElementById("btn-services").classList.remove("active");
      document.getElementById("btn-contact").classList.remove("active");
      if (!element.classList.contains('active')) {
        element.classList.add("active");
      }
    }
    if ( scroll_pos >= section2w && scroll_pos < section3w ) {
      element = document.getElementById("btn-services");
      document.getElementById("btn-home").classList.remove("active");
      document.getElementById("btn-about").classList.remove("active");
      document.getElementById("btn-contact").classList.remove("active");
      if (!element.classList.contains('active')) {
        element.classList.add("active");
      }
    }
    if ( scroll_pos >= section3w ) {
      element = document.getElementById("btn-contact");
      document.getElementById("btn-home").classList.remove("active");
      document.getElementById("btn-services").classList.remove("active");
      document.getElementById("btn-about").classList.remove("active");
      if (!element.classList.contains('active')) {
        element.classList.add("active");
      }
    }

    if ( scroll_pos >= 200 ) {
      if ( !$('#header').hasClass('active') ) {
        $('#header').addClass('active');
      }
    } else {
      $('#header').removeClass('active');
    }
    section1();
    section2();
    if ( scroll_pos <= 600 ) {
      document.getElementById('col-header').style.backgroundPosition = '50% ' + (bp - ( scroll_pos / 5 )) + '%';
      document.getElementById('h-title').style.transform = 'translateY(-' + ( scroll_pos / 3 ) + 'px)';
    }
  }

  var sec1_h = document.getElementById('section-1').clientHeight;
  function section1() {
    var section1_scrollTop     = $(window).scrollTop(),
        section1_elementOffset = $('#section-1').offset().top,
        section1_distance      = (section1_elementOffset - section1_scrollTop);
    // console.log( 'section-1', section1_distance );
    if ( section1_distance <= ( h / 2 ) ) {
      var per1 = (section1_scrollTop -  ( h / 2 )) * 100 / sec1_h;
      document.getElementById('section-1-col').style.backgroundPosition = '50% ' + ((per1 / 3) >= 0 ? 25 + (per1 / 3) : 0) + '%';
      document.getElementById('section-1-col-img-1').style.backgroundPosition = '50% ' + ((100 - per1) >= 0 ? (100 - per1) : 0) + '%';
      document.getElementById('section-1-col-img-2').style.backgroundPosition = '50% ' + ((100 - per1) >= 0 ? (100 - per1) : 0) + '%';
    }
  }

  var sec2_h = document.getElementById('section-2').clientHeight;
  function section2() {
    var section2_scrollTop     = $(window).scrollTop(),
        section2_elementOffset = $('#section-2').offset().top,
        section2_distance      = (section2_elementOffset - section2_scrollTop);
    // console.log( 'section-2', section2_distance );
    if ( section2_distance <= (h / 2) ) {
      var per = ((section2_scrollTop -  ( h / 2 )) * 100 / sec2_h) - 100;
      // console.log( 'algo', per );
      document.getElementById('section-2-col-img-1').style.backgroundPosition = '50% ' + (((100 - per) >= 0 && (100 - per) <= 100) ? (100 - per) : 0) + '%';
      document.getElementById('section-2-col-img-2').style.backgroundPosition = '50% ' + (((100 - per) >= 0 && (100 - per) <= 100) ? (100 - per) : 0) + '%';
      document.getElementById('section-2-col-img-3').style.backgroundPosition = '50% ' + (((100 - per) >= 0 && (100 - per) <= 100) ? (100 - per) : 0) + '%';
      document.getElementById('section-2-col-img-4').style.backgroundPosition = '50% ' + (((100 - per) >= 0 && (100 - per) <= 100) ? (100 - per) : 0) + '%';
    } else {
      document.getElementById('section-2-col-img-1').style.backgroundPosition = '50% 100%';
      document.getElementById('section-2-col-img-2').style.backgroundPosition = '50% 100%';
      document.getElementById('section-2-col-img-3').style.backgroundPosition = '50% 100%';
      document.getElementById('section-2-col-img-4').style.backgroundPosition = '50% 100%';
    }
  }

  $(window).scroll(function(){
    // get the scroll position of the document + half the window height
    var scrollTop = $(document).scrollTop() + ($(window).height() / 2);
    var positions = [];

    // push each of the items we want to check against to an array with their position and selector
    $('.section').each(function(){
      $(this).removeClass("active");
      positions.push({position:$(this).position().top, element: $(this)});
    });

    var getClosest = closest(positions,scrollTop);
    getClosest.addClass("active"); // the element closest to the middle of the screen
    // console.log( getClosest.attr("data-page") );
  });

  // finds the nearest position (from an array of objects) to the specified number
  function closest(array, number) {
    var num = 0;
    for (var i = array.length - 1; i >= 0; i--) {
      if(Math.abs(number - array[i].position) < Math.abs(number - array[num].position)){
        num = i;
      }
    }
    return array[num].element;
  }

  $('#btn-home').on('click', function() {
    var element = document.getElementById("row-header");
    element.scrollIntoView({block: "center", behavior: "smooth"});
  });

  $('#btn-about').on('click', function() {
    var element = document.getElementById("section-1");
    element.scrollIntoView({block: "center", behavior: "smooth"});
  });

  $('#btn-services').on('click', function() {
    var element = document.getElementById("section-2");
    element.scrollIntoView({block: "center", behavior: "smooth"});
  });

  $('#btn-contact').on('click', function() {
    var element = document.getElementById("section-3");
    element.scrollIntoView({block: "center", behavior: "smooth"});
  });

  // const url = 'http://localhost:8000/api/';
  const url = 'https://ra.labormexy.com/api/';

  fetch(`${ url }advStatus`, {
    method: 'POST',
    body: JSON.stringify({ page: 'icamar' }),
    headers: {
      'Content-Type': 'application/json'
    },
  })
      .then(response => response.json())
      .then(json => {
        if ( json.data && json.data.length ) {
          const data = json.data;
          for ( var i = 0; i < data.length; i++ ) {
            if ( data[i].subtitle === 'banner' ) {
              $('#carouselExampleCaptions ol').append( `<li data-target="#carouselExampleCaptions" data-slide-to="${ i }" class="${ i === 0 ? 'active' : '' }"></li>` )
              $('#carouselExampleCaptions .carousel-inner').append(
                  `<div class="carousel-item ${ i === 0 ? 'active' : '' }" style="
                    width: 100%;
                    height: 300px;
                    line-height: 300px;
                    text-align: center;
                    background-image: url(${ url + 'storage/' + data[i].img_name + '.jpg' });
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                  "></div>`
              );
            }
            if ( data[i].subtitle === 'anuncio' ) {
              $('#row-notices .swiper-wrapper').append(
                  `<div class="swiper-slide">
                      <div class="card h-100" style="width: 18rem;">
                          <img src="${ url + 'storage/' + data[i].img_name + '.jpg' }" class="card-img-top" style="height: 180px;" alt="">
                          <div class="card-body">
                              <h6 class="card-title font-weight-bold">${ data[i].title }</h6>
                              <p class="card-text font-weight-bold text-justify">${ data[i].content }</p>
                          </div>
                      </div>
                  </div>`
              );
            }
          }
          $('.carousel-item').show();
          var swiper2 = new Swiper('#row-notices .swiper-container', {
            slidesPerView: 4,
            spaceBetween: 10,
            slidesPerGroup: 1,
            autoplay: {
              delay: 5000,
              disableOnInteraction: false,
            },
            loopFillGroupWithBlank: true,
            pagination: false,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            breakpoints: {
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }
          });
        }
      })



});
