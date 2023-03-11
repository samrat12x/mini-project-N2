var count_item=0;
document.cookie=`c=${count_item}`
$(".btn").click(function(){
  count_item++;
  $("#count_item").html(count_item);

  console.log(`you have ${count_item } itemss`)
})


console.log(`you have ${count_item } itemss`)