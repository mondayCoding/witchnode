
import axios from 'axios';
import anno from '../utils/annoModule';
import { } from '../interfaces';



export default class TodoApi {

  //get all items (callback)  
  public static getTodoCollectionCallback = (callback:any) =>
  {
    axios.get('/api/todo')
      .then(
        (response) => callback(response.data)
      )
      .catch(
        (error) => TodoApi.LogErrorResponse(error)
      );
  }

  //get all items (promise)
  public static async getTodoCollection() 
  {
    return new Promise((resolve) => 
    axios.get('/api/todo')
      .then(
        (response) => resolve(response.data)
      )
      .catch(
        (error) => TodoApi.LogErrorResponse(error)
      )
    );
  }

  //update item
  public static toggleHandler = (params:any, callback:any) =>
  {
    axios.put('api/todo/toggle', params)
      .then(
        (response) => callback(response.data)
      )
      .catch(
        (error) => TodoApi.LogErrorResponse(error)
      );
  }

  //add item
  public static addNewItemToCollection = (params:any, callback:any) =>  
  {
    axios.put('/api/todo', params)
      .then(
        (response) => callback(response.data)
      )
      .catch(
        (error) => TodoApi.LogErrorResponse(error)
      );
  }

  //delete item
  public static removeFromCollection = (params:any, callback:any) =>
  {
    axios({
      method:"delete",
      url:"/api/todo",
      data: params
    })
    .then(
      (response) => callback(response.data)
    )
    .catch(
      (error) => TodoApi.LogErrorResponse(error)
    );
    
  }


  //error logging utility
  public static LogErrorResponse = (error: any) =>
  {
    //log server side error response
    if (error.response) 
    {
      console.warn(error.response.data);
      console.warn(error.response.status);
      console.warn(error.response.headers);

      const status = error.response.status;
      const encoded_data = encodeURI(error.response.data);
      const message = (encoded_data.length < 200) ? error.response.data.replace(/<\/?[^>]+(>|$)/g, "") : "";

      anno.announce(`Encountered error on server side. <br> ${message}`, status, "error");
    }
    //log no response recieved 
    else if (error.request)
    {
      console.warn(error.request);
      anno.announce(`Request made to server received no answer`, null, "error");      
    }
    //something else happened
    else 
    {
      console.warn('Error', error.message);
    }
  }

}







