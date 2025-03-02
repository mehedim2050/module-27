document.getElementById("cashout").style.display="none";
document.getElementById("add-money-box").addEventListener("click", function(){
    handleToggle("addmoney","block")
    handleToggle("cashout","none")

// document.getElementById("addmoney").style.display="block";
// document.getElementById("cashout").style.display="none";
})
document.getElementById("cashout-box").addEventListener("click", function(){
    handleToggle("addmoney","none")
    handleToggle("cashout","block")
})
function handleToggle(id,status){
    document.getElementById(id).style.display=status;
}