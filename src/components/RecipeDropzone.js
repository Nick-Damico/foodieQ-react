import React, { Component, PropTypes, } from 'react';
import { reduxForm, Field } from 'redux-form';
import Dropzone from 'react-dropzone';

const renderDropzoneInput = (field) => {
  const files = field.input.value;
  return (
    <div>
      <Dropzone
        name={field.name}
        onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}
      >
        <div>Try dropping some files here, or click to select files to upload.</div>
      </Dropzone>
      {field.meta.touched &&
        field.meta.error &&
        <span className="error">{field.meta.error}</span>}
      {files && Array.isArray(files) && (
        <ul>
          { files.map((file, i) => <li key={i}>{file.name}</li>) }
        </ul>
      )}
    </div>
  );
}

export default RecipeDropzone;
//  FOR USE IN THE FORM TO RENDER THIS COMPONENT
// <label htmlFor={FILE_FIELD_NAME}>Files</label>
// <Field
//   name={FILE_FIELD_NAME}
//   component={renderDropzoneInput}
// />
