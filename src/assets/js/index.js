function filtersVilibility(){
  const div = document.getElementById("catalog_filter_menu");
  const catalog = document.getElementById("catalog__items-ul");

  if(div.style.display === "block"){
    div.style.display = "none";
    catalog.style.maxWidth = "1280px";
    console.log('if');
  } else {
    div.style.display = "block";
    catalog.style.maxWidth = "1000px";
    console.log('else');
  }
}

function hideFilterItem(filterId){
  const filterElement = document.getElementById(filterId);

  if(filterElement.style.display === "none"){
    filterElement.style.display = "block";
  } else {
    filterElement.style.display = "none";
  }
}

function hideFilterItemGrid(filterId){
  const filterElement = document.getElementById(filterId);

  if(filterElement.style.display === "none"){
    filterElement.style.display = "grid";
  } else {
    filterElement.style.display = "none";
  }
}
