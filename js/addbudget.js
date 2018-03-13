function clickCounter() {
    
	if (localStorage.clickcount) {
		localStorage.clickcount = Number(localStorage.clickcount)+1;
	} else {
		localStorage.clickcount = 1;
	}
        
}
function addSample(){
	var amount = document.getElementById('amount');
	var food = document.getElementById('food');
	var travel = document.getElementById('travel');
	var personal = document.getElementById('personal');
	var balance = 0;
	
	
	clickCounter();
	
	//Saving the value of inputs
	localStorage.setItem('Amount_'+localStorage.clickcount,parseFloat(amount.value).toFixed(2));
	localStorage.setItem('Food_'+localStorage.clickcount,parseFloat(food.value).toFixed(2));
	localStorage.setItem('Travel_'+localStorage.clickcount,parseFloat(travel.value).toFixed(2));
	localStorage.setItem('Personal_'+localStorage.clickcount,parseFloat(personal.value).toFixed(2));
	
	//calculating the total amount
	var balance =  parseInt(amount.value) - (parseInt(food.value)+parseInt(travel.value)+parseInt(personal.value));
	
	//saving total balance
	localStorage.setItem('Balance_'+localStorage.clickcount, parseFloat(balance).toFixed(2));
	
	
	
	
	
	
}

function selectEditvalue(){
	var samplevalue = document.getElementsByTagName('input');
	for(var i = 0; i < samplevalue.length; i++){
		if(samplevalue[i].checked){
			localStorage.setItem('editvalue',i+1);
			return i+1;
		}
	}
	return -1;
}

function edit(){
	
	if(selectEditvalue()>0){
		location.href='edit.html';
	}else{
		alert('Please select');
	}
}

function getSample(){
	var editvalue = localStorage.editvalue;
	var amount = document.getElementById('amount');
	var food = document.getElementById('food');
	var travel = document.getElementById('travel');
	var personal = document.getElementById('personal');
	
	amount.value = localStorage.getItem('Amount_'+ editvalue);
	food.value = localStorage.getItem('Food_'+ editvalue);
	travel.value = localStorage.getItem('Travel_'+ editvalue);
	personal.value = localStorage.getItem('Personal_'+ editvalue);
	
}

function updateSample(){
	
	var editvalue = localStorage.editvalue;
	var amount = document.getElementById('amount');
	var food = document.getElementById('food');
	var travel = document.getElementById('travel');
	var personal = document.getElementById('personal');
	var balance = 0;
	
	localStorage.setItem('Amount_'+editvalue,parseFloat(amount.value).toFixed(2));
	localStorage.setItem('Food_'+editvalue,parseFloat(food.value).toFixed(2));
	localStorage.setItem('Travel_'+editvalue,parseFloat(travel.value).toFixed(2));
	localStorage.setItem('Personal_'+editvalue,parseFloat(personal.value).toFixed(2));	
	
	var balance =  parseInt(amount.value) - (parseInt(food.value)+parseInt(travel.value)+parseInt(personal.value));
	
	//saving total balance
	localStorage.setItem('Balance_'+editvalue, parseFloat(balance).toFixed(2));
	
	
	
}

