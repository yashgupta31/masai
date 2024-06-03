let data = [
    {
        question: "What is the correct way to declare a variable in JavaScript?",
        options: ["variable x = 5", "var x = 5", "x = 5", "let x = 5"],
        ans: "var x = 5"
    },
    {
        question: "Which of the following is used to comment in JavaScript?",
        options: ["<!-- Comment -->", "// Comment", "/* Comment */", "Comment"],
        ans: "// Comment"
    },
    {
        question: "How do you check the type of a variable in JavaScript?",
        options: ["typeOf variable", "typeof variable", "type(variable)", "variable.type()"],
        ans: "typeof variable"
    },
    {
        question: "What is the purpose of the 'setTimeout' function in JavaScript?",
        options: ["To set a delay before executing a function", "To repeat a function at regular intervals", "To stop the execution of a function", "To define a timeout for the entire script"],
        ans: "To set a delay before executing a function"
    },
    {
        question: "What is the difference between 'let' and 'const' in JavaScript?",
        options: ["'let' can be reassigned, while 'const' cannot be reassigned", "'const' can be reassigned, while 'let' cannot be reassigned", "Both 'let' and 'const' can be reassigned", "Both 'let' and 'const' cannot be reassigned"],
        ans: "'let' can be reassigned, while 'const' cannot be reassigned"
    },
    // {
    //     question: "",
    //     options: ["", "", "", ""],
    //     ans: ""
    // },
]




var index = 0;
let questionNum = 1;

document.getElementById('next-btn').addEventListener('click', function () {

    // function NextQuestion(){
        document.getElementById('container').innerHTML = ""
        index = index + 1;
        timer=30;
    
        if (data.length == index) {
    
            result(marks)
    
            // index= 0;
        }
    
        if (data.length > index) {
            questionNum++;
            document.getElementById('question-number').innerText = questionNum;
            //fill graph accrording to question number
            let questionPercent = (questionNum / data.length) * 100;
            document.getElementById('graph-fill').style.width = `${questionPercent}%`
            document.getElementById('graph-fill').style.transition = '1s'
    
        }
    // }
   
    // NextQuestion()

    showData(data)

})
document.getElementById('question-number').innerText = questionNum;
document.getElementById('total-questions').innerText = data.length;

//fill graph accrording to question number
let questionPercent = (questionNum / data.length) * 100;
document.getElementById('graph-fill').style.width = `${questionPercent}%`



let marks = 0;

function showData(data) {


    let question = document.createElement('span');
    question.innerText = data[index].question
    question.className = 'question'

    let a = document.createElement('button');
    a.innerText = data[index].options[0];
    a.id = 'A-btn';


    let b = document.createElement('button');
    b.innerText = data[index].options[1];
    b.id = 'B-btn';

    let c = document.createElement('button');
    c.innerText = data[index].options[2];
    c.id = 'C-btn';

    let d = document.createElement('button');
    d.innerText = data[index].options[3];
    d.id = 'D-btn';

    // let optionDiv
    // red- #FBD7D9
    // green- #B6E4CF 

    a.addEventListener('click', function () {
        a.style.backgroundColor = ""
        if (data[index].ans == a.innerText) {
            a.disabled = true;
            b.disabled = true;
            c.disabled = true;
            d.disabled = true;
            a.style.backgroundColor = '#18A08B';
            marks++;
            document.getElementById('show-marks').innerText = `Marks- ${marks}`;

        }
        else {

            a.style.backgroundColor = '#E94F4F';
            a.disabled = true;
            b.disabled = true;
            c.disabled = true;
            d.disabled = true;
            if (data[index].ans == b.innerText) {
                b.style.backgroundColor = '#18A08B';
            }
            else if (data[index].ans == c.innerText) {
                c.style.backgroundColor = '#18A08B';
            }
            else if (data[index].ans == d.innerText) {
                d.style.backgroundColor = '#18A08B';
            }

            // if ans is wrong then background (#container) will get red color
            wrongBackground()



        }
    })
    // ------------------------B option click----------------------------
    b.addEventListener('click', function () {
        b.style.backgroundColor = "";

        if (data[index].ans == b.innerText) {
            b.style.backgroundColor = '#18A08B';
            a.disabled = true;
            b.disabled = true;
            c.disabled = true;
            d.disabled = true;

            marks++
            document.getElementById('show-marks').innerText = `Marks- ${marks}`;

        } else {
            b.style.backgroundColor = '#E94F4F';
            a.disabled = true;
            b.disabled = true;
            c.disabled = true;
            d.disabled = true;
            if (data[index].ans == a.innerText) {
                a.style.backgroundColor = '#18A08B';
            }
            else if (data[index].ans == c.innerText) {
                c.style.backgroundColor = '#18A08B';
            }
            else if (data[index].ans == d.innerText) {
                d.style.backgroundColor = '#18A08B';
            }

            // if ans is wrong then background (#container) will get red color
            wrongBackground()
        }
    })

    // -------------------------C option click-----------------------------------------
    c.addEventListener('click', function () {
        c.style.backgroundColor = "";

        if (data[index].ans == c.innerText) {
            c.style.backgroundColor = '#18A08B';
            a.disabled = true;
            b.disabled = true;
            c.disabled = true;
            d.disabled = true;
            marks++
            document.getElementById('show-marks').innerText = `Marks- ${marks}`;
        } else {
            c.style.backgroundColor = '#E94F4F';
            a.disabled = true;
            b.disabled = true;
            c.disabled = true;
            d.disabled = true;
            if (data[index].ans == a.innerText) {
                a.style.backgroundColor = '#18A08B';
            }
            else if (data[index].ans == b.innerText) {
                b.style.backgroundColor = '#18A08B';
            }
            else if (data[index].ans == d.innerText) {
                d.style.backgroundColor = '#18A08B';
            }

            // if ans is wrong then background (#container) will get red color
            wrongBackground()
        }
    })
    // ------------------------------D Button click-----------------------------------------------------
    d.addEventListener('click', function () {
        d.style.backgroundColor = "";

        if (data[index].ans == d.innerText) {
            d.style.backgroundColor = '#18A08B';
            a.disabled = true;
            b.disabled = true;
            c.disabled = true;
            d.disabled = true;
            marks++
            document.getElementById('show-marks').innerText = `Marks- ${marks}`;
        } else {
            d.style.backgroundColor = '#E94F4F';
            a.disabled = true;
            b.disabled = true;
            c.disabled = true;
            d.disabled = true;
            if (data[index].ans == a.innerText) {
                a.style.backgroundColor = '#18A08B';
            }
            else if (data[index].ans == b.innerText) {
                b.style.backgroundColor = '#18A08B';
            }
            else if (data[index].ans == c.innerText) {
                c.style.backgroundColor = '#18A08B';
            }

            // if ans is wrong then background (#container) will get red color
            wrongBackground()
        }
    })
    // --------------------------------------------------------------------------------------------------

    document.getElementById('container').append(question, a, b, c, d)

}

