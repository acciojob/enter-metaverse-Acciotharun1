//your JS code here. If required.
let ptext=document.getElementById("status");
let button=document.getElementById("enterBtn");
button.addEventListener("click", function(){
	let h1=document.createElement("h1");
	h1.textContent="Entered Metaverse";
	h1.id="status";
	ptext.parentNode.replaceChild(h1,ptext);
})
