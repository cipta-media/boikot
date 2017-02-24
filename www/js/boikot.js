var resultDiv;

document.addEventListener("deviceready", init, false);
function init() {
	document.querySelector("#startScan").addEventListener("touchend", startScan, false);
	resultDiv = document.querySelector("#results");
}

function startScan() {

	cordova.plugins.barcodeScanner.scan(
		function (result) {
			var barcode = result.text;
			var gui = '<div class="col s12 m8 l6 offset-m2 offset-l3"><div class="card " >'+
										'<div class="card-content card-move-up red ">'+
											'<p class="card-stats-title">'+barcode+'</p>'+
											'<h5 class="white-text">Masuk dalam data Boikot</h5>'+
										'</div></div></div>';
			
			//var s = "Result: " + result.text + "<br/>" +
			//"Format: " + result.format + "<br/>" +
			//"Cancelled: " + result.cancelled;
			resultDiv.innerHTML = gui;
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		}
	);

}
