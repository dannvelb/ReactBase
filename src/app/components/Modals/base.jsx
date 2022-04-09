import React, {  Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const BaseModal = ({children, trigger}) => {
  
    return <> 
      <div>
        <span onClick={toggle}>{trigger}</span>
      </div>
      
        {children}
    
    </>
}



const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(
    mapStateToProps, {
}
)
    (withRouter(BaseModal));
    /**
     * <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your e-mail
              address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setOpen(false)}>
            Nope
          </Button>
          <Button
            content="Yep, that's me"
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
     */