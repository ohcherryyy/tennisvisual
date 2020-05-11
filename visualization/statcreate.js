function creategraph(statdata,id,winnername,losername){   
    var winloss=[]
    var win={}
    var lose={}
    win['name']=winnername
    lose['name']=losername
    var winner=[]
    var loser=[]
    for(var i=0;i<statdata.length;i++){      
        if(statdata[i].id==id){            
            switch(statdata[i].statslabel){
                case('Aces'):
                    winner.push(Number(statdata[i].winner))
                    loser.push(Number(statdata[i].loser))
                    break;
                case('1st Serve'):
                    winner.push(Number(statdata[i].wstat))
                    loser.push(Number(statdata[i].lstat))
                    break;
                case('1st Serve Points Won'):
                    winner.push(Number(statdata[i].wstat))
                    loser.push(Number(statdata[i].lstat))
                    break;
                case('2nd Serve Points Won'):
                    winner.push(Number(statdata[i].wstat))
                    loser.push(Number(statdata[i].lstat))
                    break;
                case('Break Points Converted'):
                    winner.push(Number(statdata[i].wstat))
                    loser.push(Number(statdata[i].lstat))
                    break;
            }
        }
    }
    win['value']=winner
    lose['value']=loser
    winloss.push(win)
    winloss.push(lose)

    var winlossf=[]
    var winf={}
    var losef={}
    winf['name']=winnername
    losef['name']=losername
    var winnerf=[]
    var loserf=[]
    for(var i=0;i<statdata.length;i++){      
        if(statdata[i].id==id){            
            switch(statdata[i].statslabel){
                case('Double Faults'):
                    winnerf.push(Number(statdata[i].winner))
                    loserf.push(Number(statdata[i].loser))
                    break;
                case('1st Serve Return Points Won'):
                    winnerf.push(100-Number(statdata[i].wstat))
                    loserf.push(100-Number(statdata[i].lstat))
                    break;
                case('2nd Serve Return Points Won'):
                    winnerf.push(100-Number(statdata[i].wstat))
                    loserf.push(100-Number(statdata[i].lstat))
                    break;
                case('Break Points Saved'):
                    winnerf.push(100-Number(statdata[i].wstat))
                    loserf.push(100-Number(statdata[i].lstat))
                    break;
            }
        }
    }
    winf['value']=winnerf
    losef['value']=loserf
    winlossf.push(winf)
    winlossf.push(losef)

    option={
        title:{
            text:'制胜分与失误表现',
            left:'auto'
        },
        legend:{
            data:[winnername,losername]
        },
        tooltip: {
            trigger: 'axis'
        },
        radar:[
        {
            indicator:[
                {text:'Ace球'},
                {text:'一发成功率(%)',max:100},
                {text:'一发得分率(%)',max:100},
                {text:'二发得分率(%)',max:100},
                {text:'破发成功率(%)',max:100},
            ],
            center:['25%','50%'],
            radius:80
        },
        {
            indicator:[
                {text:'双发失误次数'},
                {text:'被破发率(%)',max:100},
                {text:'一发接发球失误率(%)',max:100},
                {text:'二发接发球失误率(%)',max:100},
                
            ],
            center:['75%','50%'],
            radius:70
        }

    ],
        series:[
            {
                type:'radar',
                data:winloss,
                tooltip:{
                    trigger:'item'
                },
                areaStyle:{},
            },
            {
                type:'radar',
                data:winlossf,
                tooltip:{
                    trigger:'item'
                },
                areaStyle:{},
                radarIndex:1,
            }
        ]
    }
    return option
}

