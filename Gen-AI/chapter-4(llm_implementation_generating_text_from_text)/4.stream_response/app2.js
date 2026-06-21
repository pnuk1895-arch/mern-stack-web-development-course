const api_Key="sk-c606961cdab2477bb9fd200ada1a241b"

async function apiCall(prompt){
    const response= await fetch("https://api.deepseek.com/chat/completions",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization": `Bearer ${api_Key}`
            },
        body:JSON.stringify({
            model:"deepseek-v4-flash",
            messages:[
                        { role:"user",
                          content:prompt
                        }
                    ]
        })
    })

    // we have to read the chunk by chunk instead of reading a data in one time

    const reader = response.body.getReader();//getReader() stream ko read karne ke liye reader object deta hai.
    const decoder = new TextDecoder();// textDecoder bytes ko string me convert karne ke liye object deta hain
    while(true)
    { 
         const { done, value } = await reader.read();
         const chunk = decoder.decode(value);
        console.log(done,chunk)

        if(done===true)
        break

    }
   



}
apiCall("what is AI")

