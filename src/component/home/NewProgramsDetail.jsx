import React from 'react';
import Image from 'next/image';


export default function NewProgramsDetail ({data}){

    return(

       <>

<Image
      src="/profile.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />


<div className="table-responsive">
              <table className="table align-middle table-nowrap mb-0">
                <thead>
                  <tr>
                    <th scope="col" colSpan="2">
                      نوع اقامت
                    </th>
                    <th scope="col">درجه سختی</th>
                    <th scope="col">طول مسیر</th>
                    <th scope="col">قیمت</th>
                    <th scope="col">تاریخ سفر</th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((item, key) => (
                    <tr key={key}>
                      <td style={{ width: "100px" }}>
                       
                      </td>
                      <td>
                        <h5 className="font-size-13 text-truncate mb-1">
                        
                            {item.title}
                        
                        </h5>
                        <p className="text-muted mb-0">{item.date}</p>
                      </td>
                      <td>
                        <i className="bx bx-like align-middle me-1"></i>{" "}
                        {item.campType}
                      </td>
                      <td>
                        <i className="bx bx-comment-dots align-middle me-1"></i>{" "}
                        {item.price}
                      </td>
                      <td>
                      {item.distance}
                      
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
       </>

    )

}