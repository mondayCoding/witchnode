
import axios, { AxiosError } from 'axios';
import anno from '../utils/annoModule';
import LOGGING from '../utils/loggingModule';


export default class TodoApi {

  //get all items (callback)  
  public static getTodoCollectionCallback = (callback:any) =>
  {
    axios.get('/api/todo')
      .then(
        (response) => callback(response.data)
      )
      .catch(
        (error) => LOGGING.LogErrorResponse(error)
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
        (error) => LOGGING.LogErrorResponse(error)
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
        (error) => LOGGING.LogErrorResponse(error)
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
        (error) => LOGGING.LogErrorResponse(error)
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
      (error:AxiosError) => LOGGING.LogErrorResponse(error)
    );
    
  }

}







