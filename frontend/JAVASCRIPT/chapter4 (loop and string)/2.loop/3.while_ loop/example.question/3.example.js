// make nested loop in which outer loop and inner loop should excute 10 times and print the current iteration count of both loop

//outer loop
let key=1
while(key<=5)
{
    console.log("outer loop",key)
    key=key+1
    //inner loop
    let use=1
    while(use<=5)
    {
        console.log("inner loop",use)
        use=use+1
    }
}

