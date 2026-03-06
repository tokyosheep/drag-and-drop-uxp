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
		console.log(e.dataTransfer.getData("text"));
		if (e.dataTransfer.getData("text") === "red box") {
			window.uxpHost.postMessage(JSON.stringify({
				type: "dropped",
				msg: "red box"
			}));
			return;
		}
		const files = Array.from(e.dataTransfer.files);
		const pathList = files.map(v =>  v.path);
		console.log(files);
		console.log(pathList);
		// **Note** client side cannot file path directory
		Array.from(files).forEach((file) => {
    		const reader = new FileReader();
    		reader.addEventListener("load", function (event) {
			  // receiving data itself
    		  console.log(event);
    		});
    		reader.readAsDataURL(file);
  		});
	}
};

preventDragEvent();