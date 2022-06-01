class LedPanel{

    config = {};
    charset = [];

    constructor(config, charset) {
        this.config = config
        this.charset = charset
    }

    run(){
        this.initPanel(this.config.rows, this.config.cols);
        const emptyArray = this.getEmptyArray(this.config.rows);
        const filledArray = this.fillArray(this.config.message, emptyArray);
        this.start(filledArray, this.config.colorBackground, this.config.colorAlphabet, this.config.speed);
    }

    initPanel(rows, cols){
        const table = document.createElement('table');

        for(let row = 0; row < rows; row++){
            const tr = document.createElement('tr');

            for(let col=0;col<cols;col++){
                tr.appendChild(document.createElement('td'));
            }

            table.appendChild(tr);
        }

        document.getElementById(this.config.idContainer).appendChild(table);
    }

    getEmptyArray(countOfRows){
        let emptyArray = [];
        
        for(let x = 0; x < countOfRows; x++){
            emptyArray.push([]);
        }
    
        return emptyArray;
    }

    fillArray(message, emptyArray){
        let chars = message.split('');
    
        chars.forEach(ch => {
            emptyArray.forEach((val, idx) => {
                emptyArray[idx] = emptyArray[idx].concat(this.charset[ch][idx])
            })
        })
    
        return emptyArray;
    }

    start(filledArray, colorBackground, colorAlphabet, speed){

        const tr = Array.from(document.getElementsByTagName('tr'));
        let rowClear = null;

        setInterval(() => {
            filledArray.forEach((val, idx) => {
                filledArray[idx].push(filledArray[idx][0]);
                filledArray[idx].shift();
            })
        
            tr.forEach((row, tr_idx) => {
                rowClear = Array.from(row.getElementsByTagName('td'));
                
                rowClear.forEach((td, td_idx) => {
                    td.style.background = colorBackground
        
                    if(filledArray[tr_idx][td_idx] === 1){
                        td.style.background = colorAlphabet
                    }
                })
            })
            
        }, speed)
        
    }
}