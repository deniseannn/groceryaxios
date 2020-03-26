import {Bar} from 'vue-chartjs'
import axios from 'axios'

export default{
    extends:Bar,
    data: () => ({
        results:[],
        chartdata: {
          //labels:['2020-3-05',4,5,6],
          labels:[],
          datasets: [
            {
              label: 'Latest Covid Cases in United States',
               data:[],
              //backgroundColor:['aqua','lightgreen','red','orange'],
              borderWidth:0.5,
              borderColor:"red",
              backgroundColor:'red',
              fill:false
            }
          ]
          
        },
        options: {
           
            scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }

                }]
            }
        }
      }),
    methods:{
        // add some comments DCCSD
    
    fetchData : function(){
        axios.get('http://covid19.soficoop.com/country/us').then(response=>{
      
        this.results=response.data.snapshots.pop()
        console.log(response.data)
        console.log(this.results)
        for(let key in this.results){
            this.chartdata.datasets[0].data.push(this.results[key])
            this.chartdata.labels.push(key+'')
            
        }
        this.renderChart(this.chartdata,this.options)
            
    })
    
    }
    
    },
     mounted(){
        //console.log('Do I come here')
        this.fetchData()
        
     }

    
    
    
}