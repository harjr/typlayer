declare class TYPlayer {

		/**
	 * 版本号
	 */
	static VERSION: string
	/**
	 * 返回一个实例化TYPlayer对象.
	 * @param id 播放器容器.
	 * @param options 播放器初始化参数.
	 * @param ready 初始化完成之后的回调函数
	 */
	static instance(id?: string, options?: object, ready?: viod):TYPlayer


		/**
	 * 实例化构造函数.
	 * @param id 播放器容器.
	 * @param options 播放器初始化参数.
	 * @param ready 初始化完成之后的回调函数
	 */
	constructor(id?: string, options?: object, ready?: viod)


	/**
	 * Adds a listener to an event type.
	 * @param type The type of event to listen to.
	 * @param listener The function that gets called when the event is fired.
	 */
	addEventListener( type: string, listener: ( event: Event ) => void ): void;

	// someProperty: string[];
	// myMethod(opts: MyClass.MyClassMethodOptions): number;
}

// declare namespace UUU{
// 	let a:number
// }

// declare module "UUU" {
// 	export =UUU
// }
