"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

$(function () {
  // *** звездный рейтинг ***
  $('.rate-yo').rateYo({
    ratedFill: '#1c62cd',
    spacing: '7px',
    normalFill: '#c4c4c4'
  }); //   *** mobile menu ***

  var $menuBtn = document.querySelector('.menu__btn');
  var $menuMobileList = document.querySelector('.menu-mobile__list');
  $menuBtn.addEventListener('click', function () {
    $menuMobileList.classList.toggle('menu-mobile__list--active');
  }); // ********** слайдер header ***********

  $('.banner-section__slider').slick({
    dots: true,
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btn--prev"><img src="images/arrow-left.svg" alt="" /></button>',
    nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btn--next"><img src="images/arrow-right.svg" alt="" /></button>',
    responsive: [{
      breakpoint: 969,
      settings: {
        arrows: false
      }
    }]
  }); // *********** слайдер product ***********

  $('.products-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="products-slider__slider-btn products-slider__slider-btn--prev"><img src="images/arrow-black-left.svg" alt="" /></button>',
    nextArrow: '<button class="products-slider__slider-btn products-slider__slider-btn--next"><img src="images/arrow-black-right.svg" alt="" /></button>'
  }); // ***********  Реализация табов по элементам (универсальная)  *************

  var $searchTabsItem = document.querySelectorAll('.tab');
  var $searchContentItem = document.querySelectorAll('.tabs-content'); // выпиливает класс

  var removeClass = function removeClass(el, cls) {
    el.classList.remove(cls);
  }; // аналог метода siblings, возвращает ближайших соседей элемента


  function siblings(elem) {
    return Array.from(elem.parentNode.children).filter(function (el) {
      return el !== elem;
    });
  } // прохожусь по колекции с кнопками выбора search


  $searchTabsItem.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault(); // формирую массивы детей елементов только тех табов по которым кликнул (категории)

      var tabsItems = _toConsumableArray(e.target.parentNode.children); // формирую массивы детей елементов только тех табов по которым кликнул (популярные товары)


      var contentItems = _toConsumableArray(e.target.parentNode.nextSibling.nextSibling.children); //при клике сначала у всех кнопок выпиливаю active


      var _iterator = _createForOfIteratorHelper(tabsItems),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var i = _step.value;
          removeClass(i, 'tab--active');
        } //при клике сначала у всех search выпиливаю active

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(contentItems),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _i = _step2.value;
          removeClass(_i, 'tabs-content--active');
        } // потом добавляю класс active кнопке по которой кликнул

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      this.classList.add('tab--active'); // получаю атрибут кнопки по которой кликнул, он совпадает с id формы

      var attr = this.getAttribute('href'); // добавляю форме с таким id класс active

      document.querySelector(attr).classList.add('tabs-content--active');
    });
  }); // ************  Реализация кнопки избранное **************
  // избранное в карточке товаров (сердце)

  var $favorite = document.querySelectorAll('.product-item__favorite');

  var _iterator3 = _createForOfIteratorHelper($favorite),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var item = _step3.value;
      item.addEventListener('click', function () {
        this.classList.toggle('product-item__favorite--active');
      });
    } // ************  Плагин стилизации инпутов formstyler **************

  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  $('.filter-style').styler();
  var $filterItemDrop = document.querySelectorAll('.aside-filter__drop');

  var _iterator4 = _createForOfIteratorHelper($filterItemDrop),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _item = _step4.value;

      _item.addEventListener('click', function () {
        this.classList.toggle('aside-filter__drop--active');
        this.nextElementSibling.classList.toggle('aside-filter__content--active');
      });
    } // ************  Плагин стилизации инпута range slider **************

  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  $('.js-range-slider').ionRangeSlider({
    type: 'double',
    min: 100,
    max: 10000,
    from: 200
  });
  var $filterExtra = document.querySelector('.filter__extra');

  if ($filterExtra !== null) {
    $filterExtra.addEventListener('click', function () {
      this.classList.toggle('aside-filter__drop--active');
      this.nextElementSibling.classList.toggle('aside-filter__content--active');
    });
  } // ******** Кнопки смены сетки карточек *************
  //   const $catalogFilterButtons = document.querySelectorAll('.catalog__filter-button')


  var $filterBtnGrid = document.querySelector('.catalog__filter-btn--grid');
  var $filterBtnLine = document.querySelector('.catalog__filter-btn--line');
  var $productItemWrappers = document.querySelectorAll('.product-item__wrapper');
  $filterBtnGrid.addEventListener('click', function () {
    this.classList.add('catalog__filter-button--active');
    $filterBtnLine.classList.remove('catalog__filter-button--active');

    var _iterator5 = _createForOfIteratorHelper($productItemWrappers),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var itemWrapper = _step5.value;
        itemWrapper.classList.remove('product-item__wrapper--list');
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  });
  $filterBtnLine.addEventListener('click', function () {
    this.classList.add('catalog__filter-button--active');
    $filterBtnGrid.classList.remove('catalog__filter-button--active');

    var _iterator6 = _createForOfIteratorHelper($productItemWrappers),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var itemWrapper = _step6.value;
        itemWrapper.classList.add('product-item__wrapper--list');
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyIkIiwicmF0ZVlvIiwicmF0ZWRGaWxsIiwic3BhY2luZyIsIm5vcm1hbEZpbGwiLCIkbWVudUJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiRtZW51TW9iaWxlTGlzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJzbGljayIsImRvdHMiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiYXJyb3dzIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCIkc2VhcmNoVGFic0l0ZW0iLCJxdWVyeVNlbGVjdG9yQWxsIiwiJHNlYXJjaENvbnRlbnRJdGVtIiwicmVtb3ZlQ2xhc3MiLCJlbCIsImNscyIsInJlbW92ZSIsInNpYmxpbmdzIiwiZWxlbSIsIkFycmF5IiwiZnJvbSIsInBhcmVudE5vZGUiLCJjaGlsZHJlbiIsImZpbHRlciIsImZvckVhY2giLCJpdGVtIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFic0l0ZW1zIiwidGFyZ2V0IiwiY29udGVudEl0ZW1zIiwibmV4dFNpYmxpbmciLCJpIiwiYWRkIiwiYXR0ciIsImdldEF0dHJpYnV0ZSIsIiRmYXZvcml0ZSIsInN0eWxlciIsIiRmaWx0ZXJJdGVtRHJvcCIsIm5leHRFbGVtZW50U2libGluZyIsImlvblJhbmdlU2xpZGVyIiwidHlwZSIsIm1pbiIsIm1heCIsIiRmaWx0ZXJFeHRyYSIsIiRmaWx0ZXJCdG5HcmlkIiwiJGZpbHRlckJ0bkxpbmUiLCIkcHJvZHVjdEl0ZW1XcmFwcGVycyIsIml0ZW1XcmFwcGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLENBQUMsQ0FBQyxZQUFZO0FBQ1o7QUFFQUEsRUFBQUEsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjQyxNQUFkLENBQXFCO0FBQ25CQyxJQUFBQSxTQUFTLEVBQUUsU0FEUTtB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Rm1ELGdEQUczQitCLG9CQUgyQjtBQUFBOztBQUFBO0FBR25ELDZEQUE4QztBQUFBLFlBQXJDQyxXQUFxQztBQUM1Q0EsUUFBQUEsV0FBVyxDQUFDbEQsU0FBWixDQUFzQmtCLE1BQXRCLENBQTZCLDZCQUE3QjtBQUNEO0FBTGtEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNcEQsR0FORDtBQU9BOEIsRUFBQUEsY0FBYyxDQUFDakQsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsWUFBWTtBQUNuRCxTQUFLQyxTQUFMLENBQWVtQyxHQUFmLENBQW1CLGdDQUFuQjtBQUNBWSxJQUFBQSxjQUFjLENBQUMvQyxTQUFmLENBQXlCa0IsTUFBekIsQ0FBZ0MsZ0NBQWhDOztBQUZtRCxnREFHM0IrQixvQkFIMkI7QUFBQTs7QUFBQTtBQUduRCw2REFBOEM7QUFBQSxZQUFyQ0MsV0FBcUM7QUFDNUNBLFFBQUFBLFdBQVcsQ0FBQ2xELFNBQVosQ0FBc0JtQyxHQUF0QixDQUEwQiw2QkFBMUI7QUFDRDtBQUxrRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTXBELEdBTkQ7QUFPRCxDQXZKQSxDQUFEIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XG4gIC8vICoqKiDQt9Cy0LXQt9C00L3Ri9C5INGA0LXQudGC0LjQvdCzICoqKlxuXG4gICQoJy5yYXRlLXlvJykucmF0ZVlvKHtcbiAgICByYXRlZEZpbGw6ICcjMWM2MmNkJyxcbiAgICBzcGFjaW5nOiAnN3B4JyxcbiAgICBub3JtYWxGaWxsOiAnI2M0YzRjNCcsXG4gIH0pXG5cbiAgLy8gICAqKiogbW9iaWxlIG1lbnUgKioqXG4gIGNvbnN0ICRtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2J0bicpXG4gIGNvbnN0ICRtZW51TW9iaWxlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LW1vYmlsZV9fbGlzdCcpXG4gICRtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICRtZW51TW9iaWxlTGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LW1vYmlsZV9fbGlzdC0tYWN0aXZlJylcbiAgfSlcblxuICAvLyAqKioqKioqKioqINGB0LvQsNC50LTQtdGAIGhlYWRlciAqKioqKioqKioqKlxuXG4gICQoJy5iYW5uZXItc2VjdGlvbl9fc2xpZGVyJykuc2xpY2soe1xuICAgIGRvdHM6IHRydWUsXG4gICAgcHJldkFycm93OlxuICAgICAgJzxidXR0b24gY2xhc3M9XCJiYW5uZXItc2VjdGlvbl9fc2xpZGVyLWJ0biBiYW5uZXItc2VjdGlvbl9fc2xpZGVyLWJ0bi0tcHJldlwiPjxpbWcgc3JjPVwiaW1hZ2VzL2Fycm93LWxlZnQuc3ZnXCIgYWx0PVwiXCIgLz48L2J1dHRvbj4nLFxuICAgIG5leHRBcnJvdzpcbiAgICAgICc8YnV0dG9uIGNsYXNzPVwiYmFubmVyLXNlY3Rpb25fX3NsaWRlci1idG4gYmFubmVyLXNlY3Rpb25fX3NsaWRlci1idG4tLW5leHRcIj48aW1nIHNyYz1cImltYWdlcy9hcnJvdy1yaWdodC5zdmdcIiBhbHQ9XCJcIiAvPjwvYnV0dG9uPicsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA5NjksXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSlcblxuICAvLyAqKioqKioqKioqKiDRgdC70LDQudC00LXRgCBwcm9kdWN0ICoqKioqKioqKioqXG5cbiAgJCgnLnByb2R1Y3RzLXNsaWRlcicpLnNsaWNrKHtcbiAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgcHJldkFycm93OlxuICAgICAgJzxidXR0b24gY2xhc3M9XCJwcm9kdWN0cy1zbGlkZXJfX3NsaWRlci1idG4gcHJvZHVjdHMtc2xpZGVyX19zbGlkZXItYnRuLS1wcmV2XCI+PGltZyBzcmM9XCJpbWFnZXMvYXJyb3ctYmxhY2stbGVmdC5zdmdcIiBhbHQ9XCJcIiAvPjwvYnV0dG9uPicsXG4gICAgbmV4dEFycm93OlxuICAgICAgJzxidXR0b24gY2xhc3M9XCJwcm9kdWN0cy1zbGlkZXJfX3NsaWRlci1idG4gcHJvZHVjdHMtc2xpZGVyX19zbGlkZXItYnRuLS1uZXh0XCI+PGltZyBzcmM9XCJpbWFnZXMvYXJyb3ctYmxhY2stcmlnaHQuc3ZnXCIgYWx0PVwiXCIgLz48L2J1dHRvbj4nLFxuICB9KVxuXG4gIC8vICoqKioqKioqKioqICDQoNC10LDQu9C40LfQsNGG0LjRjyDRgtCw0LHQvtCyINC/0L4g0Y3Qu9C10LzQtdC90YLQsNC8ICjRg9C90LjQstC10YDRgdCw0LvRjNC90LDRjykgICoqKioqKioqKioqKipcblxuICBjb25zdCAkc2VhcmNoVGFic0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJylcbiAgY29uc3QgJHNlYXJjaENvbnRlbnRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYnMtY29udGVudCcpXG5cbiAgLy8g0LLRi9C/0LjQu9C40LLQsNC10YIg0LrQu9Cw0YHRgVxuICBjb25zdCByZW1vdmVDbGFzcyA9IChlbCwgY2xzKSA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbHMpXG4gIH1cblxuICAvLyDQsNC90LDQu9C+0LMg0LzQtdGC0L7QtNCwIHNpYmxpbmdzLCDQstC+0LfQstGA0LDRidCw0LXRgiDQsdC70LjQttCw0LnRiNC40YUg0YHQvtGB0LXQtNC10Lkg0Y3Qu9C10LzQtdC90YLQsFxuICBmdW5jdGlvbiBzaWJsaW5ncyhlbGVtKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbS5wYXJlbnROb2RlLmNoaWxkcmVuKS5maWx0ZXIoKGVsKSA9PiBlbCAhPT0gZWxlbSlcbiAgfVxuXG4gIC8vINC/0YDQvtGF0L7QttGD0YHRjCDQv9C+INC60L7Qu9C10LrRhtC40Lgg0YEg0LrQvdC+0L/QutCw0LzQuCDQstGL0LHQvtGA0LAgc2VhcmNoXG4gICRzZWFyY2hUYWJzSXRlbS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgLy8g0YTQvtGA0LzQuNGA0YPRjiDQvNCw0YHRgdC40LLRiyDQtNC10YLQtdC5INC10LvQtdC80LXQvdGC0L7QsiDRgtC+0LvRjNC60L4g0YLQtdGFINGC0LDQsdC+0LIg0L/QviDQutC+0YLQvtGA0YvQvCDQutC70LjQutC90YPQuyAo0LrQsNGC0LXQs9C+0YDQuNC4KVxuICAgICAgbGV0IHRhYnNJdGVtcyA9IFsuLi5lLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuXVxuXG4gICAgICAvLyDRhNC+0YDQvNC40YDRg9GOINC80LDRgdGB0LjQstGLINC00LXRgtC10Lkg0LXQu9C10LzQtdC90YLQvtCyINGC0L7Qu9GM0LrQviDRgtC10YUg0YLQsNCx0L7QsiDQv9C+INC60L7RgtC+0YDRi9C8INC60LvQuNC60L3Rg9C7ICjQv9C+0L/Rg9C70Y/RgNC90YvQtSDRgtC+0LLQsNGA0YspXG4gICAgICBsZXQgY29udGVudEl0ZW1zID0gW1xuICAgICAgICAuLi5lLnRhcmdldC5wYXJlbnROb2RlLm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLmNoaWxkcmVuLFxuICAgICAgXVxuXG4gICAgICAvL9C/0YDQuCDQutC70LjQutC1INGB0L3QsNGH0LDQu9CwINGDINCy0YHQtdGFINC60L3QvtC/0L7QuiDQstGL0L/QuNC70LjQstCw0Y4gYWN0aXZlXG4gICAgICBmb3IgKGxldCBpIG9mIHRhYnNJdGVtcykge1xuICAgICAgICByZW1vdmVDbGFzcyhpLCAndGFiLS1hY3RpdmUnKVxuICAgICAgfVxuICAgICAgLy/Qv9GA0Lgg0LrQu9C40LrQtSDRgdC90LDRh9Cw0LvQsCDRgyDQstGB0LXRhSBzZWFyY2gg0LLRi9C/0LjQu9C40LLQsNGOIGFjdGl2ZVxuICAgICAgZm9yIChsZXQgaSBvZiBjb250ZW50SXRlbXMpIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoaSwgJ3RhYnMtY29udGVudC0tYWN0aXZlJylcbiAgICAgIH1cbiAgICAgIC8vINC/0L7RgtC+0Lwg0LTQvtCx0LDQstC70Y/RjiDQutC70LDRgdGBIGFjdGl2ZSDQutC90L7Qv9C60LUg0L/QviDQutC+0YLQvtGA0L7QuSDQutC70LjQutC90YPQu1xuICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCd0YWItLWFjdGl2ZScpXG4gICAgICAvLyDQv9C+0LvRg9GH0LDRjiDQsNGC0YDQuNCx0YPRgiDQutC90L7Qv9C60Lgg0L/QviDQutC+0YLQvtGA0L7QuSDQutC70LjQutC90YPQuywg0L7QvSDRgdC+0LLQv9Cw0LTQsNC10YIg0YEgaWQg0YTQvtGA0LzRi1xuICAgICAgbGV0IGF0dHIgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAvLyDQtNC+0LHQsNCy0LvRj9GOINGE0L7RgNC80LUg0YEg0YLQsNC60LjQvCBpZCDQutC70LDRgdGBIGFjdGl2ZVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhdHRyKS5jbGFzc0xpc3QuYWRkKCd0YWJzLWNvbnRlbnQtLWFjdGl2ZScpXG4gICAgfSlcbiAgfSlcblxuICAvLyAqKioqKioqKioqKiogINCg0LXQsNC70LjQt9Cw0YbQuNGPINC60L3QvtC/0LrQuCDQuNC30LHRgNCw0L3QvdC+0LUgKioqKioqKioqKioqKipcbiAgLy8g0LjQt9Cx0YDQsNC90L3QvtC1INCyINC60LDRgNGC0L7Rh9C60LUg0YLQvtCy0LDRgNC+0LIgKNGB0LXRgNC00YbQtSlcbiAgY29uc3QgJGZhdm9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtaXRlbV9fZmF2b3JpdGUnKVxuXG4gIGZvciAobGV0IGl0ZW0gb2YgJGZhdm9yaXRlKSB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgncHJvZHVjdC1pdGVtX19mYXZvcml0ZS0tYWN0aXZlJylcbiAgICB9KVxuICB9XG5cbiAgLy8gKioqKioqKioqKioqICDQn9C70LDQs9C40L0g0YHRgtC40LvQuNC30LDRhtC40Lgg0LjQvdC/0YPRgtC+0LIgZm9ybXN0eWxlciAqKioqKioqKioqKioqKlxuXG4gICQoJy5maWx0ZXItc3R5bGUnKS5zdHlsZXIoKVxuXG4gIGNvbnN0ICRmaWx0ZXJJdGVtRHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hc2lkZS1maWx0ZXJfX2Ryb3AnKVxuXG4gIGZvciAobGV0IGl0ZW0gb2YgJGZpbHRlckl0ZW1Ecm9wKSB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnYXNpZGUtZmlsdGVyX19kcm9wLS1hY3RpdmUnKVxuICAgICAgdGhpcy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZSgnYXNpZGUtZmlsdGVyX19jb250ZW50LS1hY3RpdmUnKVxuICAgIH0pXG4gIH1cblxuICAvLyAqKioqKioqKioqKiogINCf0LvQsNCz0LjQvSDRgdGC0LjQu9C40LfQsNGG0LjQuCDQuNC90L/Rg9GC0LAgcmFuZ2Ugc2xpZGVyICoqKioqKioqKioqKioqXG4gICQoJy5qcy1yYW5nZS1zbGlkZXInKS5pb25SYW5nZVNsaWRlcih7XG4gICAgdHlwZTogJ2RvdWJsZScsXG4gICAgbWluOiAxMDAsXG4gICAgbWF4OiAxMDAwMCxcbiAgICBmcm9tOiAyMDAsXG4gIH0pXG5cbiAgY29uc3QgJGZpbHRlckV4dHJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlcl9fZXh0cmEnKVxuICBpZiAoJGZpbHRlckV4dHJhICE9PSBudWxsKSB7XG4gICAgJGZpbHRlckV4dHJhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdhc2lkZS1maWx0ZXJfX2Ryb3AtLWFjdGl2ZScpXG4gICAgICB0aGlzLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCdhc2lkZS1maWx0ZXJfX2NvbnRlbnQtLWFjdGl2ZScpXG4gICAgfSlcbiAgfVxuXG4gIC8vICoqKioqKioqINCa0L3QvtC/0LrQuCDRgdC80LXQvdGLINGB0LXRgtC60Lgg0LrQsNGA0YLQvtGH0LXQuiAqKioqKioqKioqKioqXG4gIC8vICAgY29uc3QgJGNhdGFsb2dGaWx0ZXJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGFsb2dfX2ZpbHRlci1idXR0b24nKVxuICBjb25zdCAkZmlsdGVyQnRuR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRhbG9nX19maWx0ZXItYnRuLS1ncmlkJylcbiAgY29uc3QgJGZpbHRlckJ0bkxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0YWxvZ19fZmlsdGVyLWJ0bi0tbGluZScpXG4gIGNvbnN0ICRwcm9kdWN0SXRlbVdyYXBwZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAnLnByb2R1Y3QtaXRlbV9fd3JhcHBlcidcbiAgKVxuXG4gICRmaWx0ZXJCdG5HcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnY2F0YWxvZ19fZmlsdGVyLWJ1dHRvbi0tYWN0aXZlJylcbiAgICAkZmlsdGVyQnRuTGluZS5jbGFzc0xpc3QucmVtb3ZlKCdjYXRhbG9nX19maWx0ZXItYnV0dG9uLS1hY3RpdmUnKVxuICAgIGZvciAobGV0IGl0ZW1XcmFwcGVyIG9mICRwcm9kdWN0SXRlbVdyYXBwZXJzKSB7XG4gICAgICBpdGVtV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdwcm9kdWN0LWl0ZW1fX3dyYXBwZXItLWxpc3QnKVxuICAgIH1cbiAgfSlcbiAgJGZpbHRlckJ0bkxpbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdjYXRhbG9nX19maWx0ZXItYnV0dG9uLS1hY3RpdmUnKVxuICAgICRmaWx0ZXJCdG5HcmlkLmNsYXNzTGlzdC5yZW1vdmUoJ2NhdGFsb2dfX2ZpbHRlci1idXR0b24tLWFjdGl2ZScpXG4gICAgZm9yIChsZXQgaXRlbVdyYXBwZXIgb2YgJHByb2R1Y3RJdGVtV3JhcHBlcnMpIHtcbiAgICAgIGl0ZW1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtaXRlbV9fd3JhcHBlci0tbGlzdCcpXG4gICAgfVxuICB9KVxufSlcbiJdLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
