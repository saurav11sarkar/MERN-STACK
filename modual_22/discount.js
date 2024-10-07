function ticketPrice(ticketQuentity){
    const first100Rate=100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuentity <= 100){
        return `price : ${ticketQuentity * first100Rate}`;
    }else if(ticketQuentity <= 200){
        const first100price = 100* first100Rate;
        const restTicketprice = ticketQuentity - 100;
        const secent100Price = restTicketprice * second100Rate;
        return `price : ${first100price + secent100Price}`;
    }else{
        const first100price = 100* first100Rate;
        const secent100Price = 100 * second100Rate;
        const therrdprice = ticketQuentity-200;
        const therd100price = therrdprice * restTicketRate
        return `price : ${first100price + secent100Price + therd100price}`;
    }
}

console.log(ticketPrice(120));