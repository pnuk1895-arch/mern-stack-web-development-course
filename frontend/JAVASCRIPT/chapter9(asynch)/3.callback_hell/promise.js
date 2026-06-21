//clean and modern solution of your callback hell using Promises and async/await.


// 1)promises:

function fdfs(data) {
  console.log(`getting ${data}....`);
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(data);
      reject("sorry error while fetching your data")
    }, 2000);
  });
}


fdfs("data1")
  .then((res1) => {
    console.log(res1);
    return fdfs("data2");
  })
  .then((res2) => {
    console.log(res2);
    return fdfs("data3");
  })
  .then((res3) => {
    console.log(res3);
  })
  .catch((err) => console.log(err));