const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f54bcc39f1msh7c56d223f61ac73p18770fjsn968fef932be9',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};
fetch('https://covid-193.p.rapidapi.com/statistics', options)
	.then(response => response.json())
	.then((data)=>{
       
        data.response.map((e)=>{
           
            console.log(e);
           
            let myResult1 = ` <option class="option1" selected>${e.country}</option>`
            let mySelect = document.querySelector('.inp')
            console.log(myResult1);
            mySelect.innerHTML +=myResult1
            
            
           mySelect.addEventListener('change',()=>{
        
                
                
                
              
                let myResult = `<h5 class = 'container'>Active Cases : ${e.cases.active}</h5>
                <h5 class = 'container'>New Cases : ${e.cases.new}</h5>
                <h5 class = 'container'>Recovered Cases: ${e.cases.recovered}</h5>
                <h5 class = 'container'>Population: ${e.population}</h5>
                <h5 class = 'container'>Total Cases: ${e.cases.total}</h5>
                <h5 class = 'container'>Total Tests: ${e.tests.total}</h5>
                
                `
                let myDiv1 = document.querySelector('.sub-main')
               if (mySelect.value===e.country){

                myDiv1.innerHTML = myResult
                return e

               }
            
                
        })


});
    })
    // ActiveCases: 7832
    // Case_Fatality_Rate: 1.51
    // Continent: "Africa"
    // Country: "DRC"
    // Deaths_1M_pop: 15
    // Infection_Risk: 0.1
    // NewCases: 0
    // NewDeaths: 0
    // NewRecovered: 0
    // Population: "95399455"
    // Recovery_Proporation: 90.03
    // Serious_Critical: 0
    // Test_Percentage: 0.89
    // Tests_1M_Pop: 8875
    // ThreeLetterSymbol: "cod"
    // TotCases_1M_Pop: 971
    // TotalCases: 92588
    // TotalDeaths: 1396
    // TotalRecovered: "83360"
    // TotalTests: "846704"
    // TwoLetterSymbol: "cd"
    // id: "cd1dfb64-b4f2-4661-b570-66a98c26eeb1"
    // one_Caseevery_X_ppl: 1030
    // one_Deathevery_X_ppl: 68338
    // one_Testevery_X_ppl: 113
    // rank: 131


    // <h5 class = 'container'>New Cases : ${e. NewCases}</h5>
    //     <h5 class = 'container'>New Deaths :${e.NewDeaths}</h5>
    //     <h5 class = 'container'>New Recovered:${e.NewRecovered}</h5>
    //     <h5 class = 'container'>Population:${e.Population}</h5>
    //     <h5 class = 'container'>Recovery Proporation:${e.Recovery_Proporation}</h5>
    //     <h5 class = 'container'>Test Percentage:${e.Test_Percentage}</h5>
    //     <h5 class = 'container'>Total Cases:${e.TotalCases}</h5>
    //     <h5 class = 'container'>Total Recovered : ${e.TotalRecovered}</h5>
    //     <h5 class = 'container'>Total Tests:${e.TotalTests}</h5>


    // how to create a table?
    