function servicecreate(statdata,id,winnername,losername){
    var ace=[]
    var df=[]
    var firstsuccess=[]
    var firstpoints=[]
    var secondpoints=[]
    for (var i=0;i<statdata.length;i++){
        if(statdata[i].id==id){    
            var winner={}
            var loser={}        
            switch(statdata[i].statslabel){
                case('Aces'):   
                    winner['value']=Number(statdata[i].winner)   
                    loser['value']=Number(statdata[i].loser)
                    if(Number(statdata[i].winner)>Number(statdata[i].loser)){
                        winner['itemStyle']={}
                        winner['itemStyle']['borderColor']='rgba(0,0,0, 1)'
                        winner['itemStyle']['borderWidth']=3
                        ace.push(winner)
                        ace.push(loser)
                    }
                    else if(Number(statdata[i].winner)<Number(statdata[i].loser)){
                        loser['itemStyle']={}
                        loser['itemStyle']['borderColor']='rgba(0,0,0, 1)'
                        loser['itemStyle']['borderWidth']=3
                        ace.push(winner)
                        ace.push(loser)
                    }
                    else{
                        ace.push(winner)
                        ace.push(loser)
                    }
                    break;
                case('1st Serve'):
                    winner['value']=Number(statdata[i].wactual)   
                    loser['value']=Number(statdata[i].lactual)
                    if(Number(statdata[i].wactual)>Number(statdata[i].lactual)){
                        winner['itemStyle']={}
                        winner['itemStyle']['borderColor']='rgba(0,0,0, 1)'
                        winner['itemStyle']['borderWidth']=3
                        firstsuccess.push(winner)
                        firstsuccess.push(loser)
                    }
                    else if(Number(statdata[i].wactual)<Number(statdata[i].lactual)){
                        loser['itemStyle']={}
                        loser['itemStyle']['borderColor']='rgba(0,0,0, 1)'
                        loser['itemStyle']['borderWidth']=3
                        firstsuccess.push(winner)
                        firstsuccess.push(loser)
                    }
                    else{
                        firstsuccess.push(winner)
                        firstsuccess.push(loser)
                    }
                    break;
                case('1st Serve Points Won'):
                    winner['value']=Number(statdata[i].wactual)   
                    loser['value']=Number(statdata[i].lactual)
                    if(Number(statdata[i].wactual)>Number(statdata[i].lactual)){
                        winner['itemStyle']={}
                        winner['itemStyle']['borderColor']='rgba(0,0,0,1)'
                        winner['itemStyle']['borderWidth']=3
                        firstpoints.push(winner)
                        firstpoints.push(loser)
                    }
                    else if(Number(statdata[i].wactual)<Number(statdata[i].lactual)){
                        loser['itemStyle']={}
                        loser['itemStyle']['borderColor']='rgba(0,0,0, 1)'
                        loser['itemStyle']['borderWidth']=3
                        firstpoints.push(winner)
                        firstpoints.push(loser)
                    }
                    else{
                        firstpoints.push(winner)
                        firstpoints.push(loser)
                    }
                    break;
                case('2nd Serve Points Won'):
                    winner['value']=Number(statdata[i].wactual)   
                    loser['value']=Number(statdata[i].lactual)
                    if(Number(statdata[i].wactual)>Number(statdata[i].lactual)){
                        winner['itemStyle']={}
                        winner['itemStyle']['borderColor']='rgba(0,0,0, 1)'
                        winner['itemStyle']['borderWidth']=3
                        secondpoints.push(winner)
                        secondpoints.push(loser)
                    }
                    else if(Number(statdata[i].wactual)<Number(statdata[i].lactual)){
                        loser['itemStyle']={}
                        loser['itemStyle']['borderColor']='rgba(0,0,0, 1)'
                        loser['itemStyle']['borderWidth']=3
                        secondpoints.push(winner)
                        secondpoints.push(loser)
                    }
                    else{
                        secondpoints.push(winner)
                        secondpoints.push(loser)
                    }
                    break;
                case('Double Faults'):
                    winner['value']=Number(statdata[i].winner)   
                    loser['value']=Number(statdata[i].loser)
                    if(Number(statdata[i].winner)<Number(statdata[i].loser)){
                        winner['itemStyle']={}
                        winner['itemStyle']['borderColor']='rgba(0,0,0, 1)'
                        winner['itemStyle']['borderWidth']=3
                        df.push(winner)
                        df.push(loser)
                    }
                    else if(Number(statdata[i].winner)>Number(statdata[i].loser)){
                        loser['itemStyle']={}
                        loser['itemStyle']['borderColor']='rgba(0,0,0, 1)'
                        loser['itemStyle']['borderWidth']=3
                        df.push(winner)
                        df.push(loser)
                    }
                    else{
                        df.push(winner)
                        df.push(loser)
                    }
                    break;
            }
        }
    }
    
    option = {
        title:{
            text:'发球表现',
            left:'auto'
        },
        color:['#c23531','#2f4554'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            
                type: 'shadow' 
            }
        },
        legend: {
            data: ['Ace球', '双发失误次数', '一发成功次数', '一发得分次数', '二发得分次数']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            show:false
        },
        yAxis: {
            type: 'category',
            data: [winnername,losername]
        },
        series: [
            {
                name: 'Ace球',
                type: 'bar',
                stack: '发球数',
                label: {
                    show: true,
                    position: 'insideRight',

                },
                data: ace
            },
            {
                name: '双发失误次数',
                type: 'bar',
                stack: '发球数',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: df
            },
            {
                name: '一发成功次数',
                type: 'bar',
                stack: '发球数',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: firstsuccess
            },
            {
                name: '一发得分次数',
                type: 'bar',
                stack: '发球数',
                label: {
                    show: true,
                    position: 'insideRight',
                    
                },
                data: firstpoints
            },
            {
                name: '二发得分次数',
                type: 'bar',
                stack: '发球数',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: secondpoints
            }
        ]
    }
    return option;
}

