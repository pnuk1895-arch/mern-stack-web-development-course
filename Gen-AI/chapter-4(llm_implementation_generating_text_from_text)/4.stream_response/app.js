const api_Key="sk-c606961cdab2477bb9fd200ada1a241b"

async function apiCall(){
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
                          content:"ehat is ai"
                        }
                    ]
        })
    })
    console.log(response)
const data= await response.json()
console.log(data)
}
apiCall()

