let toastBox = document.getElementById('toastBox');
let successMsg = '<img src="bxs-check-circle.svg"> Successfully submitted';
let errorMsg = '<img src="bx-x-circle.svg"> Please fix the error';
let invalidMsg = '<img src="bxs-alarm-exclamation.svg"> Invalid input, check again';

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }

    setTimeout(()=>{
        toast.remove();
    },6000);
}