function returncreate(statdata,id,winnername,losername){ 
    var firstpoints=[]
    var secondpoints=[]
    for (var i=0;i<statdata.length;i++){
        if(statdata[i].id==id){        
            var winner={}
            var loser={}    
            switch(statdata[i].statslabel){
                case('1st Serve Return Points Won'):
                    winner['value']=Number(statdata[i].wactual)  
                    loser['value']=Number(statdata[i].lactual)
                    if(Number(statdata[i].wactual)>Number(statdata[i].lactual)){
                        winner['itemStyle']={}
                        winner['itemStyle']['borderColor']='rgba(0,0,0, 1)'
                        winner['itemStyle']['borderWidth']=2
                        firstpoints.push(winner)
                        firstpoints.push(loser)
                    }
                    else if(Number(statdata[i].wactual)<Number(statdata[i].lactual)){
                        loser['itemStyle']={}
                        loser['itemStyle']['borderColor']='rgba(0,0,0, 1)'
                        loser['itemStyle']['borderWidth']=2
                        firstpoints.push(winner)
                        firstpoints.push(loser)
                    }
                    else{
                        firstpoints.push(winner)
                        firstpoints.push(loser)
                    }
                    break;
                case('2nd Serve Return Points Won'):
                    winner['value']=Number(statdata[i].wactual)  
                    loser['value']=Number(statdata[i].lactual)
                    if(Number(statdata[i].wactual)>Number(statdata[i].lactual)){
                        winner['itemStyle']={}
                        winner['itemStyle']['borderColor']='rgba(0,0,0, 1)'
                        winner['itemStyle']['borderWidth']=2
                        secondpoints.push(winner)
                        secondpoints.push(loser)
                    }
                    else if(Number(statdata[i].wactual)<Number(statdata[i].lactual)){
                        loser['itemStyle']={}
                        loser['itemStyle']['borderColor']='rgba(0,0,0, 1)'
                        loser['itemStyle']['borderWidth']=2
                        secondpoints.push(winner)
                        secondpoints.push(loser)
                    }
                    else{
                        secondpoints.push(winner)
                        secondpoints.push(loser)
                    }
                    break;
            }
        }
    }
    
    option = {
        title:{
            text:'接发球表现',
            left:'auto'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            
                type: 'shadow' 
            }
        },
        legend: {
            data: ['一发接发球得分次数', '二发接发球得分次数']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            show:false
        },
        yAxis: {
            type: 'category',
            data: [winnername,losername]
        },
        series: [
            {
                name: '一发接发球得分次数',
                type: 'bar',
                stack: '发球数',
                label: {
                    show: true,
                    position: 'insideRight',

                },
                data: firstpoints
            },
            {
                name: '二发接发球得分次数',
                type: 'bar',
                stack: '发球数',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: secondpoints
            },
        ]
    }
    return option;
}

