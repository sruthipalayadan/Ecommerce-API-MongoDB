


async function orderTotalAmount(items)
{
    console.log("service_items:",items);
    var total_amount=0;
    for(var item of items)
        {
            total_amount= total_amount+((item.qty)*(item.unit_price));  
        }
        console.log("tot:",total_amount);
      return total_amount;

    
};


module.exports={orderTotalAmount};