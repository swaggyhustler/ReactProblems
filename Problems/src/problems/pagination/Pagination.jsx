import React,{useState} from "react";
import { useEffect } from "react";

const Pagination = () => {
  const [data,setData]=useState(null)
  const [page,setPage]=useState(1)
  let length=0;
  let array=[]
  const fetching= async()=>{
    const res=await fetch('https://dummyjson.com/products')
    const data=await res.json()
    setData(data.products)   
    length=data.length/10 

          
  }
  const pageChangeHandle=(i)=>{
    setPage(i)
  }
  useEffect(()=>{
    fetching()
    console.log(page)

  },[])
  return(
    <div className="container">
      <div className="row">
        {
          data?.slice((page-1)*10,page*10).map((item,index)=>{
            return (
              <div className="col-4">
                  <div className="card" style={{ width: '18rem',margin:"5px 10px"}} key={index}>
              <img src={item.images[0]} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  {item.title}
                </p>
              </div>
             </div>
              </div>
               )
          })
        }
      </div>
      <div className="row ">
         <div className="d-flex ">
         {
          [...Array(data?data?.length/10:0)].map((_,i)=>{
            return (
              <span className={`m-4 ${i+1==page?"bg-success":"none"}`}  style={{width:"20px",cursor:"pointer"}}onClick={()=>pageChangeHandle(i+1)}>{i+1}</span>
            )
          })
        }
         </div>
      </div>
       
    </div>
  )
};

export default Pagination;
