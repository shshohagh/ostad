
function getDate(){
  const date = new Date()
  return date.toDateString()
}
const data = {
    message:'Welcome. Get ready to master Vue.js 3! - External js',
    date:getDate()+' -External js',
    tasks:['"No"',1,2,3,4,5,6,7], 
}
// export {data}
export default data