function breakpointscreate(statdata,id,winnername,losername){
    for (var i=0;i<statdata.length;i++){
        if(statdata[i].id==id){    
            if(statdata[i].statslabel=='Break Points Saved')
            {
                winner=Number(statdata[i].wstat)
                wlabel=statdata[i].winner
                loser=Number(statdata[i].lstat)
                llabel=statdata[i].loser
            }
            }
        }
    
    option = {
        title:{
            text:'成功挽救破发点',
            left:'auto'
        },
        series: [
            {
                name: 'winner',
                type: 'pie',
                radius: ['60%','80%'],
                center: ['40%', '50%'],
                data: [
                    {value:winner},
                    {value:100-winner}
                ],
                labelLine:{
                    show:false
                },
                label:{
                    show:true,
                    position:'center',
                    formatter:winnername+':\n'+wlabel,
                    fontSize:15,
                    backgroundColor:'rgba(255,255,255,0.5)'
                },
            },
            {
                name: 'loser',
                type: 'pie',
                radius: ['60%','80%'],
                center: ['60%', '50%'],
                data: [
                    {value:loser},
                    {value:100-loser,name:''}
                ],
                labelLine:{
                    show:false
                },
                label:{
                    show:true,
                    position:'center',
                    formatter:losername+':\n'+llabel,
                    fontSize:15,
                    backgroundColor:'rgba(255,255,255,0.5)'
                },
            }
        ]
    };
    return option;
}

function breakpointrcreate(statdata,id,winnername,losername){
    var winnedata=[]
    var loserdata=[]
    for (var i=0;i<statdata.length;i++){
        if(statdata[i].id==id){  
            var winner={}
            var loser={}  
            if(statdata[i].statslabel=='Break Points Converted')
            {
                wlabel=statdata[i].winner
                llabel=statdata[i].loser
                if(Number(statdata[i].wstat)>Number(statdata[i].lstat)){
                    winner['value']=Number(statdata[i].wstat)
                    // winner['selected']=true
                    loser['value']=Number(statdata[i].lstat)
                    winnedata.push(winner)
                    winnedata.push(100-Number(statdata[i].wstat))
                    loserdata.push(loser)
                    loserdata.push(100-Number(statdata[i].lstat))
                }
                else if(Number(statdata[i].wstat)<Number(statdata[i].lstat)){
                    winner['value']=Number(statdata[i].wstat)
                    // loser['selected']=true
                    loser['value']=Number(statdata[i].lstat)
                    winnedata.push(winner)
                    winnedata.push(100-Number(statdata[i].wstat))
                    loserdata.push(loser)
                    loserdata.push(100-Number(statdata[i].lstat))
                }
                else{
                    winner['value']=Number(statdata[i].wstat)
                    loser['value']=Number(statdata[i].lstat)
                    winnedata.push(winner)
                    winnedata.push(100-Number(statdata[i].wstat))
                    loserdata.push(loser)
                    loserdata.push(100-Number(statdata[i].lstat))
                }
                break
            }
            }
        }
    
    option = {
        title:{
            text:'成功破发',
            left:'auto'
        },
        series: [
            {
                name: 'winner',
                type: 'pie',
                radius: ['60%','80%'],
                center: ['40%', '50%'],
                data: winnedata,
                labelLine:{
                    show:false
                },
                label:{
                    show:true,
                    position:'center',
                    formatter:winnername+':\n'+wlabel,
                    fontSize:15,
                    backgroundColor:'rgba(255,255,255,0.5)'
                },
            },
            {
                name: 'loser',
                type: 'pie',
                radius: ['60%','80%'],
                center: ['60%', '50%'],
                data: loserdata,
                labelLine:{
                    show:false
                },
                label:{
                    show:true,
                    position:'center',
                    formatter:losername+':\n'+llabel,
                    fontSize:15,
                    backgroundColor:'rgba(255,255,255,0.5)'
                },
            }
        ]
    };
    return option;
}

