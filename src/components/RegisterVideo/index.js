import React from "react";
import { StyledRegisterVideo } from "./styles";

function useForm(propsForm){
    const [values, setValues] = React.useState(propsForm.initialValues);
    return {
        values,
        handleChange:
            (event) => {
                const value = event.target.value;
                const name = event.target.name;
                console.log(value);
                setValues({
                    ...values,
                    [name]: value,
                });
            },
        clearForm() {
            setValues({});
        } 
        
    };
}

export default function RegisterVideo() {
    const formRegister = useForm({
        initialValues: { title: "SIMULACRA", url:"https://youtube.com"}
    });
    const [showForm, setShowForm]= React.useState(false);
    return (
    <StyledRegisterVideo>
        <button className="add-video" onClick={() => {setShowForm(true)}}>
            +
        </button>
        {showForm 
            ? (
            <form onSubmit={(event) => {
                event.preventDefault();
                setShowForm(false);
                formRegister.clearForm();
            }}>
                <div>
                    <button type="button" className="close-modal" onClick={() => {setShowForm(false)}}>
                        X
                    </button>
                    <input 
                    placeholder="Video title" 
                    name="title"
                    value={formRegister.values.title} 
                    onChange={formRegister.handleChange} 
                    />
                    <input 
                    placeholder="URL" 
                    name="url"
                    value={formRegister.values.url}
                    onChange={formRegister.handleChange} 
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