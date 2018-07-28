//This function takes in the amount of republicans compared to the amount of democrats and returns a color


const colorMaker = (array) => {
  const dict = {
    rep: 0,
    dem: 0,
    non: 0,
    total: 0,
  }

  for (let rep of array) {
    if (rep.party === "Republican") {
      dict.rep++;
    } else if (rep.party === "Democratic") {
      dict.dem++;
    } else {
      dict.non++;
    }
    dict.total++;
  }
  
  const color = `rgba(${255 * dict.rep / dict.total},${0}, ${255 * dict.dem / dict.total}, ${(dict.total - dict.non) / dict.total})`
    
  console.log(color);

  return color;
}
export default colorMaker;