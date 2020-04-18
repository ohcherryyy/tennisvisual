function charts(statdata,name,index){
    var nodes=[]
    var links=[]
    nodes['2020']=[]
    links['2020']=[]
    nodes['2019']=[]
    links['2019']=[]
    nodes['2018']=[]
    links['2018']=[]
    nodes['2017']=[]
    links['2017']=[]
    nodes['2016']=[]
    links['2016']=[]
    nodes['2015']=[]
    links['2015']=[]
    nodes['2014']=[]
    links['2014']=[]
    nodes['2013']=[]
    links['2013']=[]
    nodes['2012']=[]
    links['2012']=[]
    nodes['2011']=[]
    links['2011']=[]

    for (var i=0;i<statdata.length;i++){
        var temp={}
        var temp1={}
        switch(statdata[i].year){
            case('2020.01.20 - 2020.02.03'):
                if(statdata[i].source==name){
                    temp['target']=name
                    temp['source']=statdata[i].target
                    temp['id']=statdata[i].id
                    temp['value']=statdata[i].value
                    temp['emphasis']={}
                    temp['emphasis']['label']={}
                    temp['emphasis']['label']['show']=true
                    temp['emphasis']['label']['formatter']='{@value}'
                    links['2020'].push(temp)
                    temp1['name']=statdata[i].target
                    temp1['symbol']=statdata[i].targetsymbol
                    temp1['category']=1
                    temp1['draggable']=true
                    temp1['symbolSize']=130
                    nodes['2020'].push(temp1)
                }
                if(statdata[i].target==name){
                    temp['target']=name
                    temp['source']=statdata[i].source
                    temp['id']=statdata[i].id
                    temp['value']=statdata[i].value
                    temp['emphasis']={}
                    temp['emphasis']['label']={}
                    temp['emphasis']['label']['show']=true
                    temp['emphasis']['label']['formatter']='{@value}'
                    links['2020'].push(temp)
                    temp1['name']=statdata[i].source
                    temp1['symbol']=statdata[i].sourcesymbol
                    temp1['category']=1
                    temp1['draggable']=true
                    temp1['symbolSize']=130
                    nodes['2020'].push(temp1)
                }
                break
            case('2018.01.15 - 2018.01.28'):
                if(statdata[i].source==name){
                    temp['target']=name
                    temp['source']=statdata[i].target
                    temp['id']=statdata[i].id
                    temp['value']=statdata[i].value
                    temp['emphasis']={}
                    temp['emphasis']['label']={}
                    temp['emphasis']['label']['show']=true
                    temp['emphasis']['label']['formatter']='{@value}'
                    links['2018'].push(temp)
                    temp1['name']=statdata[i].target
                    temp1['symbol']=statdata[i].targetsymbol
                    temp1['category']=1
                    temp1['draggable']=true
                    temp1['symbolSize']=130
                    nodes['2018'].push(temp1)
                }
                if(statdata[i].target==name){
                    temp['target']=name
                    temp['source']=statdata[i].source
                    temp['id']=statdata[i].id
                    temp['value']=statdata[i].value
                    temp['emphasis']={}
                    temp['emphasis']['label']={}
                    temp['emphasis']['label']['show']=true
                    temp['emphasis']['label']['formatter']='{@value}'
                    links['2018'].push(temp)
                    temp1['name']=statdata[i].source
                    temp1['symbol']=statdata[i].sourcesymbol
                    temp1['category']=1
                    temp1['draggable']=true
                    temp1['symbolSize']=130
                    nodes['2018'].push(temp1)
                }
                break
            case('2019.01.14 - 2019.01.27'):
                if(statdata[i].source==name){
                    temp['target']=name
                    temp['source']=statdata[i].target
                    temp['id']=statdata[i].id
                    temp['value']=statdata[i].value
                    temp['emphasis']={}
                    temp['emphasis']['label']={}
                    temp['emphasis']['label']['show']=true
                    temp['emphasis']['label']['formatter']='{@value}'
                    links['2019'].push(temp)
                    temp1['name']=statdata[i].target
                    temp1['symbol']=statdata[i].targetsymbol
                    temp1['category']=1
                    temp1['draggable']=true
                    temp1['symbolSize']=130
                    nodes['2019'].push(temp1)
                }
                if(statdata[i].target==name){
                    temp['target']=name
                    temp['source']=statdata[i].source
                    temp['id']=statdata[i].id
                    temp['value']=statdata[i].value
                    temp['emphasis']={}
                    temp['emphasis']['label']={}
                    temp['emphasis']['label']['show']=true
                    temp['emphasis']['label']['formatter']='{@value}'
                    links['2019'].push(temp)
                    temp1['name']=statdata[i].source
                    temp1['symbol']=statdata[i].sourcesymbol
                    temp1['category']=1
                    temp1['draggable']=true
                    temp1['symbolSize']=130
                    nodes['2019'].push(temp1)
                }
                break
            case('2012.01.16 - 2012.01.29'):
                if(statdata[i].source==name){
                    temp['target']=name
                    temp['source']=statdata[i].target
                    temp['id']=statdata[i].id
                    temp['value']=statdata[i].value
                    temp['emphasis']={}
                    temp['emphasis']['label']={}
                    temp['emphasis']['label']['show']=true
                    temp['emphasis']['label']['formatter']='{@value}'
                    links['2012'].push(temp)
                    temp1['name']=statdata[i].target
                    temp1['symbol']=statdata[i].targetsymbol
                    temp1['category']=1
                    temp1['draggable']=true
                    temp1['symbolSize']=130
                    nodes['2012'].push(temp1)
                }
                if(statdata[i].target==name){
                    temp['target']=name
                    temp['source']=statdata[i].source
                    temp['id']=statdata[i].id
                    temp['value']=statdata[i].value
                    temp['emphasis']={}
                    temp['emphasis']['label']={}
                    temp['emphasis']['label']['show']=true
                    temp['emphasis']['label']['formatter']='{@value}'
                    links['2012'].push(temp)
                    temp1['name']=statdata[i].source
                    temp1['symbol']=statdata[i].sourcesymbol
                    temp1['category']=1
                    temp1['draggable']=true
                    temp1['symbolSize']=130
                    nodes['2012'].push(temp1)
                }
                break
            case('2017.01.16 - 2017.01.29'):
                if(statdata[i].source==name){
                    temp['target']=name
                    temp['source']=statdata[i].target
                    temp['id']=statdata[i].id
                    temp['value']=statdata[i].value
                    temp['emphasis']={}
                    temp['emphasis']['label']={}
                    temp['emphasis']['label']['show']=true
                    temp['emphasis']['label']['formatter']='{@value}'
                    links['2017'].push(temp)
                    temp1['name']=statdata[i].target
                    temp1['symbol']=statdata[i].targetsymbol
                    temp1['category']=1
                    temp1['draggable']=true
                    temp1['symbolSize']=130
                    nodes['2017'].push(temp1)
                }
                if(statdata[i].target==name){
                    temp['target']=name
                    temp['source']=statdata[i].source
                    temp['id']=statdata[i].id
                    temp['value']=statdata[i].value
                    temp['emphasis']={}
                    temp['emphasis']['label']={}
                    temp['emphasis']['label']['show']=true
                    temp['emphasis']['label']['formatter']='{@value}'
                    links['2017'].push(temp)
                    temp1['name']=statdata[i].source
                    temp1['symbol']=statdata[i].sourcesymbol
                    temp1['category']=1
                    temp1['draggable']=true
                    temp1['symbolSize']=130
                    nodes['2017'].push(temp1)
                }
                break
            case('2016.01.18 - 2016.01.31'):
                if(statdata[i].source==name){
                    temp['target']=name
                    temp['source']=statdata[i].target
                    temp['id']=statdata[i].id
                    temp['value']=statdata[i].value
                    temp['emphasis']={}
                    temp['emphasis']['label']={}
                    temp['emphasis']['label']['show']=true
                    temp['emphasis']['label']['formatter']='{@value}'
                    links['2016'].push(temp)
                    temp1['name']=statdata[i].target
                    temp1['symbol']=statdata[i].targetsymbol
                    temp1['category']=1
                    temp1['draggable']=true
                    temp1['symbolSize']=130
                    nodes['2016'].push(temp1)
                }
                if(statdata[i].target==name){
                    temp['target']=name
                    temp['source']=statdata[i].source
                    temp['id']=statdata[i].id
                    temp['value']=statdata[i].value
                    temp['emphasis']={}
                    temp['emphasis']['label']={}
                    temp['emphasis']['label']['show']=true
                    temp['emphasis']['label']['formatter']='{@value}'
                    links['2016'].push(temp)
                    temp1['name']=statdata[i].source
                    temp1['symbol']=statdata[i].sourcesymbol
                    temp1['category']=1
                    temp1['draggable']=true
                    temp1['symbolSize']=130
                    nodes['2016'].push(temp1)
                }
                break
            case('2014.01.13 - 2014.01.26'):
                if(statdata[i].source==name){
                    temp['target']=name
                    temp['source']=statdata[i].target
                    temp['id']=statdata[i].id
                    temp['value']=statdata[i].value
                    temp['emphasis']={}
                    temp['emphasis']['label']={}
                    temp['emphasis']['label']['show']=true
                    temp['emphasis']['label']['formatter']='{@value}'
                    links['2014'].push(temp)
                    temp1['name']=statdata[i].target
                    temp1['symbol']=statdata[i].targetsymbol
                    temp1['category']=1
                    temp1['draggable']=true
                    temp1['symbolSize']=130
                    nodes['2014'].push(temp1)
                }
                if(statdata[i].target==name){
                    temp['target']=name
                    temp['source']=statdata[i].source
                    temp['id']=statdata[i].id
                    temp['value']=statdata[i].value
                    temp['emphasis']={}
                    temp['emphasis']['label']={}
                    temp['emphasis']['label']['show']=true
                    temp['emphasis']['label']['formatter']='{@value}'
                    links['2014'].push(temp)
                    temp1['name']=statdata[i].source
                    temp1['symbol']=statdata[i].sourcesymbol
                    temp1['category']=1
                    temp1['draggable']=true
                    temp1['symbolSize']=130
                    nodes['2014'].push(temp1)
                }
                break
            case('2015.01.19 - 2015.02.01'):
                if(statdata[i].source==name){
                    temp['target']=name
                    temp['source']=statdata[i].target
                    temp['id']=statdata[i].id
                    temp['value']=statdata[i].value
                    temp['emphasis']={}
                    temp['emphasis']['label']={}
                    temp['emphasis']['label']['show']=true
                    temp['emphasis']['label']['formatter']='{@value}'
                    links['2015'].push(temp)
                    temp1['name']=statdata[i].target
                    temp1['symbol']=statdata[i].targetsymbol
                    temp1['category']=1
                    temp1['draggable']=true
                    temp1['symbolSize']=130
                    nodes['2015'].push(temp1)
                }
                if(statdata[i].target==name){
                    temp['target']=name
                    temp['source']=statdata[i].source
                    temp['id']=statdata[i].id
                    temp['value']=statdata[i].value
                    temp['emphasis']={}
                    temp['emphasis']['label']={}
                    temp['emphasis']['label']['show']=true
                    temp['emphasis']['label']['formatter']='{@value}'
                    links['2015'].push(temp)
                    temp1['name']=statdata[i].source
                    temp1['symbol']=statdata[i].sourcesymbol
                    temp1['category']=1
                    temp1['draggable']=true
                    temp1['symbolSize']=130
                    nodes['2015'].push(temp1)
                }
                break
            case('2013.01.14 - 2013.01.27'):
                if(statdata[i].source==name){
                    temp['target']=name
                    temp['source']=statdata[i].target
                    temp['id']=statdata[i].id
                    temp['value']=statdata[i].value
                    temp['emphasis']={}
                    temp['emphasis']['label']={}
                    temp['emphasis']['label']['show']=true
                    temp['emphasis']['label']['formatter']='{@value}'
                    links['2013'].push(temp)
                    temp1['name']=statdata[i].target
                    temp1['symbol']=statdata[i].targetsymbol
                    temp1['category']=1
                    temp1['draggable']=true
                    temp1['symbolSize']=130
                    nodes['2013'].push(temp1)
                }
                if(statdata[i].target==name){
                    temp['target']=name
                    temp['source']=statdata[i].source
                    temp['id']=statdata[i].id
                    temp['value']=statdata[i].value
                    temp['emphasis']={}
                    temp['emphasis']['label']={}
                    temp['emphasis']['label']['show']=true
                    temp['emphasis']['label']['formatter']='{@value}'
                    links['2013'].push(temp)
                    temp1['name']=statdata[i].source
                    temp1['symbol']=statdata[i].sourcesymbol
                    temp1['category']=1
                    temp1['draggable']=true
                    temp1['symbolSize']=130
                    nodes['2013'].push(temp1)
                }
                break
            case('2011.01.17 - 2011.01.30'):
                if(statdata[i].source==name){
                    temp['target']=name
                    temp['source']=statdata[i].target
                    temp['id']=statdata[i].id
                    temp['value']=statdata[i].value
                    temp['emphasis']={}
                    temp['emphasis']['label']={}
                    temp['emphasis']['label']['show']=true
                    temp['emphasis']['label']['formatter']='{@value}'
                    links['2011'].push(temp)
                    temp1['name']=statdata[i].target
                    temp1['symbol']=statdata[i].targetsymbol
                    temp1['category']=1
                    temp1['draggable']=true
                    temp1['symbolSize']=130
                    nodes['2011'].push(temp1)
                }
                if(statdata[i].target==name){
                    temp['target']=name
                    temp['source']=statdata[i].source
                    temp['id']=statdata[i].id
                    temp['value']=statdata[i].value
                    temp['emphasis']={}
                    temp['emphasis']['label']={}
                    temp['emphasis']['label']['show']=true
                    temp['emphasis']['label']['formatter']='{@value}'
                    links['2011'].push(temp)
                    temp1['name']=statdata[i].source
                    temp1['symbol']=statdata[i].sourcesymbol
                    temp1['category']=1
                    temp1['draggable']=true
                    temp1['symbolSize']=130
                    nodes['2011'].push(temp1)
                }
                break
        }
        
    }

    for(var j=0;j<statdata.length;j++){
        var temp={}
        if(statdata[j].source==name){
            temp['name']=name
            temp['category']=0
            temp['symbol']=statdata[j].sourcesymbol
            temp['symbolSize']=130
            temp['draggable']=true
            nodes['2020'].push(temp)
            nodes['2019'].push(temp)
            nodes['2018'].push(temp)
            nodes['2017'].push(temp)
            nodes['2016'].push(temp)
            nodes['2015'].push(temp)
            nodes['2014'].push(temp)
            nodes['2013'].push(temp)
            nodes['2012'].push(temp)
            nodes['2011'].push(temp)
            break
        }
        if(statdata[j].target==name){
            temp['name']=name
            temp['category']=0
            temp['symbol']=statdata[j].targetsymbol
            temp['symbolSize']=130
            temp['draggable']=true
            nodes['2020'].push(temp)
            nodes['2019'].push(temp)
            nodes['2018'].push(temp)
            nodes['2017'].push(temp)
            nodes['2016'].push(temp)
            nodes['2015'].push(temp)
            nodes['2014'].push(temp)
            nodes['2013'].push(temp)
            nodes['2012'].push(temp)
            nodes['2011'].push(temp)
            break
        }
    }

    option={
        baseOption:{
            timeline:{
                axisType:'category',
                autoPlay:false,
                playInterval:2000,
                data:['2020','2019','2018','2017','2016','2015','2014','2013','2012','2011'],
                controlStyle:{
                    showPlayBtn:false
                },
                currentIndex:index
            },
            title:{
                text:name+'的对战记录',
                textStyle:{
                    fontSize:23,
                },
            },
        series:[
            {
                type:'graph',
                layout:'force',
                force:{
                    repulsion:500,
                    gravity:0.07,
                    edgeLength:[20,400],
                    layoutAnimation:true
                },
                lineStyle: {
                    width:1,
                    color:'source'
                        },
                itemStyle: { 
                    emphasis: {
                        label: {
                            show: true,
                            position:'bottom',
                            formatter:'{b}',
                    },
                    lineStyle : {
                        width:5,
                                    
                    }
                    }
                },
                focusNodeAdjacency: true,
                roam: true,
                categories:[{name:'sportsman'},{name:'ally'}],
                nodes:nodes['2020'],
                links:links['2020']
            }
        ]
    },

    options:[
        {//2020
            title:{
                subtext:'2020澳大利亚网球公开赛（男单）',
                subtextStyle:{
                    fontSize:17
                }
            },
            series:[
                {
                    nodes:nodes['2020'],
                    links:links['2020']
                }
            ]
        },
        {//2019
            title:{
                subtext:'2019澳大利亚网球公开赛（男单）',
                subtextStyle:{
                    fontSize:17
                }
            },
            series:[
                {
                    nodes:nodes['2019'],
                    links:links['2019']
                }
            ]
        },
        {//2018
            title:{
                subtext:'2018澳大利亚网球公开赛（男单）',
                subtextStyle:{
                    fontSize:17
                }
            },
            series:[
                {
                    nodes:nodes['2018'],
                    links:links['2018']
                }
            ]
        },
        {//2017
            title:{
                subtext:'2017澳大利亚网球公开赛（男单）',
                subtextStyle:{
                    fontSize:17
                }
            },
            series:[
                {
                    nodes:nodes['2017'],
                    links:links['2017']
                }
            ]
        },
        {//2016
            title:{
                subtext:'2016澳大利亚网球公开赛（男单）',
                subtextStyle:{
                    fontSize:17
                }
            },
            series:[
                {
                    nodes:nodes['2016'],
                    links:links['2016']
                }
            ]
        },
        {//2015
            title:{
                subtext:'2015澳大利亚网球公开赛（男单）',
                subtextStyle:{
                    fontSize:17
                }
            },
            series:[
                {
                    nodes:nodes['2015'],
                    links:links['2015']
                }
            ]
        },
        {//2014
            title:{
                subtext:'2014澳大利亚网球公开赛（男单）',
                subtextStyle:{
                    fontSize:17
                }
            },
            series:[
                {
                    nodes:nodes['2014'],
                    links:links['2014']
                }
            ]
        },
        {//2013
            title:{
                subtext:'2013澳大利亚网球公开赛（男单）',
                subtextStyle:{
                    fontSize:17
                }
            },
            series:[
                {
                    nodes:nodes['2013'],
                    links:links['2013']
                }
            ]
        },
        {//2012
            title:{
                subtext:'2012澳大利亚网球公开赛（男单）',
                subtextStyle:{
                    fontSize:17
                }
            },
            series:[
                {
                    nodes:nodes['2012'],
                    links:links['2012']
                }
            ]
        },
        {//2011
            title:{
                subtext:'2011澳大利亚网球公开赛（男单）',
                subtextStyle:{
                    fontSize:17
                }
            },
            series:[
                {
                    nodes:nodes['2011'],
                    links:links['2011']
                }
            ]
        }
    ]
    }
    return option
}

