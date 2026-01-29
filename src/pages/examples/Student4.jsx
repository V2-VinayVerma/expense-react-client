import React, { useState } from 'react'

const Student4 = () => {
    const [visible, setVisible] = useState(true);
    
    const studentList = [
        { name: "Kundan", RollNumber: 1 },
        { name: "Vinay", RollNumber: 2 },
        { name: "Prashant", RollNumber: 3 },
    ];

    const handleClick = () => {
        setVisible(!visible);
    };

    return (
        <>
            <div>
                <button onClick={handleClick}>{visible? 'Hide Student' :'Display Students'}</button>

                {visible && (
                    <>
                        {
                            studentList.map((s) => (
                                <p key={s.RollNumber}>
                                    Roll Number : {s.RollNumber}
                                    <br />
                                    Name: {s.name}
                                </p>
                            ))
                        }
                    </>
                )}
            </div>
        </>
    )
}

export default Student4