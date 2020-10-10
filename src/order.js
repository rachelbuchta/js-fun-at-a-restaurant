
function takeOrder(newOrder, deliveryOrders) {

    if (newOrder.status === 'accepted') {
      deliveryOrders.push(newOrder);
    };

    if (deliveryOrders.length > 3) {
      deliveryOrders.pop();
    };

    return deliveryOrders;

};

function refundOrder(newOrder, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber == newOrder) {
      deliveryOrders.splice(i,1);
    }
  }
};



function listItems(deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    var items = `${deliveryOrders[0].item}, ${deliveryOrders[1].item}, ${deliveryOrders[2].item}`;
  }
  return items;
};



function searchOrder(deliveryOrders, newOrder) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === newOrder) {
      return true;
    }
  }
  return false;
};









module.exports = {
   takeOrder,
   refundOrder,
   listItems,
   searchOrder
}
