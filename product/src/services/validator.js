const runSchema = (schema) => (data) => {
    const { error, value } = schema.validate(data);
  
    if (error) {
      const msg = error.details[0].message;
      error.message = msg;
      error.type = error.details[0].type;
      throw error;
    }
    return value;
  };
  
  export default runSchema;
