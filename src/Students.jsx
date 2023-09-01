import React from 'react';

function Students() {
    var [students,setStudents]=React.useState(['Pallavi','Jaya','Dharma','Souwmya','Anu','Eshwar'])
    return (
        
            <div className='mybox' style={{width:"200px",height:"250px",fontFamily:"times new roman",boxShadow:"1px 10px 20px 2px"}}>
            <h1><b>Students</b></h1>
            
            {
                students.map((student)=>{
                    return <li>{student}</li>
                })
            }
        </div>
        
    );
}

export default Students;