showData(data)

// if ans is wrong then background (#container) will get red color
function wrongBackground() {
    document.getElementById('container').style.backgroundColor = 'rgb(249, 50, 50)'
    document.getElementById('container').style.transition = '0.4s'

    setTimeout(() => {
        document.getElementById('container').style.backgroundColor = ''
        document.getElementById('container').style.transition = '1.3s'
    }, 500);

    // let audio = new Audio('https://www.orangefreesounds.com/wp-content/uploads/2018/05/Wrong-alert-beep-sound.mp3?_=1');
    // audio.volume = 0.01;
    // audio.play();

    // // Remove the audio element after the sound has finished playing
    // audio.addEventListener('ended', function() {
    //     audio.remove();
    // });
}

//if click on any button then button will be disabled

function buttonDisabled() {
    a.disabled = true;
    b.disabled = true;
    c.disabled = true;
    d.disabled = true;
}

let container = document.getElementById('container');
function result(mark) {
    document.getElementById('next-btn').disabled = true;
    document.getElementById('show-marks').innerText = '';
    document.getElementById('head-container').innerHTML = ''

    let resultContainer = document.createElement('div')
    resultContainer.id = 'resultContainer'

    let title = document.createElement('h1')
    title.innerText = "Quiz Result"


    let img = document.createElement('img');
    img.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b5eed03-3715-42fd-8716-9b189aa554ad/d9dtwte-f182fd91-a5a5-42c2-8689-6258747a7c16.png/v1/fill/w_894,h_894,strp/trophy_icon_by_papillonstudio_d9dtwte-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzViNWVlZDAzLTM3MTUtNDJmZC04NzE2LTliMTg5YWE1NTRhZFwvZDlkdHd0ZS1mMTgyZmQ5MS1hNWE1LTQyYzItODY4OS02MjU4NzQ3YTdjMTYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.czjzw5LT-abKpTIfLuMmVUITzdH-W_aln-Woi5pQWIQ'
    img.id = 'trophy'

    let h1 = document.createElement('h1')
    h1.id = 'excellent'

    let percent = (mark / data.length) * 100;
    if (percent >= 80 && percent <= 100) {
        h1.innerText = "Excellent!"
    }
    else if (percent >= 60 && percent < 80) {
        h1.innerText = "Well Done!"
    }
    else if (percent >= 40 && percent < 60) {
        h1.innerText = "Not Bad!"
    }
    else if (percent >= 0 && percent < 40) {
        h1.innerText = "Try Again!"
    }

    let span = document.createElement('span');
    span.innerText = "Your Score"
    span.id = 'your-score-label'

    let outof = document.createElement('div');
    outof.innerHTML = `<h2><span  style="color: rgb(33, 200, 33)">${mark}</span> /${data.length}</h2>`

    let shareBtn = document.createElement('button')
    shareBtn.innerText = "Share Results"
    shareBtn.id = 'shareBtn'



    resultContainer.append(title, img, h1, span, outof, shareBtn)
    // container.append(resultContainer)
    document.getElementById('head-container').append(resultContainer)


}


// ----------------------------Timer------------------------------------

let timer = 30;

document.querySelector('.timer').innerText = timer;

let intervalId;
intervalId = setInterval(() => {

    timer = timer - 1;
    document.querySelector('.timer').innerText = timer;
    if (timer === 0) {
        // index = index + 1;
        // questionNum++;
        // showData(data)
        // NextQuestion()
        // timer = 30;

        document.getElementById('next-btn').click();
        timer = 30;
    }

}, 1000)