function wpersoncharts(statdata,id,sportsname){
    var first=[]
    var second=[]
    var third=[]
    var ace
    var dfaults

    for (var i=0;i<statdata.length;i++){
        var temp={}
        var temp1={}
        var temp2={}
        if(statdata[i].id==id){
            if(statdata[i].statslabel=="Aces"){
                ace=statdata[i].winner
            }
            if(statdata[i].statslabel=="Double Faults"){
                dfaults=statdata[i].winner
            }
            switch(statdata[i].statslabel){
                case('Service Points Won'):
                    temp['name']="发球局数"
                    temp['value']=statdata[i].wbase
                    first.push(temp)
                    break
                case('Return Points Won'):
                    temp['name']="接发球局数"
                    temp['value']=statdata[i].wbase
                    first.push(temp)
                    break
                case('1st Serve'):
                    temp['name']="一发成功次数"
                    temp['value']=statdata[i].wactual
                    second.push(temp)
                    break
                case('Double Faults'):
                    temp['name']="双误"
                    temp['value']=statdata[i].winner
                    second.push(temp)
                    break
                case('2nd Serve Points Won'):
                    temp['name']="二发成功次数"
                    temp['value']=statdata[i].wbase-dfaults
                    second.push(temp)
                    temp1['name']="二发得分次数"
                    temp1['value']=statdata[i].wactual
                    third.push(temp1)
                    temp2['name']="二发未得分次数"
                    temp2['value']=statdata[i].wbase-statdata[i].wactual
                    third.push(temp2)
                    break
                case('1st Serve Return Points Won'):
                    temp['name']="一发接球次数"
                    temp['value']=statdata[i].wbase
                    second.push(temp)
                    temp1['name']="一发接球得分次数"
                    temp1['value']=statdata[i].wactual
                    third.push(temp1)
                    temp2['name']="一发接球失分次数"
                    temp2['value']=statdata[i].wbase-statdata[i].wactual
                    third.push(temp2)
                    break
                case('2nd Serve Return Points Won'):
                    temp['name']="二发接球次数"
                    temp['value']=statdata[i].wbase
                    second.push(temp)
                    temp1['name']="二发接球得分次数"
                    temp1['value']=statdata[i].wactual
                    third.push(temp1)
                    temp2['name']="二发接球失分次数"
                    temp2['value']=statdata[i].wbase-statdata[i].wactual
                    third.push(temp2)
                    break
                case('Aces'):
                    temp['name']="Ace球次数"
                    temp['value']=statdata[i].winner
                    third.push(temp)
                    break
                case('1st Serve Points Won'):
                    temp['name']="除Ace球外一发得分次数"
                    temp['value']=statdata[i].wactual-ace
                    third.push(temp)
                    temp1['name']="一发未得分次数"
                    temp1['value']=statdata[i].wbase-statdata[i].wactual
                    third.push(temp1)
                    break
                }
                
        }
    }
    
    option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [
            {
                name:sportsname,
                type: 'pie',
                selectedMode: 'single',
                radius: [0, '30%'],
    
                label: {
                    position: 'inner'
                },
                labelLine: {
                    show: false
                },
                data: first
            },
            {
                name:sportsname,
                type: 'pie',
                selectedMode: 'single',
                radius: ['40%', '55%'],
    
                label: {
                    position: 'inner'
                },
                labelLine: {
                    show: false
                },
                data: second
            },
            {
                name: sportsname,
                type: 'pie',
                radius: ['65%', '80%'],
                label: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：{c}}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                   borderColor: '#aaa',
                borderWidth: 1,
                    borderRadius: 4,
                    //borderWidth:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // borderColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                           borderColor: '#aaa',
                            width: '100%',
                        borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                },
                data: third
            }
        ]
    };
    return option
}

