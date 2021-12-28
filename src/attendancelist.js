import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Attendancelist() {

    const [studentlist, setstudentlist] = useState([])






    useEffect(async () => {
        try {
            let data = await fetch("http://localhost:4004/newAttendance")
            let getData = await data.json()
            setstudentlist(getData)

        } catch (error) {
            console.log(error);
        }

    }, [])

    return (
        <>

            <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-1">

                <span className="h3 p-1 rounded bg-info bg-gradient ">
                    <i class="fas fa-id-badge d-none d-sm-inline-block text-white-50 fa-sm "></i> Attendance Status
                </span>

                <Link to="/studentattendance">
                    <a className="d-none d-sm-inline-block btn btn-sm btn-primary btn-gradient shadow-sm">

                        <i class="fas fa-plus-square fa-sm"></i> Add Student

                    </a>
                </Link>


            </div>




            <div className='d-flex justify-content-center' >
                

                    <div className='table-responsive'>
                        <div className='table'>
                            <thead>
                                <tr>
                                    <th scope='col'>#</th>
                                    <th scope='col'>Teacher Name</th>
                                    <th scope='col'>Session</th>
                                    <th scope='col'>Student Name</th>
                                    <th scope='col'>Date</th>
                                    <th scope='col'>Action</th>


                                </tr>
                            </thead>

                            <tbody>
                                {
                                    studentlist.map((data, index) => {

                                        return <tr>

                                            <td>{index}</td>
                                            <td>{data.nameofteacher}</td>
                                            <td>{data.session}</td>
                                            <td>{data.studname}</td>
                                            <td>{data.date}</td>
                                            <td>
                                                <Link to={`/addattendance/${data.id}`}>
                                                    <button className='btn btn-primary btn-sm mx-1'><i class="fas fa-eye"></i> View</button>

                                                </Link>
                                            </td>



                                        </tr>
                                    })
                                }
                            </tbody>

                            <tfoot>
                                <tr>
                                    <th scope='col'>#</th>
                                    <th scope='col'>Teacher Name</th>
                                    <th scope='col'>Session</th>
                                    <th scope='col'>Student Name</th>
                                    <th scope='col'>Date</th>
                                </tr>
                                    <th scope='col'>Action</th>
                                
                             
                            </tfoot>


                        </div>
                    </div>
                </div>
           
        </>
    )
}

export default Attendancelist
