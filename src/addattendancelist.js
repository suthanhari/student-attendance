import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Addattendancelist() {

    const [attendance, setAttendance] = useState([])

    let params = useParams()

    useEffect(async () => {
        try {
            let data = await fetch(`http://localhost:4004/addAttendance?studentid=${params.id}`)
            let setData = await data.json()
            setAttendance(setData)

        }
        catch (error) {
            console.log(error);
        }
    }, [])

    return (

        <>
            <div className='row-sm d-md-flex justify-content-center mt-5' >



               
                    <div className='table-responsive '>
                        <div className='table table-success table-hover col-md-6'>
                            <thead>
                                <tr>
                                    <th>Attendance</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    attendance.map((data) => {

                                        return <tr>
                                            <td>{data.attendance}</td>
                                            <td>{data.date}</td>
                                        </tr>

                                    })
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Attendance</th>
                                    <th>Date</th>
                                </tr>
                            </tfoot>

                        </div>



                    </div>
                </div>
            


        </>
    )
}

export default Addattendancelist
