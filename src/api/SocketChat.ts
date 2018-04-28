
import axios, { AxiosError } from 'axios';

import ANNO from '../utils/annoModule';
import LOGGING from '../utils/loggingModule';


export default class SocketChatApi {

  //chat all previous messages
  public static getChatHistory = (callback:any) => {
    axios.get('/api/chatHistory')
      .then(
        (response) => callback(response.data)
      )
      .catch(
        (error: AxiosError) => LOGGING.LogErrorResponse(error)
      );
  }

}







