
import axios, { AxiosError } from 'axios';
import anno from '../utils/annoModule';
import LOGGING from '../utils/loggingModule';


export default class TodoApi {

	//get all items (callback)  
	public static getTodoCollectionCallback = (callback: any) => {
		axios.get('/api/todo')
			.then(
				(response) => callback(response.data)
			)
			.catch(
				(error) => LOGGING.LogErrorResponse(error)
			);
	}

	//get all items (promise)
	public static async getTodoCollection() {
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
	public static async toggleHandler(params: any) {
		return new Promise((resolve) =>
			axios.put('api/todo/toggle', params)
				.then(
					(response) => resolve(response.data)
				)
				.catch(
					(error) => LOGGING.LogErrorResponse(error)
				)
		);
	}

	//add item
	public static async addNewItemToCollection(params: any) {
		return new Promise((resolve) =>
			axios.put('/api/todo', params)
				.then(
					(response) => resolve(response.data)
				)
				.catch(
					(error) => LOGGING.LogErrorResponse(error)
				)
		);

	}

	//delete item
	public static async removeFromCollection(params: any) {
		return new Promise((resolve) =>
			axios({
				method: "delete",
				url: "/api/todo",
				data: params
			})
				.then(
					(response) => resolve(response.data)
				)
				.catch(
					(error: AxiosError) => LOGGING.LogErrorResponse(error)
				)
		);
	}

}







