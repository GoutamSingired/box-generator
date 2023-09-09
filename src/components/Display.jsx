import React from "react";

const Display = (props) => {
    const { isBoxVisible } = props;

        return ( 
            <>
                <div>
                {
                    isBoxVisible.map( (color, index) => (
                        <div key = {index} 
                        style = { {
                            height: '200px',
                            width: '200px',
                            border: '3px solid black',
                            margin: ' 10px',
                            backgroundColor: color,
                            display: "inline-block"
                        } }>

                        </div>

                    )

                    )

                }
                </div>
            
            </>
        )
}

export default Display;