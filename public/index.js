function getColor(stock){
    if(stock === "GME"){
        return 'rgba(61, 161, 61, 0.7)'
    }
    if(stock === "MSFT"){
        return 'rgba(209, 4, 25, 0.7)'
    }
    if(stock === "DIS"){
        return 'rgba(18, 4, 209, 0.7)'
    }
    if(stock === "BNTX"){
        return 'rgba(166, 43, 158, 0.7)'
    }
}

async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');


    /*
    const response = await fetch('https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BTNX&interval=1day&apikey=a58b6af85d0f4ec28dd979f1a20dccfa')
    const result = await response.json()
   
    const GME = result.GME
    const MSFT = result.MSFT
    const DIS = result.DIS
    const BNTX = result.BNTX*/

    const { GME, MSFT, DIS, BNTX } = mockData;

    const stocks = [GME, MSFT, DIS, BNTX];


    console.log(stocks)

// Bonus Note: 
// Another way to write the above lines would to refactor it as:
   // const {GME, MSFT, DIS, BTNX} = result 
// This is an example of "destructuring" an object
// "Destructuring" creates new variables from an object or an array



    // Time Chart
    new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
            labels: stocks[0].values.map(value => value.datetime),
            datasets: stocks.map(stock => ({
                label: stock.meta.symbol,
                backgroundColor: getColor(stock.meta.symbol),
                borderColor: getColor(stock.meta.symbol),
                data: stock.values.map(value => parseFloat(value.high))
            }))
        }
    });

        
    stocks.forEach( stock => stock.values.reverse())


    
      

    
    console.log(stocks)

    new Chart(highestPriceChartCanvas.getContext('2d'), {
        type: 'bar', //'line',
        data: {
            labels: 'high',
            datasets: stocks.map(stock => ({
                label: 'high',
                backgroundColor: getColor(stock.meta.symbol),
                borderColor: getColor(stock.meta.symbol),
                data: stock.values.map(value => parseFloat(value.high))
            }))
        }
})}


main()