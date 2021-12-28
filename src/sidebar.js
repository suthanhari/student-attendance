import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <>


            <Link to="/" className='nav-link' class="active" href="#"><i class="fas fa-home" ></i> Home</Link>

            <Link className='nav-link' to="/studentlist"><i class="far fa-newspaper" ></i> Report</Link>
            <a href="#"><i class="far fa-newspaper" ></i> Student Absent Letter</a>
            <a href="#"><i class="far fa-newspaper" ></i> Teacher Absent Letter</a>
            <a href="#"><i class="fas fa-id-card-alt" ></i> Contact</a>
            <a href="#"><i class="fas fa-info-circle" ></i> About</a>

        </>
    )
}

export default Sidebar