function lpersoncharts(statdata,id,sportsname){
    var first=[]
    var second=[]
    var third=[]
    var ace
    var dfaults

    for (var i=0;i<statdata.length;i++){
        var temp={}
        var temp1={}
        var temp2={}
        if(statdata[i].id==id){
            if(statdata[i].statslabel=="Aces"){
                ace=statdata[i].loser
            }
            if(statdata[i].statslabel=="Double Faults"){
                dfaults=statdata[i].loser
            }
            switch(statdata[i].statslabel){
                case('Service Points Won'):
                    temp['name']="发球局数"
                    temp['value']=statdata[i].lbase
                    first.push(temp)
                    break
                case('Return Points Won'):
                    temp['name']="接发球局数"
                    temp['value']=statdata[i].lbase
                    first.push(temp)
                    break
                case('1st Serve'):
                    temp['name']="一发成功次数"
                    temp['value']=statdata[i].lactual
                    second.push(temp)
                    break
                case('Double Faults'):
                    temp['name']="双误"
                    temp['value']=statdata[i].loser
                    second.push(temp)
                    break
                case('2nd Serve Points Won'):
                    temp['name']="二发成功次数"
                    temp['value']=statdata[i].lbase-dfaults
                    second.push(temp)
                    temp1['name']="二发得分次数"
                    temp1['value']=statdata[i].lactual
                    third.push(temp1)
                    temp2['name']="二发未得分次数"
                    temp2['value']=statdata[i].lbase-statdata[i].lactual
                    third.push(temp2)
                    break
                case('1st Serve Return Points Won'):
                    temp['name']="一发接球次数"
                    temp['value']=statdata[i].lbase
                    second.push(temp)
                    temp1['name']="一发接球得分次数"
                    temp1['value']=statdata[i].lactual
                    third.push(temp1)
                    temp2['name']="一发接球失分次数"
                    temp2['value']=statdata[i].lbase-statdata[i].lactual
                    third.push(temp2)
                    break
                case('2nd Serve Return Points Won'):
                    temp['name']="二发接球次数"
                    temp['value']=statdata[i].lbase
                    second.push(temp)
                    temp1['name']="二发接球得分次数"
                    temp1['value']=statdata[i].lactual
                    third.push(temp1)
                    temp2['name']="二发接球失分次数"
                    temp2['value']=statdata[i].lbase-statdata[i].lactual
                    third.push(temp2)
                    break
                case('Aces'):
                    temp['name']="Ace球次数"
                    temp['value']=statdata[i].loser
                    third.push(temp)
                    break
                case('1st Serve Points Won'):
                    temp['name']="除Ace球外一发得分次数"
                    temp['value']=statdata[i].lactual-ace
                    third.push(temp)
                    temp1['name']="一发未得分次数"
                    temp1['value']=statdata[i].lbase-statdata[i].lactual
                    third.push(temp1)
                    break
                }
                
        }
    }
    
    option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [
            {
                name:sportsname,
                type: 'pie',
                selectedMode: 'single',
                radius: [0, '30%'],
    
                label: {
                    position: 'inner'
                },
                labelLine: {
                    show: false
                },
                data: first
            },
            {
                name:sportsname,
                type: 'pie',
                selectedMode: 'single',
                radius: ['40%', '55%'],
    
                label: {
                    position: 'inner'
                },
                labelLine: {
                    show: false
                },
                data: second
            },
            {
                name: sportsname,
                type: 'pie',
                radius: ['65%', '80%'],
                label: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                   borderColor: '#aaa',
                borderWidth: 1,
                    borderRadius: 4,
                    //borderWidth:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // borderColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                           borderColor: '#aaa',
                            width: '100%',
                        borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                },
                data: third
            }
        ]
    };
    return option
}

