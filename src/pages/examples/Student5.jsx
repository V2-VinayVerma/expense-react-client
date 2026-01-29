import React, { useState } from 'react'

const Student5 = () => {
    const [visible, setVisible] = useState(true);
    const [buttonText, setbuttonText] = useState('Hide Students');

    const studentList = [
        { name: "Kundan", RollNumber: 1 },
        { name: "Vinay", RollNumber: 2 },
        { name: "Prashant", RollNumber: 3 },
    ];

    const handleClick = () => {
        //setVisible(!visible);  // putting chnage into queue

       setVisible(()=>{
        setbuttonText(!visible ? ' Hide Students': 'Display Students');
        return !visible;
       })
    };

    return (
        <>
            <div>
                <button onClick={handleClick}>{buttonText}</button>

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

export default Student5