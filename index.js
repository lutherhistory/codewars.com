function digitalRoot(n) {
  const root = (num) => {
    let inputValue = String(num);
    const arr = [];
    let total = 0;

    for (let i=0; i < inputValue.length; i++) {
      arr.push(Number(inputValue[i]));
    }

    for (let i=0; i < inputValue.length; i++) {
      total += arr[i];
    }

    return total;
  }

  const num = root(n);
  let res;

  if (num < 9){

    res = num;

  }else if (num > 9){
    res = root(num);
    while (res > 9){
      res = root(res);
    }
  }

  return res;
}
