const tabs = document.querySelectorAll('[data-bs-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
const tabsScroll = document.querySelector('#scroll-top');
const listTabsScroll = document.querySelectorAll('[data-tab-scroll]');

// console.log("TABS SCROLL", listTabsScroll)

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        const target = document.querySelector(tab.dataset.bsTarget)
        // const targetScroll = document.querySelector(tabsScroll.dataset.scrollTarget)

        const tabAtual = tab.classList[1];

        listTabsScroll.forEach(tabScroll => {
          tabScroll.classList.add('display-none');
     
          if(tabAtual === 'nav-terca'){
            tabScroll.classList.remove('display-none');
           
          }
        })

        tabContents.forEach(tabContent => {
          tabContent.classList.add('display-none');
          // tabScroll.classList.add('display-none');
        })
        target.classList.remove('display-none');
        // tabScroll.classList.remove('display-none');


        tabs.forEach(tab => {
            tab.classList.remove('active');
        })

        e.target.classList.add("active");
    })
  })


  var scrollTop = document.getElementById('scroll-top');
  var scrollTop2 = document.getElementById('scroll-top2');
  var scrollTop2 = document.getElementById('scroll-top3');
  var scrollTab = document.getElementById('scroll-tab');
  var scrollTab2 = document.getElementById('scroll-tab2');
  var scrollTab3 = document.getElementById('scroll-tab3');
  scrollTop.onscroll = function () {
      scrollTab.scrollLeft = scrollTop.scrollLeft;
  };

  // scrollTop2.onscroll = function () {
  //   scrollTab2.scrollLeft = scrollTop2.scrollLeft;
  // };

  // scrollTop3.onscroll = function () {
  //   scrollTab3.scrollLeft = scrollTop3.scrollLeft;
  // };

