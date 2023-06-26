import React from "react";
import { StyledRegisterVideo } from "./styles";

export default function RegisterVideo() {
    const [showForm, setShowForm]= React.useState(false);
    const [values, setValues] = React.useState({title: "", url: ""});

    return (
    <StyledRegisterVideo>
        <button className="add-video" onClick={() => {setShowForm(true)}}>
            +
        </button>
        {showForm 
            ? (
            <form onSubmit={(event) => {
                event.preventDefault();
            }}>
                <div>
                    <button className="close-modal" onClick={() => {setShowForm(false)}}>
                        X
                    </button>
                    <input 
                    placeholder="Video title" 
                    value={values.title} 
                    onChange={(event) => {
                        const value = event.target.value;
                        console.log(value);
                        setValues({
                            ...values,
                            title: value,
                        });
                    }} 
                    />
                    <input 
                    placeholder="URL" 
                    value={values.url}
                    onChange={(event) => {
                        const value = event.target.value;
                        console.log(value);
                        setValues({
                            ...values,
                            url: value,
                        });
                    }}  
                    />
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
            ) 
            : null }
    </StyledRegisterVideo>
    );
}