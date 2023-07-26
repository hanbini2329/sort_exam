$(function () {
			
  //parseInt => 뒤에 붙은 단위 빼고 숫자만 뽑아냄
  //정규표현식
  //.replace(/[^0-9]/g, '') => 0~9이외에 숫자가 아닌것은 공백으로 바꾸라는 뜻
  //^ => 제외하고 라는 뜻으로 사용

  $(".search ul li").on("click", function () {
    $(".search ul li").removeClass("active");
    $(this).addClass("active");
    const box = $("#content >ul>li")
    const n = $(this).attr("class");
    Target(n.substr(4, 1))

    function Target(m) {
      if (m == 0) {
        //var 반복가능해서 사용함
        var Boxs = box.sort(function (a, b) {
          return new Date($(a).find("span.date").text()) >
            new Date($(b).find("span.date").text()) ? -1 :
            new Date($(a).find("span.date").text()) <
            new Date($(b).find("span.date").text()) ? 1 : 0;
        })
      } else if (m == 1) {
        //내림차순
        var Boxs = box.sort(function (a, b) {
          return parseInt($(a).find("span.price").text().replace(/[^0-9]/g, '')) >
            parseInt($(b).find("span.price").text().replace(/[^0-9]/g, '')) ? -1 :
            parseInt($(a).find("span.price").text().replace(/[^0-9]/g, '')) <
            parseInt($(b).find("span.price").text().replace(/[^0-9]/g, '')) ? 1 :
            0;
        })

      } else {
        //오름차순
        var Boxs = box.sort(function (a, b) {
          return parseInt($(a).find("span.price").text().replace(/[^0-9]/g, '')) <
            parseInt($(b).find("span.price").text().replace(/[^0-9]/g, '')) ? -1 :
            parseInt($(a).find("span.price").text().replace(/[^0-9]/g, '')) >
            parseInt($(b).find("span.price").text().replace(/[^0-9]/g, '')) ? 1 :
            0;
        })
      }
      $("#content >ul").html(Boxs)
    }
  });


});