function detailstats(winnername,losername){
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                animation: false
            },
            formatter:function(params){
                if(params[0].data.value==undefined){
                    data=params[0].data
                }
                else{
                    data=params[0].data.value
                }
                if(params[1].data.value==undefined){
                    data1=params[1].data
                }
                else{
                    data1=params[1].data.value
                }
                return params[0].name+'</br>'+params[0].marker+params[0].seriesName+':'+data+'</br>'+params[1].marker+params[1].seriesName+':'+data1
            },
        },
        legend: {
            data: [winnername, losername],
            left: 10
        },
        axisPointer: {
            link: {xAxisIndex: 'all'}
        },
        dataZoom: [
            {
                show: true,
                realtime: true,
                start: 0,
                end: 40,
                xAxisIndex: [0, 1]
            },
            {
                type: 'inside',
                realtime: true,
                start: 0,
                end: 40,
                xAxisIndex: [0, 1]
            }
        ],
        grid: [{
            left: 50,
            right: 50,
            height: '35%'
        }, {
            left: 50,
            right: 50,
            top: '55%',
            height: '35%'
        }],
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                axisLine: {onZero: false},
                data:['','第一局第一场','第一局第二场','第一局第三场','第一局第四场','第二局第一场','第二局第二场','第二局第三场','第二局第四场','第二局第五场','第二局第六场','第二局第七场','第二局第八场','第二局第九场','第二局第十场','第二局第十一场','第三局第一场','第三局第二场','第三局第三场','第三局第四场','第四局第一场','第四局第二场','第四局第三场','第四局第四场','第四局第五场','第四局第六场','第四局第七场','第五局第一场','第五局第二场','第五局第三场','第五局第四场','第六局第一场','第六局第二场','第六局第三场','第六局第四场','第六局第五场','第六局第六场','第六局第七场','第六局第八场','第六局第九场','第七局第一场','第七局第二场','第七局第三场','第七局第四场','第八局第一场','第八局第二场','第八局第三场','第八局第四场','第八局第五场','第八局第六场','第八局第七场','第九局第一场','第九局第二场','第九局第三场','第九局第四场','第十局第一场','第十局第二场','第十局第三场','第十局第四场','第十局第五场','第十局第六场','第十局第七场','第十局第八场','第十局第九场'],               
                gridIndex:0
            },
            {
                gridIndex: 1,
                type: 'category',
                boundaryGap: false,
                axisLine: {onZero: false},
                data: ['','第一局第一场','第一局第二场','第一局第三场','第一局第四场','第二局第一场','第二局第二场','第二局第三场','第二局第四场','第二局第五场','第二局第六场','第二局第七场','第二局第八场','第二局第九场','第二局第十场','第二局第十一场','第三局第一场','第三局第二场','第三局第三场','第三局第四场','第四局第一场','第四局第二场','第四局第三场','第四局第四场','第四局第五场','第四局第六场','第四局第七场','第五局第一场','第五局第二场','第五局第三场','第五局第四场','第六局第一场','第六局第二场','第六局第三场','第六局第四场','第六局第五场','第六局第六场','第六局第七场','第六局第八场','第六局第九场','第七局第一场','第七局第二场','第七局第三场','第七局第四场','第八局第一场','第八局第二场','第八局第三场','第八局第四场','第八局第五场','第八局第六场','第八局第七场','第九局第一场','第九局第二场','第九局第三场','第九局第四场','第十局第一场','第十局第二场','第十局第三场','第十局第四场','第十局第五场','第十局第六场','第十局第七场','第十局第八场','第十局第九场'],
                position: 'top'
            }
        ],
        yAxis: [
            {
                name: '比分',
                type: 'category',
                data:['0','15','30','40','A'],
                axisLine:{
                    show:true
                }
            },
            {
                gridIndex: 1,
                name: '比分',
                type: 'category',
                data:['0','15','30','40','A'],
                inverse: true,
                axisLine:{
                    show:true
                }
            }
        ],
        series: [
            {
                name: winnername,
                type: 'line',
                symbolSize: 8,
                hoverAnimation: false,
                data:[
                    '0','15','30','30',{value:'40',symbol:'diamond',symbolSize:10},'0','0','15','15','30','40','40','40','40','40',{value:'A',symbol:'diamond',symbolSize:10},
                    '15','30','30','40','15','15',{value:'15',symbol:'diamond',symbolSize:10},'30','30','40','40','15',{value:'30',symbol:'diamond',symbolSize:10},'40','40','0','0','0','15','30',{value:'40',symbolSize:10,symbol:'diamond'},'40','40','40',
                    {value:'0',symbol:'diamond',symbolSize:10},'15','15',{value:'15',symbol:'diamond',symbolSize:10},'15','15',{value:'15'},'30',{value:'40',symbolSize:10,symbol:'diamond'},
                    '40','40','15','30','30','40','15','30','30','30',{value:'40',symbol:'diamond',symbolSize:10},'40','40','40',{value:'A',symbol:'diamond',symbolSize:10}
                ],               
                markPoint:{
                    data:[
                        {
                            coord:['第一局第四场','40'],
                            label:{
                                show:true,
                                position:'inside',
                                formatter:'Ace球'
                            }                
                        },
                        {
                            coord:['第二局第十一场','A'],
                            label:{
                                show:true,
                                position:'inside',
                                formatter:'破发成功'
                            }   
                        },
                        {
                            coord:['第五局第二场','30'],
                            label:{
                                show:true,
                                position:'inside',
                                formatter:'Ace球'
                            } 
                        },
                        {
                            coord:['第六局第六场','40'],
                            label:{
                                show:true,
                                position:'inside',
                                formatter:'破发点'
                            } 
                        },
                        {
                            coord:['第七局第一场','0'],
                            label:{
                                show:true,
                                position:'inside',
                                formatter:'双误'
                            } 
                        },
                        {
                            coord:['第七局第四场','15'],
                            label:{
                                show:true,
                                position:'inside',
                                formatter:'被破发'
                            } 
                        },
                        {
                            coord:['第四局第三场','15'],
                            label:{
                                show:true,
                                position:'inside',
                                formatter:'二发接发失误'
                            } 
                        },
                        {
                            coord:['第八局第五场','40'],
                            label:{
                                show:true,
                                position:'inside',
                                formatter:'破发点'
                            } 
                        },
                        {
                            coord:['第十局第五场','40'],
                            label:{
                                show:true,
                                position:'inside',
                                formatter:'破发点'
                            } 
                        },
                        {
                            coord:['第十局第九场','A'],
                            label:{
                                show:true,
                                position:'inside',
                                formatter:'破发成功'
                            } 
                        },
                    ]
                },
                markLine:{
                    data:[
                        {xAxis:'第一局第一场',symbol:['none','none']},
                        {xAxis:'第二局第一场',symbol:['none','none']},
                        {xAxis:'第三局第一场',symbol:['none','none']},
                        {xAxis:'第四局第一场',symbol:['none','none']},
                        {xAxis:'第五局第一场',symbol:['none','none']},
                        {xAxis:'第六局第一场',symbol:['none','none']},
                        {xAxis:'第七局第一场',symbol:['none','none']},
                        {xAxis:'第八局第一场',symbol:['none','none']},
                        {xAxis:'第九局第一场',symbol:['none','none']},
                        {xAxis:'第十局第一场',symbol:['none','none']},
                    ]
                }
            },
            {
                name: losername,
                type: 'line',
                xAxisIndex: 1,
                yAxisIndex: 1,
                symbolSize: 8,
                hoverAnimation: false,
                data:[
                    '0','0','0','15','15','15',{value:'30',symbol:'diamond',symbolSize:10},'30','40','40','40','A','40','A','40',{value:'40',symbol:'diamond',symbolSize:10},
                    '0','0','15','15',{value:'0',symbol:'diamond',symbolSize:10},'15','30','30','40','40','A','0','0','0','15',{value:'15',symbol:'diamond',symbolSize:10},
                    {value:'30',symbol:'diamond',symbolSize:10},'40','40','40','40','A','40','A','15','15','30',{value:'40',symbol:'diamond',symbolSize:10},'0',{value:'15',symbol:'diamond',symbolSize:10},{value:'30',symbol:'diamond',symbolSize:10},
                    '30','30','40','A','0','0','15','15','0','0','15',{value:'30',symbol:'diamond',symbolSize:10},'30','40','A','40',{value:'40',symbol:'diamond',symbolSize:10}
                ],
                markPoint:{
                    data:[
                        {
                            coord:['第二局第二场','30'],
                            value:'Ace球',
                            label:{
                                show:true,
                                position:'inside',
                                formatter:'Ace球'
                            }   
                        },
                        {
                            coord:['第二局第十一场','40'],
                            value:'被破发',
                            label:{
                                show:true,
                                position:'inside',
                                formatter:'被破发'
                            }   
                        },
                        {
                            coord:['第四局第一场','0'],
                            label:{
                                show:true,
                                position:'inside',
                                formatter:'双误'
                            }   
                        },
                        {
                            coord:['第六局第一场','15'],
                            label:{
                                show:true,
                                position:'inside',
                                formatter:'Ace球'
                            }   
                        },
                        {
                            coord:['第六局第二场','30'],
                            label:{
                                show:true,
                                position:'inside',
                                formatter:'Ace球'
                            }   
                        },
                        {
                            coord:['第七局第四场','40'],
                            label:{
                                show:true,
                                position:'inside',
                                formatter:'破发成功'
                            }   
                        },
                        {
                            coord:['第八局第二场','15'],
                            label:{
                                show:true,
                                position:'inside',
                                formatter:'Ace球'
                            }   
                        },
                        {
                            coord:['第八局第三场','30'],
                            label:{
                                show:true,
                                position:'inside',
                                formatter:'Ace球'
                            }   
                        },
                        {
                            coord:['第十局第四场','30'],
                            label:{
                                show:true,
                                position:'inside',
                                formatter:'Ace球'
                            }   
                        },
                        {
                            coord:['第十局第九场','40'],
                            label:{
                                show:true,
                                position:'inside',
                                formatter:'被破发'
                            }   
                        },
                    ]
                },
                markLine:{
                    data:[
                        {xAxis:'第一局第一场',symbol:'none'},
                        {xAxis:'第二局第一场',symbol:['none','none']},
                        {xAxis:'第三局第一场',symbol:['none','none']},
                        {xAxis:'第四局第一场',symbol:['none','none']},
                        {xAxis:'第五局第一场',symbol:['none','none']},
                        {xAxis:'第六局第一场',symbol:['none','none']},
                        {xAxis:'第七局第一场',symbol:['none','none']},
                        {xAxis:'第八局第一场',symbol:['none','none']},
                        {xAxis:'第九局第一场',symbol:['none','none']},
                        {xAxis:'第十局第一场',symbol:['none','none']},
                    ]
                }
            }
        ]
    };
    return option
}