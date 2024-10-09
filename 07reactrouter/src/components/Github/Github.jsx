// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState(null);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/janardhanpg")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //         console.log(data);
  //       });
  //   }, []);
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} width={300} alt="" />
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/janardhanpg')
    return response.json()
}