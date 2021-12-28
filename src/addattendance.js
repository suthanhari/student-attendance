import { Formik, useFormik } from 'formik';
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function Addattendance() {
    let params = useParams()

    let navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            attendance: "",
            date: "",
            studentid: parseInt(params.id)
        },
        onSubmit: async (values) => {
            console.log(values);
            await fetch("http://localhost:4004/addAttendance", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-type": "application/json"
                }
            })
            navigate(`/history/${params.id}`);

        }
    })

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-1">

                <span className="h3 p-1 rounded bg-info bg-gradient ">
                    <i class="fas fa-id-badge d-none d-sm-inline-block text-white-50 fa-sm "></i> Attendance Status
                </span>


                <Link to={`/history/${params.id}`}>
                    <button className='btn btn-info'><i class="fas fa-history fa-sm"></i> History</button>

                </Link>

            </div>

            <form onSubmit={formik.handleSubmit}>
                <div className='row d-md-flex justify-content-center mt-5'>
                    <div className='card shadow col-6 p-5 d-md-flex align-items-center'>
                        <div className='col-md-5 mb-2'>
                            <select value="attendance" className='form-select' name="attendance" onChange={formik.handleChange} value={formik.values.attendance}>
                                <option value="present">Present</option>
                                <option value="absent">Absent</option>
                                
                            </select>
                        </div>
                        <div className='col-md-5 mb-2'>
                            <input className='form-control' type="date" required name="date" onChange={formik.handleChange} value={formik.values.date} />
                        </div>
                        <div className='col-md-2 mb-2'>
                            <input className='btn btn-primary' type="submit" />
                        </div>
                    </div>
                </div>

            </form>


        </>
    )
}
export default Addattendance;