import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import styled from 'styled-components';


const Ta = styled.textarea`
    resize: none;
`


class Form extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();

        fetch('https://degrawanddehaan.wordtestdomain.com/wp-json/contact-form-7/v1/contact-forms/42/feedback', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: {
                "your-name": "Kevin",
                "your-email": "kevingarubba@gmail.com",
                "your-subject": "Testing this one now",
                "your-message": "Awesome email"
            },
        });
    }
    
    render(){
        const { data } = this.props;
        console.log(data);
        return(
            <form onSubmit={this.handleSubmit}>
                {
                    data.fields.map( (field, index) => {
                        let type = field.field_type;
                        return (
                            <div>
                                { type === 'text_area' ? 
                                <Ta /> : 
                                <input id={`cb${index}`} name={field.name} type={`${type}`} />
                                }
                                <label for={`cb${index}`}>{field.name}</label>
                            </div>
                        )
                    })
                }
                <button>Send data!</button>
            </form>
        )
    }
}

export default withApollo(Form);