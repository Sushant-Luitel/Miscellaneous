const iceCream = ["sugar", "cream", "cone"];
function Hello() {
  return "hello world";
}
const myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (iceCream.includes("sugar") && iceCream.includes("cream")) {
        resolve("your ice cream is ready");
      } else {
        reject("Ingredients missing");
      }
    }, 2000);
  });
};

myPromise()
  .then((data) => {
    console.log("Congratsss:", data);
    return Hello();
  })

  .catch((err) => {
    console.log("Oops:", err);
  })
  .then((data) => {
    console.log(data);
  });
