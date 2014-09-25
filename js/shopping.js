/**
 * Created by champika on 9/24/14.
 */
function calculate()
{
    'use strict';
    var total;

    var qty=document.getElementById("quantity").value;
    var taxRate=document.getElementById("tax").value;
    var price=document.getElementById("price").value;
    var discount=document.getElementById("discount").value;

    total = qty * price;

    taxRate /= 100;
    taxRate++;
    total *= taxRate;

    total -= discount;

    total=total.toFixed(2);

    document.getElementById("total").value=total;

    return false;
}// end of the calculate function

function init()
{
    'use strict';
    var shoppingForm= document.getElementById("shoppingForm");
    shoppingForm.onsubmit=calculate;
}