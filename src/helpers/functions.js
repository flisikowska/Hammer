import imagesLoaded from "imagesloaded";

export const resizeGridItem = (item) => {
  var grid = document.getElementsByClassName("products")[0];
  var rowHeight = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
  );
  var rowGap = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
  );
  var rowSpan = Math.ceil(
    (item.querySelector(".content").getBoundingClientRect().height + rowGap) /
      (rowHeight + rowGap)
  );
  item.style.gridRowEnd = "span " + rowSpan;
};

export const ResizeGridItems = () => {
  function resizeInstance(instance) {
    var item = instance.elements[0];
    resizeGridItem(item);
  }
  var allItems = document.getElementsByClassName("grid-item");
  for (var x = 0; x < allItems.length; x++) {
    imagesLoaded(allItems[x], resizeInstance);
  }
};

export const ExecuteWhen = (
  func,
  checkConditionFunc,
  poolingInterval = 100
) => {
  let interval = setInterval(() => {
    if (checkConditionFunc()) {
      clearInterval(interval);
      func();
    }
  }, poolingInterval);
};
