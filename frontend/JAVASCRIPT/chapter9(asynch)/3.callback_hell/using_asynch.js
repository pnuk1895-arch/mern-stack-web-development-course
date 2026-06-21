// best method to solve call back hell

function fdfs(data) {
  console.log(`getting ${data}....`);
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      //resolve(data);
      reject("sorry error while feching your data")
    }, 2000);
  });
}


async function run() {

  try {
    
    const r1 = await fdfs("data1");
    console.log(r1);

    const r2 = await fdfs("data2");
    console.log(r2);

    const r3 = await fdfs("data3");
    console.log(r3);
  } catch (error) {
     console.log(error)
  }

  } 
run();
console.log("hello")