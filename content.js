function gotMessage(message,sender,sendResponse) {
    if(message.run === true) {
        let problem_name = null;
        let ip = null;
        let op = null;
        let input = [];
        let output = [];
        let name = window.location.href.slice(12,18);
        if(name==="forces"){
            problem_name = window.location.href.slice(42);
            ip = document.querySelectorAll('.input pre');
            op = document.querySelectorAll('.output pre');
            ip.forEach(i=>{
                input.push(i.textContent);
            })
            op.forEach(i=>{
                output.push(i.textContent);
            })
        }else if(name==="codech"){
            problem_name = document.querySelector('.large-12 h1').textContent.split('\n')[1].trimStart();
            ip = document.querySelectorAll('pre')[0].textContent.split('\n');
            op = document.querySelectorAll('pre')[1].textContent.split('\n');
            ip.forEach(i=>{
                input.push(i);
            })
            op.forEach(i=>{
                output.push(i);
            })
        }else {
            problem_name = document.querySelector('.h2').textContent;
            let pre = document.querySelectorAll('pre');
            let length = pre.length;
            for(let i=6;i<length;i+=2){
                input.push(pre[i].textContent);
            }
            for(let i=7;i<length;i+=2){
                output.push(pre[i].textContent);
            }
            op = []
            op.length = output.length;
        }
        console.log(problem_name,ip,op);

        console.log(input,output)
        let CodeForce_IO = {};
        CodeForce_IO[problem_name] = {
            input:input,
            output:output
        };
        console.log(CodeForce_IO);
         
        let data = `${problem_name} ${'\n'}`;
        data += input.join('\n' + '$###%###%#############%###%###$' + '\n');
        let data1 = `Output (${op.length})${'\n'}`;
        data1 += output.join('\n' + '$###%###%#############%###%###$' + '\n');


        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = `input.txt`;

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        const textToBLOB1 = new Blob([data1], { type: 'text/plain' });
        const sFileName1 = `output.txt`;

        let newLink1 = document.createElement("a");
        newLink1.download = sFileName1;

        if (window.webkitURL != null) {
            newLink1.href = window.webkitURL.createObjectURL(textToBLOB1);
        }
        else {
            newLink1.href = window.URL.createObjectURL(textToBLOB1);
            newLink1.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click();
        newLink1.click();
    }
}
chrome.runtime.onMessage.addListener(gotMessage);                       