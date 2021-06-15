$(document).ready(() => {
  let $btns = $(".project-area .button-group button");

  $btns.click((e) => {
    console.log("click");
    $(".project-area.button-group button").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");
    $(".project-area .grid").isotope({
      filter: selector,
    });

    return false;
  });
});
