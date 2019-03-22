'use strict';

module.exports.hello = async (event, context) => {
  console.log(event);
  let message = 'Hello World';
  let name = event.queryStringParameters && event.queryStringParameters.name;
  
  if (name) {
    message = `Hello ${name}`;
  }
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      message,
      input: event,
    }),
  };
};

module.exports.hola = async (event, context) => {
  console.log(event);
  let message = 'Hola Mundo';
  let name = event.pathParameters && event.pathParameters.name;
  
  if (name) {
    message = `Hola ${name}`;
  }
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      message,
      input: event,
    }),
  };
};

module.exports.moi = async (event, context) => {
  const body = JSON.parse(event.body);
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: body,
      input: event,
    }),
  };
};