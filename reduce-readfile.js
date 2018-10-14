const kkk = () => {
  const f = fs.readFileSync('buy.txt', 'utf-8')
    .trim()
    .split('\n')
    .map(el => el.trim())
    .map(el => el.split(' '))
    .reduce((acc, el) => {
      console.log(el);
      acc[el[0]] = acc[el[0]] || [];
      const obj = { name: el[1], price: el[2], q: el[3] }
      acc[el[0]].push(obj)
      return acc
    }, {})
  console.log(f);
  return f;
}