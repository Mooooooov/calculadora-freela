    var questions = [
        "Quantas horas você vai trabalhar por dia?", //0
        "Quantos dias você vai trabalhar?", //1
        "Quantos dias de férias?", //2
        "Qual o valor do projeto?", //3
    ]
    // valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) )
    var answers = []

    var state = 0;


    function insert(num){
        document.form.textview.value = document.form.textview.value+num;
    }

    function clean(){
        document.form.textview.value = ""
    }

        function next(){
            answers[state] = document.querySelector('.textview').value;
            clean()
            state++
            if(state > 3){
                const valorhora = (answers[3] / (answers[1] * 4 * answers[0]) ) + ( ( answers[2] * answers[1] * answers[0] ) );
                const valorfinal = valorhora.toFixed(2).replace('.', ',')
                return document.getElementById('pergunta').innerText = `O Valor/Hora do Freela é R$: ${valorfinal}`
            }
        document.getElementById('pergunta').innerText = questions[state]
        
    }
