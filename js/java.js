document.addEventListener('DOMContentLoaded', function () {
  var gnbMenuItems = document.querySelectorAll('.gnb_menu li');
  var menuSub = document.querySelector('.menu_sub');

  gnbMenuItems.forEach(function (item) {
      item.addEventListener('mouseover', function () {
          menuSub.style.display = 'block';
      });

      item.addEventListener('mouseout', function () {
          menuSub.style.display = 'none';
      });
  });

  // 메뉴가 사라지지 않도록 메뉴 영역에 마우스 오버/아웃 이벤트 추가
  menuSub.addEventListener('mouseover', function () {
      menuSub.style.display = 'block';
  });

  menuSub.addEventListener('mouseout', function () {
      menuSub.style.display = 'none';
  });
});
