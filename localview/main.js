/**
 * Note
 * Dropping localfiles doesn't give each full file path in webView.
 * I've tested other methods, but finally I couldn't find any way to get them.
*/
const preventDragEvent = () =>{
    window.addEventListener(`drop`,handleDrop,false);
    
    window.addEventListener(`dragover`, dragOverEvent,false);
    
	/**
	 * 
	 * @param {*} e 
	 */
    function dragOverEvent (e){
        e.preventDefault();
		e.dataTransfer.dropEffect = "copy";
    }

	/**
	 * Note only native file,
	 * it also accepts red box on UXP panel
	 * in the environments newer than UXP 7.1.0
	 * @param {*} e 
	 */
	function handleDrop (e) {
		console.log("droped");
		console.log(e);
        e.preventDefault();
		const files = Array.from(e.dataTransfer.files);
		const pathList = files.map(v =>  v.path);
		console.log(files);
		console.log(pathList);
	}
};

preventDragEvent();