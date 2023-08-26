function takeOrder(order, orderList){
  if (orderList.length<3){
    orderList.push(order)
  }
}

function refundOrder(orderNumber, orderList) {
  for (var i = 0; i < orderList.length; i++) {
    if (orderList[i].orderNumber === orderNumber) {
      orderList.splice([i], 1);
    }
  }
}

function listItems(orderList){
  var items = []
  for (var i=0;i<orderList.length;i++){
  items.push(orderList[i].item)
  }
  return items.join(", ")
}

function searchOrder(orderList,itemToSearch){
  for (var i=0;i<orderList.length;i++){
      if (orderList[i].item===itemToSearch){
       return true
      }
  } return false
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}