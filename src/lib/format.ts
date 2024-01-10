


const format = (price : number) => {
  return (
   
   price/100
  ).toLocaleString("len-US",{

style : "currency",
currency :"USD"

  })
};

export default format
