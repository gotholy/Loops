function imageArr() {
  const returnArr = [];
  for (let i = 0; i < 100; i++) {
    let imageName = `image_${i}.jpg`;
    returnArr.push(imageName);
  }
  console.log(returnArr);
}

imageArr();
