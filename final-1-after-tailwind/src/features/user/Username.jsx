import { useSelector } from "react-redux";

function Username() {
const userName=  useSelector((state)=>state.user.username)
if(!userName) return null
console.log(`this is user name ${userName}` )
  return <div className="hidden text-sm font-semibold md:block">{userName}</div>;
}

export default Username;
// const username = useSelector((state) => state.user.username);