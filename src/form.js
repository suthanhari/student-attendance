import { useFormik } from 'formik';
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function Studentlist() {

    let navigate = useNavigate()

    let params = useParams()

    const formik = useFormik({
        initialValues: {
            nameofteacher: "",
            session: "",
            sessiontime: "",
            studname: "",
            date: "",
            studentid: parseInt(params.id)

        },
        onSubmit: async values => {
            try {

                await fetch("http://localhost:4004/newAttendance", {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                navigate("/Studentlist ")
            } catch (error) {
                console.log(error);
            }
        }

    })

    return (

        <>











            <form onSubmit={formik.handleSubmit}>

                <div className='row d-md-flex justify-content-center mt-5'>
                    <div className='card col-md-6 p-5 d-md-flex align-items-center shadow '>

                        <div className='col-md-6 mb-2 '>
                            <label for="nameofteacher" className='form-label'>Name Of Teacher</label>
                            <input type="text" className='form-control' placeholder='Enter teacher name' required
                                name="nameofteacher"
                                onChange={formik.handleChange}
                                value={formik.values.nameofteacher}
                            />
                            <div class="invalid-feedback"> invalid name</div>
                        </div>
                        <div className='col-md-6 mb-2 '>
                            <label for="sessionname" className='form-label'>Session </label>
                            <select className='form-select' value="session" name="session" onChange={formik.handleChange} value={formik.values.session}>

                                <option value="tamil">Tamil</option>
                                <option value="english">English</option>
                                <option value="chemistry">Chemistry</option>
                                <option value="physics">Physics</option>
                                <option value="computerscience">Computer Science</option>
                            </select>
                        </div>





                        <div className='col-md-6 mb-2'>
                            <label for="studname" className='form-label'>Name</label>
                            <input type="text" className='form-control' placeholder='Enter student name' required
                                name="studname"
                                onChange={formik.handleChange}
                                value={formik.values.studname} />
                            <div class="invalid-feedback">Name</div>
                        </div>

                        <div className='col-md-6 mb-2'>
                            <label for="date" className='form-label'>Date</label>
                            <input type="date" className='form-control' id='date'
                                name="date"
                                onChange={formik.handleChange}
                                value={formik.values.date}
                                required />
                            <div class="invalid-feedback">Date</div>
                        </div>
                        <div className='col-md-6 mb-2'>

                            <input type="submit" className='form-control' value="Add" className="btn btn-primary btn-sm" />
                        </div>
                    </div>





                </div>
            </form>
        </>
    )
}

export default Studentlist;