function getinfo(data,name){
    var info=[]
    for(var i=0;i<data.length;i++){
        if(data[i].name==name){
            info['img']=data[i].img
            info['nation']=data[i].birthplace
            info['rank']=data[i].rank
            info['age']=data[i].age
            info['height']=data[i].height
            info['weight']=data[i].weight
            switch(data[i].backhand){
                case('Unknown'):
                    info['backhand']="未知"
                    break;
                case('Two-Handed'):
                    info['backhand']="两手"
                    break
                case('One-Handed'):
                    info['backhand']="单手"
                    break;
            }
            switch(data[i].plays){
                case('R'):
                    info['plays']="右手"
                    break;
                case('L'):
                    info['plays']="左手"
                    break;
            }             
            info['turnpro']=data[i].turnpro
        }
    }
    return info
}

function winstat(data,name){
    var result=[]
    var sum=[]
    
    for(var i=0;i<data.length;i++){
        var temp=0
        for(var j=0;j<data[i].length;j++){
                if(data[i][j].source==name){
                    result[i]=data[i][j].value
                    break
                }
                else{
                    result[i]='冠军'
                }
        }
        for(var k=0;k<data[i].length;k++){
            if(data[i][k].target==name){
                temp++
            }
        }
        if(temp==0){
            result[i]='未入围'
        }
        sum[i]=temp
    }

    for(var i=0;i<result.length;i++){
        switch(result[i]){
            case('决赛'):
                result[i]='亚军'
                break
            case('半决赛'):
                result[i]='4强'
                break
            case('四分之一决赛'):
                result[i]='8强'
                break
            case('第四轮'):
                result[i]='16强'
                break
            case('第三轮'):
                result[i]='32强'
                break 
            case('第二轮'):
                result[i]='64强'
                break   
            case('第一轮'):
                result[i]='128强'
                break
        }
    }

    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer:{
                type:'shadow'
            },
            formatter:function(params){
                return params[0].name+'</br>'+params[0].marker+params[0].seriesName+':'+params[0].data+'</br>'+params[1].marker+params[1].seriesName+':'+params[1].data
            },
            confine:true
        },
        legend: {
            data:['最佳成绩', '胜利场数']
        },
        dataZoom: {
            show: false,
            start: 0,
            end: 100
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: true,
                data: ['2020','2019','2018','2017','2016','2015','2014','2013','2012','2011']
            },
        ],
        yAxis: [
            {
                type: 'category',
                scale: true,
                name: '成绩',
                data:['未入围','128强','64强','32强','16强','8强','4强','亚军','冠军']
            },
            {
                type: 'value',
                scale: true,
                name: '胜利场数',
                max: 7,
                min: 0,
                boundaryGap: [0.2, 0.2]
            }
        ],
        series: [
            {
                name: '胜利场数',
                type: 'bar',
                xAxisIndex: 0,
                yAxisIndex: 1,
                data: sum
            },
            {
                name: '最佳成绩',
                xAxisIndex: 0,
                yAxisIndex: 0,
                type: 'line',
                data:result,               
            }
        ]
    };
    return option
}